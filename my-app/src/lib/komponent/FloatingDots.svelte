<script>
import { onMount, onDestroy } from "svelte";
import { browser } from "$app/environment"; 

    let canvas;
    let ctx;
    let dots = [];
    let animationFrame;
    const numDots = 50;

    function createDots() {
    if (!browser) return; 

    dots = Array.from({ length: numDots }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 3,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    }));
    }

    function updateDots() {
    if (!browser) return; 

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

    function resizeCanvas() {
    if (!browser) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createDots();
    updateDots();
    }

  onMount(() => {
    if (!browser) return; 

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");

    createDots();
    updateDots();

    window.addEventListener("resize", resizeCanvas);
    });

    onDestroy(() => {
    if (!browser) return;
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resizeCanvas);
    });
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