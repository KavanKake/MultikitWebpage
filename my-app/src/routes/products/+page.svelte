<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
  
    // Redirect after mount
    onMount(() => {
      goto('/error404');
    });
  </script>