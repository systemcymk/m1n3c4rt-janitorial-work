const route = async () => {
    try {
        const paige = await fetch(window.location.href + '/index.html')
        if (!paige.ok) {
            const paige2 = await fetch(window.location.href + window.location.pathname.match(/(?:\/[^\/]+)($)/) + '.html')
            if (!paige.ok) {
                const paige3 = await fetch(window.location.href + '.html')
                if (!paige.ok) {
                    throw new Error(`No page found here! Status: ${paige.status}, ${paige2.status}, ${paige3.status}`);
                }
            }
        }
        document.documentElement.innerHTML = paige.text();
    } catch (error) {
        console.error(error.message);
    }
}

window.route = route;
route();