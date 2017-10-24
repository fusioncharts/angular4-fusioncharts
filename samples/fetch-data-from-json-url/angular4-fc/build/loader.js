System.import('app')
.catch((err) => {
    document.body.innerHTML = `<p><span style='color: red; font-weight: bold;'>Error:</span> ${err.message}</p>`;
});