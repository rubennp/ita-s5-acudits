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

const getWeather = async () => {
    return await new Promise((resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&lang=ca&appid=5cabe7ed609895d6bb216b752535a455', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(r => r.json())
        .then(d => resolve(d.weather[0].description.firstUpper()));
    });
};

const newJoke = () => {
    getJoke().then((ok) => {
        document.getElementById("joke").innerHTML = ok;
        console.log(ok);
    });
};

window.addEventListener('load', () => {
    getWeather().then((ok) => {
        document.getElementById("temps").innerHTML = `Avui a Barcelona: ${ok}`;
        console.log(ok);
    });
});

String.prototype.firstUpper = function() {
    return `${this.charAt(0).toUpperCase()}${this.substring(1)}`;
};