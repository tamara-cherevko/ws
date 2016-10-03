if ('serviceWorker' in window.navigator) {
    window.navigator.serviceWorker.
    register('./sw.js').
    catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
    });
}



