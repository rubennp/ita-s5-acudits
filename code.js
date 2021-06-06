let joke;

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

const newJoke = () => {
    getJoke().then((ok) => {
        joke = ok;
        document.getElementById("joke").innerHTML = joke;
        console.log(joke);
    });
};