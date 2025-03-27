<script>

</script>


<div class="navbar">

    <div class="leftside">
        <a href="/">
            <h1>Multikit</h1>
        </a>
    </div>


    <div class="rightside">
        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>

    </div>






</div>



<slot>
</slot>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        background-color: white;
        padding-left: 25px; padding-right: 25px;
        border-bottom: 0.5em solid #3B0086;
        font-family: coolvetica;
        text-decoration: none;
        height: 12.5vh;
    }

    .rightside {
        display: flex;
        gap: 25px;
        font-size: 1.5em;
        letter-spacing: 2px;
        color: black;
    }

    .leftside {
        display: flex;
        gap: 10px;
        font-size: 1.5em;
        color: black;
        letter-spacing: 2px;
        color: black;
    }

    h1 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #0D5C63;
        transition: all 0.2s ease-in-out;

        &&:hover {
            color: #3B0086;
            transform: scale(1.1);
            text-decoration: underline;
        }
    }

</style>