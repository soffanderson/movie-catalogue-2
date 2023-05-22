/* eslint-disable no-useless-return */
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker registered');
  } catch (error) {
    console.log('Failed to register service Worker', error);
  }
};

export default swRegister;
