<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    import NavbarFront from "$lib/komponent/navbarFront.svelte";
    import { isLoggedIn } from "../../stores/auth";

    async function handleSubmit(event) {
        event.preventDefault();

        const userInput = document.getElementById("user").value;
        const passwordInput = document.getElementById("password").value;
        let user = null;
        let userID = null;
        let status = "failed";
        const ip = await getUserIP();
        const userAgent = navigator.userAgent;
        
        try {
            // Hent brukerinformasjon fra server
            const response = await fetch("http://localhost:3000/userData");
            if (!response.ok) throw new Error("Failed to fetch user data");
            
            const users = await response.json();
            user = users.find(u => u.email === userInput || u.phonenumber === userInput);
            
            if (user) {
                userID = user.userID;
                const hashedPassword = await hashPassword(passwordInput);
                if (hashedPassword === user.password) {
                    console.log("Login successful");
                    isLoggedIn.set(true);
                    status = "success";
                    await logLogin(userID, ip, userAgent, status);
                    goto("/dashboard");
                    return;
                }
            }
            alert("Incorrect email/phone or password");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        await logLogin(userID, ip, userAgent, status);
    }

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashbuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashbuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function getUserIP() {
        try {
            const response = await fetch('https://api64.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error("Error getting IP address:", error);
            return "unknown";
        }
    }

    async function logLogin(userID, ip, userAgent, status) {
        try {
            await fetch("http://localhost:3000/log-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userID, ip, userAgent, status })
            });
        } catch (error) {
            console.error("Error logging login attempt:", error);
        }
    }
</script>

<NavbarFront />

<div class="page">
    <div class="rightContainer">
        <div class="overskrift">
            <h1>Log in here!</h1>
        </div>
    
        <form class="login" id="login" on:submit={handleSubmit}>
            <div class="form">

                <div class="user">
                    <input  id="user" type="email, phonenumber" class="placeholderName" placeholder="E-mail address / Phonenumber" required autocomplete="off">
                </div>
    
                <div class="passord">
                    <input id="password" type="password" class="placeholderName" placeholder="Password" required autocomplete="off">
                </div>

            </div>
    
            <div class="buttons">
                <button class="submit" type="submit">Log in</button>
            </div>
        </form>
    </div>

    <div class="leftContainer">
        <div class="topp">
            <div class="topptekst">
                <h1>Back already?</h1>
            </div>  
            <div class="undertekst">
                <h1>Log in and get back to work!</h1>
            </div>
        </div>
        <div class="bunn">
            <div class="medlem">
                <h1>If you don’t have a account, make it here:</h1>
            </div>
            <div class="medlemknapp">
                <a class="login-button" href="/signup">Sign up</a>
            </div>
        </div>
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

    .medlem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: coolvetica;
        font-size: 0.75em;
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

    .topptekst{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: start;
        color: #0D5C63;
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
        color: #0D5C63;
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
        background-color: #0D5C63;
        border: 2px solid #0D5C63;
        border-radius: 20px 20px 20px 20px;
        width: 20em;
        height: 3em;
        transition: all 0.5s ease-in-out;
        &&:hover{
            scale: 1.2;
        }

    }

    .rightContainer{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #3B0086;
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