<script>
    import { onMount, onDestroy } from "svelte";
    import FloatingDots from "../../lib/komponent/FloatingDots.svelte";
    import { fade } from 'svelte/transition';
    import { isLoggedIn } from '../../stores/auth';
	import { goto } from '$app/navigation';

    let showAnimation = true;
    let showUserMenu = false;
    let userMenuRef;
    let iconRef;

    function toggleUserMenu() {
        showUserMenu = !showUserMenu;
    }

    function handleClickOutside(event) {
        const clickedOutsideMenu = userMenuRef && !userMenuRef.contains(event.target);
        const clickedOutsideIcon = iconRef && !iconRef.contains(event.target);
        if (showUserMenu && clickedOutsideMenu && clickedOutsideIcon) {
            showUserMenu = false;
        }
    }

    function logout() {
		isLoggedIn.set(false);
		goto('/');
	}


    onMount(() => {
        document.addEventListener("click", handleClickOutside);
    });

    onDestroy(() => {
        document.removeEventListener("click", handleClickOutside);
    });
    onMount(() => {
		$isLoggedIn && goto('/dashboard'); 
	});

    onMount(() => {
        if (!$isLoggedIn) {
			goto('/notLoggedIn'); 
		}
    })

    </script>

<div class="page">
    <div class="navbar">
        <div class="left">
            <a href="/">
                <img class="logo" src="/multikitLogo.png" alt="Logo" >
            </a>
            <a href="/products">
            <h1 class="products">Our products</h1></a>
        </div>
        <div class="center">
            <h1 class="title">Home</h1>
        </div>
        <div class="right">
            <a href="/contactus">
                <h1 class="contact">Contact us</h1>
            </a>
            <div class="user-icon-container">
                <img class="logo" src="/profile.png" alt="Profile icon" on:click={toggleUserMenu}>
        
                {#if showUserMenu}
                    <div class="user-menu" bind:this={userMenuRef}>
                        <button on:click={logout}>Logg ut</button>
                    </div>
                {/if}
            </div>
        </div>
    </div>

    <div class="spacer"></div>

    <div class="content">
        <div class="top">
            <h1>Welcome to your dashboard</h1>
        </div>

        <div class="latest">
            <div class="containerOverskrift">
                <h1>Latest news</h1>
            </div>
            <div class="container">
                <div class="latestNewsImg">
                    <img class="newsImg" src="/LatestNews.png" alt="">
                </div>
                <div class="latestNewsText">
                    <p class="ptagTitle">Launch of Multikit 🚀 </p>
                    
                    <p class="ptag">We’re excited to introduce Multikit — your all-in-one online toolkit! With Multikit, you’ll have easy access to a currency converter, calculator, reminders, and much more. Designed to simplify your everyday tasks, whether you’re managing your finances, jotting down quick notes, or keeping track of time. And the best part? Even more handy tools are on the way! </p>

                    <p class="ptag">Multikit is free, user-friendly, and always available — try it out today!</p>
                </div>
            </div>
        </div>

        <div class="spacerMini"></div>

        <div class="quickstart">
            <div class="quickstartOverskrift">
                <h1>Quickstart</h1>
            </div>
            <div class="quickstartContainer">
                <div class="calculator">
                    <h3>Calculator</h3>
                </div>
                <div class="Convertor">
                    <h3>Valuta Conversion</h3>
                </div>
                <div class="passwordGenerator">
                    <a href="/tools/passwordgenerator">
                        <h3>Password Generator</h3>
                    </a>
                </div>
                <div class="DMQ">
                    <h3>Daily Motivational Quote</h3>
                </div>
            </div>

        </div>
    </div>


    <button on:click={logout}>Logg ut</button>

</div>



<style>
    .logo{
        width: 60px;
        height: auto;
    }

    .page{
        font-family: coolvetica;
    }

    .spacer{
        height: 15vh;
    }

    .spacerMini{
        height: 5vh;
    }

    .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 15vh;
    justify-content: space-between;
    border-bottom: #0D5C63 5px solid;
    background-color: white; 
    z-index: 1000; 
}

    .left{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2em;
        padding-left: 2em;
    }

    .center{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .right{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2em;
        padding-right: 2em;
    }

    a{
        text-decoration: none;
        font-size: 1em;
    }

    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        font-size: 1em;
        height: 15vh;
    }

    a:hover{
        color: #3B0086;
        scale: 1.2;
        text-decoration: underline;
    }

    .title{
        font-size: 3.5em;
        color: #DB2955;
    }

    .products , .contact{
        font-size: 1.5em;
        color: #0D5C63;
        gap: 1em;
    }

    .latest{
        height: 68vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .container{
        display: flex;      
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        gap: 1em;
        height: 30em;
        width: 95%;
        background-color: #3B0086;
        opacity: 0.9;
        font-family: coolvetica;
    }

    h1{
        margin: 0;
    }

    .containerOverskrift{
        padding-left: 3em;
        padding-bottom: 0em;
        color: #3B0086;
        font-size: large;
    }

    .newsImg{   
        margin: 0 auto;
        padding-left: 2.5em;
        width: 35em;
        height: auto;
    }

    .ptag{
        color: white;
        font-size: larger;
        text-align: right;
        padding-right: 2.5em;
    }

    .ptagTitle {
        color: white;
        font-size: 2em;
        text-align: right;
        padding-right: 2.5em;
    }

    .quickstartContainer{
        display: flex;      
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 auto;
        gap: 1em;
        height: 30em;
        width: 95%;
        background-color: #0D5C63;
        opacity: 0.9;
        font-family: coolvetica;
    }

    .quickstartOverskrift{
        padding-left: 3em;
        padding-bottom: 0em;
        color: #0D5C63;
        font-size: large;
    }

    .quickstart{
        height: 80vh;
        padding-top: 2.5em;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .calculator , .passwordGenerator {
        height: 20em;
        width: 20%;
        background-color: #3B0086;
        border-radius: 20px;
        transition: transform 0.3s ease-in-out;

        &:hover {
        transform: scale(1.2); /* Use transform instead of scale */
    }
    }

    .DMQ , .Convertor {
        height: 20em;
        width: 20%;
        background-color: #DB2955;
        border-radius: 20px;
        transition: transform 0.3s ease-in-out;
        &:hover {
        transform: scale(1.2); /* Use transform instead of scale */
    }
    }



    .DMQ , .Convertor , .calculator , .passwordGenerator{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 1.5em;
        color: white;
    }

    .user-icon-container {
    position: relative;
    cursor: pointer;
}

.user-menu {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    z-index: 2000;
    width: 100px;
}

.user-menu button {
    font-family: coolvetica;
    background: none;
    border: none;
    font-size: 1.15em;
    color: #0D5C63;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 8px;
    transition: background-color 0.2s;
    width: fit-content;
}

.user-menu button:hover {
    background-color: #f0f0f0;
}




</style>
