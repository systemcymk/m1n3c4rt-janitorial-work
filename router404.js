const route = async () => {
    try {
        const paige = await fetch(window.location.href + '/index.html')
        if (!paige.ok) {
            paige = await fetch(window.location.href + window.location.pathname.match(/(?:\/[^\/]+)($)/) + '.html')
            if (!paige.ok) {
                paige = await fetch(window.location.href + '.html')
                if (!paige.ok) {
                    throw new Error(`No page found here! Status: ${paige.status}`);
                }
            }
        }
        window.location.assign(paige.url);
        // window.location.reload(); // goodbye!!
        // document.documentElement.innerHTML = paige.text();
    } catch (error) {
        console.error(error.message);
    }
}

window.route = route;
route();