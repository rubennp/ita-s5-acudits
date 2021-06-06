const getJoke = async () => {
    return await new Promise((resolve, reject) => {
        fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(r => r.json())
        .then(d => resolve(d.joke));
    });
};

window.addEventListener('load', () => {
    getJoke().then((ok) => {
        document.getElementById("joke").innerHTML = ok;
        console.log(ok); 
    });
});