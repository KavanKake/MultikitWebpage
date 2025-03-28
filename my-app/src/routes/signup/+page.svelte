
<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    const script = document.createElement('script');
    script.src = "https://apis.google.com/js/platform.js";

    

    let firstname = "";
    let lastname = "";
    let email = "";
    let phonenumber = "";
    let password = "";
    let acceptToS = false; // For the checkbox

    async function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        if (!acceptToS) {
            alert("You must accept the Terms of Service.");
            return;
        }

        const userData = {
            firstname,
            lastname,
            email,
            phonenumber,
            password,
        };

        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            alert("Sign up successful!");
            goto("/dashboard");

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to sign up.");
        }
    }
</script>

<div class="page">
    <div class="leftContainer">
        <div class="topp">
            <div class="topptekst">
                <h1>Great to see you joining!</h1>
            </div>
            <div class="undertekst">
                <h1>Before starting, we need some information about you. Fill in the form and get started!</h1>
            </div>
        </div>
        <div class="bunn">
            <div class="medlem">
                <h1>If you already have a account, log in here instead:</h1>
            </div>
            <div class="medlemknapp">
                <a class="login-button" href="/login">Log in</a>
            </div>
        </div>
    </div>

    <div class="rightContainer">
        <div class="overskrift">
            <h1>Sign up here!</h1>
        </div>

        <form class="login" on:submit={handleSubmit}>
            <div class="form">
                <div class="name">
                    <div class="firstname">
                        <input bind:value={firstname} type="text" class="placeholderName" placeholder="Firstname" required autocomplete="off">
                    </div>
                    <div class="lastname">
                        <input bind:value={lastname} type="text" class="placeholderName" placeholder="Lastname" required autocomplete="off">
                    </div>
                </div>

                <div class="epost">
                    <input bind:value={email} type="email" class="placeholderName" placeholder="E-mail address" required autocomplete="off">
                </div>

                <div class="phonenumber">
                    <input bind:value={phonenumber} type="text" class="placeholderName" placeholder="Phonenumber" required autocomplete="off">
                </div>

                <div class="passord">
                    <input bind:value={password} type="password" class="placeholderName" placeholder="Password" required autocomplete="off">
                </div>

                <div class="ToS">
                    <input bind:checked={acceptToS} type="checkbox" class="checkbox">
                    <div class="policy">
                        <p>I accept the</p> 
                        <a href="/information/termsOfService">Terms of Service</a>
                        <p>and</p>
                        <a href="/information/privacyPolicy">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <button class="submit" type="submit">Sign up</button>
                <div class="g-signin2" data-onsuccess="onSignIn">
                    <meta name="google-signin-client_id" content="621504888586-mtkiiuie0ci0q43jme1n417c59ht3ged.apps.googleusercontent.com">
                </div>
            </div>
        </form>
    </div>
</div>

<style>
    .page{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 86vh;
        border-bottom: 0.5em solid #3B0086;   
    }

    .leftContainer{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 20em;
        padding-left: 2em;
    }

    .topp{
        gap: 1em;
    }

    .policy{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        color: #3B0086;
        font-family: coolvetica;
        font-size: 1em;
    }

    .topptekst{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: start;
        color: #3B0086;
        font-family: coolvetica;
        font-size: 2em;
    }

    .bunn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .undertekst{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #3B0086;
        font-family: coolvetica;
        font-size: 1em;
    }

    .login-button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: coolvetica;
        font-size: 1.5em;
        background-color: #3B0086;
        border: 2px solid #3B0086;
        border-radius: 20px 20px 20px 20px;
        width: 20em;
        height: 3em;
        transition: all 0.5s ease-in-out;
        &&:hover{
            scale: 1.2;
        }
    }

    .medlem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: coolvetica;
        font-size: 0.75em;
    }


    .rightContainer{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #0D5C63;
    }

    .leftContainer{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .ToS{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .buttons{
        display: flex;
        align-items: row;
        flex-direction: row;
        gap: 1em;  
    }

    .overskrift{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: coolvetica;
        font-size: 25px;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        width: 400px;
        height: 50px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: transparent;
        border: #DB2955 2px solid;
        color: white;
    }

    input::placeholder{
        color: white;
        font-family: coolvetica;
        font-size: 20px;
    }

    .placeholderName{
        color: white;
        font-family: coolvetica;
        font-size: 20px;
    }

    .form p{
        color: white;
        font-family: coolvetica;
        font-size: 20px;
    }

    .checkbox{
        width: 25px;
        height: 25px;
        border-radius: 10px;
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: transparent;
        border: #DB2955 2px solid;
        color: white;
    }

    .submit{
        width: 200px;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: #DB2955;
        color: white;
    }

    .google{
        width: 200px;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        font-family: coolvetica;
        background-color: transparent;
        color: white;
        border: #DB2955 2px solid;
    }

    .submit:hover{
        background-color: #ae1c40;
        color: white;
        cursor: pointer;
    }
    
    .google:hover{
        border: #ae1c40 2px solid;
        color: white;
        cursor: pointer;
    }

    h1{
        font-family: coolvetica;
        margin: 0;
    }
    
</style>