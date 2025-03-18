<script>
import FloatingDots from "$lib/komponent/FloatingDots.svelte";
let showAnimation = true;
</script>



<div class="homepage">

    <div class="overskrift">
        <h1>GET YOUR MULTITOOL TODAY 
            AND GET STARTED WITH CREATING</h1>
    </div>
    <div class="knapper">
        <a class="signup" href="/homepage/signup">Sign up</a>
        <a class="login" href="/homepage/login">Log in</a>
    </div>
</div>



<style>


    .homepage{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        z-index: 100;
    }
    .overskrift{
        text-align: center;
        margin-bottom: 20px;
        width: 75%;
        height: fit-content;
        font-family: coolvetica;
        font-size: 2em;
    }

    .knapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: fit-content;
        gap: 1em;
    }

    a{
        text-decoration: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: coolvetica;
        font-size: 1.5em;
        margin: 10px;
        scale: 1.2;
        transition: all 0.3s ease-in-out;

        &&:hover{
            scale: 1.4;
        }
    }

    .signup{
        background-color: #3B0086;

    }
    .login{
        background-color: #DB2955;
    }
</style>


{#if showAnimation}
  <FloatingDots />
{/if}