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
        <a href="/contactus">
            <h1 class="contact">Contact us</h1>
        </a>
        <a href="/">
            <img class="logo" src="/profile.png" alt="Logo" >
        </a>
    </div>
</div>

<div class="spacer"></div>

<div class="content">
    <div class="form">
        <h1 class="contactform">Contact form</h1>
            <form method="POST" action="https://formsubmit.co/contact@kavinlokeswaran.no">
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
        color: #0D5C63;
        gap: 1em;
    }

    a:hover{
        color: #3B0086;
        scale: 1.2;
        text-decoration: underline;
    }

    .content{
        height: 85vh;
        font-family: coolvetica;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 2em;
        padding-right: 2em;
        border: #3B0086 2px solid;
        border-radius: 20px 20px 20px 20px;
        background-color: #0D5C63;
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
        color: white;
        font-size: 3em;
    }

    h3{
        color: white;
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
        border: #DB2955 2px solid;
        color: white;
    }

    input::placeholder{
        color: white;
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
        border: #DB2955 2px solid;
        color: white;
    }

    textarea::placeholder{
        color: white;
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

    





</style>