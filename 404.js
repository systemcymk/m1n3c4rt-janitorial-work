try {
    const paige = await fetch(window.location.href + '/index.html')
    if (!paige.ok) {
        paige = await fetch(window.location.href + window.location.pathname.match(/(?:\/[^\/]+)($)/) + '.html')
        if (!paige.ok) {
            throw new Error(`No page found here! Status: ${response.status}`);
        }
    }
    document.documentElement.innerHTML = paige.text();
} catch (error) {
    console.error(error.message);
}