const publicVapidKey = 'BIVqrtU7p6dTkdflzFLk4S6YaK0vsFWBdZrhJqzHjpy7gurBNElQDLnJqE_M11o1my0AGVMOZWoRUzzDZxBdxUA';

// Check for service worker in navigator (basically, the API for the browser)
if('serviceWorker' in navigator) {
  send().catch(err => console.error(err));
}

//Send Push notification
async function send() {

  // Register SW
  console.log('Registering service worker...');
  const register = await navigator.serviceWorker.register('/worker.js', {
    // Define URLs whereat SW will apply
    scope: '/'
  });
  console.log('Service Worker registered.');

  // Register Push (using browser's push API)
  console.log('Registering push...');
  const subscription = await register.pushManager.subscribe({
    userVisableOnly: true,
    applicationServerKey: urlBase64ToUintArray(publicVapidKey);
  });
}
