// stores/auth.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // <- viktig!

const initial = browser && localStorage.getItem("isLoggedIn") === "true";

export const isLoggedIn = writable(initial);

// Kun når vi er i nettleser
if (browser) {
	isLoggedIn.subscribe((value) => {
		localStorage.setItem("isLoggedIn", value);
	});
}