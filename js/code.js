const jokeSources = 
[
    {
        url: 'https://icanhazdadjoke.com/',
        dataKeys: ['joke'],
    },
    {
        url: 'https://api.chucknorris.io/jokes/random',
        dataKeys: ['value'],
    },
    {
        url: 'https://official-joke-api.appspot.com/jokes/random',
        dataKeys: ['setup', 'punchline'],
    },
];

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

//chuck norris
fetch("https://api.chucknorris.io/jokes/random", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
	}
})
.then(r => r.json())
.then(d => d.value)
.then(ok => console.log(ok))
.catch(err => {
	console.error(err);
});

//jokes api
fetch("https://official-joke-api.appspot.com/jokes/random", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
	}
})
.then(r => r.json())
.then(d => `${d.setup} ${d.punchline}`)
.then(ok => console.log(ok))
.catch(err => {
	console.error(err);
});