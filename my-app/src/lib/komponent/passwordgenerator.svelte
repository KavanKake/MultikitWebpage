<!-- Kode fra ChatGPT -->
<script>
    import { onMount } from 'svelte';
  
    let length = 16;
    let includeUppercase = true;
    let includeLowercase = true;
    let includeNumbers = true;
    let includeSymbols = true;
    let password = '';
    let copied = false;
    let strength = '';
  
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/`~';
  
    function generatePassword() {
      let charSet = '';
      if (includeLowercase) charSet += lowercaseChars;
      if (includeUppercase) charSet += uppercaseChars;
      if (includeNumbers) charSet += numberChars;
      if (includeSymbols) charSet += symbolChars;
  
      if (!charSet) {
        password = 'Select at least one option';
        strength = '';
        return;
      }
  
      password = Array.from({ length }, () =>
        charSet[Math.floor(Math.random() * charSet.length)]
      ).join('');
  
      evaluateStrength();
      copied = false;
    }
  
    function copyToClipboard() {
      navigator.clipboard.writeText(password).then(() => {
        copied = true;
      });
    }
  
    function evaluateStrength() {
      let score = 0;
      if (includeLowercase) score++;
      if (includeUppercase) score++;
      if (includeNumbers) score++;
      if (includeSymbols) score++;
      if (length >= 16) score++;
  
      strength =
        score <= 2
          ? 'Weak'
          : score === 3
          ? 'Moderate'
          : score === 4
          ? 'Strong'
          : 'Very Strong';
    }
  
    onMount(generatePassword);
  </script>
  
  <style>
    .container {
      max-width: 500px;
      margin: auto;
      padding: 1rem;
      font-family: sans-serif;
      border-radius: 12px;
      background: #f7f7f7;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .output {
      font-size: 1.2rem;
      word-break: break-all;
      padding: 0.5rem;
      background: white;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
    }
    button {
      padding: 0.5rem 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      border: none;
      background: #333;
      color: white;
      border-radius: 8px;
    }
    .strength {
      font-weight: bold;
      margin-top: 0.5rem;
      color: #555;
    }
  </style>
  
  <div class="container">
    <h2>Advanced Password Generator</h2>
  
    <div class="output">{password}</div>
  
    <div>
      <label>Password Length: {length}</label>
      <input type="range" min="4" max="64" bind:value={length} />
    </div>
  
    <div>
      <label><input type="checkbox" bind:checked={includeLowercase} /> Lowercase</label>
      <label><input type="checkbox" bind:checked={includeUppercase} /> Uppercase</label>
      <label><input type="checkbox" bind:checked={includeNumbers} /> Numbers</label>
      <label><input type="checkbox" bind:checked={includeSymbols} /> Symbols</label>
    </div>
  
    <button on:click={generatePassword}>Generate</button>
    <button on:click={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</button>
  
    <div class="strength">Strength: {strength}</div>
  </div>