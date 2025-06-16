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
</script>

<div class="navbar">
    <div class="left">
        <a href="/">
            <img class="logo" src="/multikitLogo.png" alt="Logo" >
        </a>
        <a href="/products">
        <h1 class="products">Our products</h1></a>
    </div>
    <div class="center">
        <a href="/dashboard">

            <h1 class="title">Home</h1>
        </a>
    </div>
    <div class="right">
        <h1 class="contact">Contact us</h1>
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
    <div class="form">
        <div class="contactformborder">
            <h1 class="contactform">Contact form</h1>
                <form method="POST" action="https://formsubmit.co/Kavin_Lokeswaran1407@outlook.com">
                    <h3 class="name">Your name</h3>
                    <div class="nameSplit">
                        <input name="Name" type="text" class="placeholderName" placeholder="First name" required>
                        <input name="Name" type="text" class="placeholderName" placeholder="Last name" required>
                    </div>
                    <h3 class="name">Your e-mail</h3>
                    <input name="Email" type="email" class="placeholder" placeholder="Enter your e-mail" required>
                    <h3 class="name">Topic</h3>
                    <input name="Topic" type="text" class="placeholder" placeholder="Enter your topic">
                    <h3 class="name">Message</h3>
                    <textarea name="Message" placeholder="Enter message"></textarea>
                    <button class="submit"type="submit">Send in</button>
                </form>
        </div>
    </div>

</div>



<style>
.logo{
    width: 60px;
    height: auto;
}

.spacer{
    height: 15vh;
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
    font-family: coolvetica;
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

    .title{
        font-size: 3.5em;
        color: #DB2955;
    }

    .products , .contact{
        font-size: 1.5em;
        gap: 1em;
        color: #0D5C63;
    }

    a:hover{
        color: #0D5C63;
        scale: 1.2;
        text-decoration: underline;
    }

    .content{
        height: 85vh;
        font-family: coolvetica;
        scale: 0.9;
    }

    .logo{
        width: 60px;
        height: auto;
    }

    .logo:hover{
        scale: 1.2;
    }

    .nameSplit{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 400px;
        gap: 1em;
    }

    .contactformborder{
        border: #DB2955 2px solid;
        border-radius: 20px;
        padding: 2em;
        padding-bottom: 0;
        background-color: white;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 2em;
        padding-right: 2em;
        opacity: 0.9;

    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 2em;
        padding-right: 2em;
    }

    .contactform{
        color: black;
        font-size: 3em;
        margin: 0;
    }

    h3{
        color: black;
        font-size: 1.5em;
        margin: 0;
        margin-top: 1em;
        margin-bottom: 0.5em;
    }

    input{
        width: 400px;
        height: px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: transparent;
        border: #0D5C63 2px solid;
        color: black;
    }

    input::placeholder{
        color: black;
        font-family: coolvetica;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    textarea{
        width: 400px;
        height: 100px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: transparent;
        border: #0D5C63 2px solid;
        color: black    ;
    }

    textarea::placeholder{
        color: black;
        font-family: coolvetica;
        font-size: 20px;
    }

    .submit{
        width: 200px;
        height: 40px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: #DB2955;
        color: white;
    }

    .contactform{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
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

{#if showAnimation}
  <FloatingDots />
{/if}