<script>
    import { onMount, onDestroy } from "svelte";
  
    let canvas;
    let ctx;
    let dots = [];
    let animationFrame;
    const numDots = 50;
  
    function createDots() {
      dots = Array.from({ length: numDots }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 5 + 3,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      }));
    }
  
    function updateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;
  
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
  
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });
  
      animationFrame = requestAnimationFrame(updateDots);
    }
  
    onMount(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext("2d");
  
      createDots();
      updateDots();
    });
  
    onDestroy(() => {
      cancelAnimationFrame(animationFrame); // Stopper animasjonen ved navigering
    });
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    }
  
    window.addEventListener("resize", resizeCanvas);
    onDestroy(() => window.removeEventListener("resize", resizeCanvas));
  </script>
  
  <canvas bind:this={canvas} class="background"></canvas>
  
  <style>
    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -100;
    }
  </style>