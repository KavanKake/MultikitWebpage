<script>
    import { onMount } from 'svelte';

    let joke = ""
  
    onMount(async () => {
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
  
        let data = await response.json();
        console.log("Dad joke:", data.joke); 
        joke = data.joke
      } catch (error) {
        console.error("Error fetching:", error);
      }
    });
  </script>
  
  <main>
    <h1>{joke}</h1>
  </main>