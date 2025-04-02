







<script>
    import { isLoggedIn } from "../../stores/auth";
    </script>

{#if $isLoggedIn}
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
            <a href="/">
                <img class="logo" src="/profile.png" alt="Logo" >
            </a>
        </div>
    </div>




</div>

{:else}
    <script>
        window.location.href = "/notLoggedIn";
    </script>
{/if}



<style>
    .logo{
        width: 60px;
        height: auto;
    }

    .page{
        font-family: coolvetica;
    }

    .navbar{
        display: flex;
        flex-direction: row;
        height: 10vh;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 10px ; padding-top: 10px; 
        border-bottom: 5px solid #3B0086;
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
    }
</style>
