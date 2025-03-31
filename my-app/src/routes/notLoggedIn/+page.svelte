<script>
    import FloatingDots from "../../lib/komponent/FloatingDots.svelte";
    let showAnimation = true;
</script>


<div class="page">
    <div class="container">
        <div class="upperpart">
            <h1>You are not logged in</h1>
            <h1>Log in and get back to work!</h1>
        </div>
        <div class="lowerpart">
            <a class="login-button" href="/login">Log in</a>
        </div>
    </div>
</div>



{#if showAnimation}
  <FloatingDots />
{/if}

<style>
    .page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2em;
        height: 30em;
        width: 40em;
        border: #3B0086 2px solid;
        border-radius: 20px 20px 20px 20px;
        background-color: #0D5C63;
        opacity: 0.9;
        font-family: coolvetica;
    }

    .upperpart{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .lowerpart{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 1em;
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
        border: 2px solid #000000;
        border-radius: 20px 20px 20px 20px;
        width: 20em;
        height: 3em;
        transition: all 0.5s ease-in-out;
        &&:hover{
            scale: 1.2;
        }
    }

    h1{
        color: white;
        margin: 0;
    }

    a{
        text-decoration: none;
    }
</style>