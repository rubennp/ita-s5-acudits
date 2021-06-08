const jokeSources = 
[
    {
        name: 'Dad Jokes',
        url: 'https://icanhazdadjoke.com/',
        dataKeys: ['joke'],
    },
    {
        name: 'Chuck Norris Jokes',
        url: 'https://api.chucknorris.io/jokes/random',
        dataKeys: ['value'],
    },
    {
        name: 'Official Joke API',
        url: 'https://official-joke-api.appspot.com/jokes/random',
        dataKeys: ['setup', 'punchline'],
    },
];

const getSource = () => jokeSources[Math.floor(Math.random()*jokeSources.length)];

const getJoke = async (source) => {
    return await new Promise((resolve, reject) => {
        fetch(source.url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(r => r.json())
        .then(d => {
            let joke = "";
            source.dataKeys.forEach((key) => {
                joke += `${d[key]} `;
            });
            resolve(joke.trim());
        });
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
    let jokeSource = getSource();
    getJoke(jokeSource).then((ok) => {
        document.getElementById("from").innerHTML = jokeSource.name;
        document.getElementById("joke").innerHTML = `❝ ${ok} ❞`;
    });
};

window.addEventListener('load', () => {
    getWeather().then((ok) => {
        document.getElementById("temps").innerHTML = `Avui a Barcelona: ${ok}`;
    });
});

String.prototype.firstUpper = function() {
    return `${this.charAt(0).toUpperCase()}${this.substring(1)}`;
};