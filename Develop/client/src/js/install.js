const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';
    textHeader.textContent = 'Click the button to install!';
});

//click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

  // Check if the PWA can be installed
  if (window.deferredPrompt) {
    // Show installation prompt
    window.deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await window.deferredPrompt.userChoice;

    // Handle the user's choice
    if (outcome === 'accepted') {
      console.log('PWA installation accepted.');
    } else {
      console.log('PWA installation rejected.');
    }

    // Clear the deferredPrompt for future use
    window.deferredPrompt = null;
  }
});

//handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
