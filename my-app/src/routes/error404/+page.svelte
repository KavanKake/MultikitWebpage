<script>
    export let error;
    export let status;
  
    const goHome = () => {
      window.location.href = '/';
    };
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(to bottom right, #3B0086, #151523);
      color: #fff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-align: center;
      padding: 2rem;
    }
  
    .big {
      font-size: 8rem;
      font-weight: bold;
      text-shadow: 0 0 20px #DB2955, 0 0 40px #DB2955;
      animation: glow 2s ease-in-out infinite alternate;
    }
  
    .message {
      font-size: 1.5rem;
      margin: 1rem 0 2rem;
      max-width: 500px;
    }
  
    .btn {
      padding: 0.75rem 1.5rem;
      background: #DB2955;
      border: none;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;
    }
  
    .btn:hover {
      background: rgb(147, 19, 62);
    }
  
    @keyframes glow {
      from {
        text-shadow: 0 0 10px #ff4081, 0 0 20px #ff4081;
      }
      to {
        text-shadow: 0 0 30px #ff4081, 0 0 60px #ff4081;
      }
    }
  </style>
  
  <div class="container">
    <div class="big">{status}</div>
    <div class="message">
      {status === 404
        ? "Oops! The page you're looking for doesn't exist."
        : error?.message || "Something went wrong."}
    </div>
    <button class="btn" on:click={goHome}>Go to Home</button>
  </div>