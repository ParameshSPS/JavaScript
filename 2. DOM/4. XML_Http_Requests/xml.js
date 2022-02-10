// XMLHttpRequest The Basic

/*
function reqListener() {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.dev/api/planets/");
oReq.send();
console.log('Request Sent');
*/

// Example 1

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', () => {
    console.log('IT WORKed!');
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!');
});

// firstReq.open('GET', 'https://swapi.dev/api/planets/');       //run code
firstReq.open('GET', 'https://swadddhdpi.dev/api/plhfnhanets/'); //----> error code
firstReq.send();
console.log('Request Sent');


// Example 2

const myReq = new XMLHttpRequest();

myReq.onload = function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
};

myReq.onerror = function () {
    console.log('ERROR', err);
};

myReq.open('get', 'https://github.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();


// Example 3

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function () {
    console.log('IT WORKED!!!');
    // console.log('firstReq.responseText');
    // console.log('this.responseText')
    const data = JSON.parse(this.responseText);
    // console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
});

firstRequest.addEventListener('error', () => {
    console.log('ERROR!!!!!!');
});

firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.send();
console.log('Request Sent!');


// Chaining request

const firstRequests = new XMLHttpRequest();

firstRequests.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    // for (let planet of data.results) {
    //     console.log(planet.name);
    // }
    console.log('first request');
    const filmURL = data.results[0].films[0];

    const filmReq = new XMLHttpRequest();

    filmReq.addEventListener('load', function () {
        console.log('second request');
        // console.log(this);
        // console.log(JSON.parse(this.responseText));
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
    });

    filmReq.addEventListener('error', function (e) {
        console.log('Unable to fetch Film.', e);
    });

    filmReq.open('GET', filmURL);

    filmReq.send();
});

firstRequests.addEventListener('error', (e) => {
    console.log('It Failed', e);
});

firstRequests.open('GET', 'https://swapi.dev/api/planets/');

firstRequests.send();

console.log('Request Sent');


// Fetch
// The newer way of making request via js {supports promises}
// Not supportrd in internet explorer

fetch('https://swapi.dev/api/planets/', {
    headers: { Accept: 'application/json ' }
})
    .then((res) => {
        if (res.status !== 200) {
            console.log('problem', res.status);
        }
        res.json().then((data) => {
            console.log(data);
        });
    })
    .catch(function (err) {
        console.log('fetch error', err);
    });


// Example 1

fetch('https://swapi.dev/api/planets/').then((response) => {
    // console.log(response);
    // console.log(response.json());
    if (!response.ok) {
        // console.log('errorrrr not status: 200', response.status);
        throw new Error(`Status Code Error: ${response.status}`)
    }
    else {
        response.json().then((data) => {
            // console.log(data);
            for (let planet of data.response) {
                console.log(planet.name);
            }
        });
    }
})
    .catch((err) => {
        console.log('somthing went wrong with fetch');
        console.log(err);
    });

// Same

fetch('https://swapi.dev/api/planets/').then((response) => {
    if (!response.ok)
        throw new Error(`Status Code Error: ${response.status}`)

    response.json().then((data) => {
        for (let planet of data.response) {
            console.log(planet.name);
        }
    });
})
    .catch((err) => {
        console.log('somthing went wrong with fetch');
        console.log(err);
    });


// Chaining fatch request

const data = fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
        return response.json()
    })
    .then((data) => {
        console.log('Fetched first 10 planets');
        for (let planet of data.results) {
            console.log(planet.name);
        }
        return fetch(data.next);
    })
    .then((response) => {
        if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
        return response.json()
    })
    .then((data) => {
        console.log('Fetched next 10 planets');
        for (let planet of data.results) {
            console.log(planet.name);
        }
    })
    .catch((err) => {
        console.log('Someting went wrong !!');
        console.log(err);
    })


// Same

const datas = fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
        return response.json()
    })
    .then((datas) => {
        console.log('Fetched first 10 planets');
        const filmURL = datas.results[0].films[0];
        return fetch(filmURL);
    })
    .then((response) => {
        if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
        return response.json()
    })
    .then((datas) => {
        console.log('Fetched first film, based odd of first planet');
        console.log(datas.title);
    })
    .catch((err) => {
        console.log('Someting went wrong with fetch !!');
        console.log(err);
    });


// Refactoring fetch chain request

const checkAndParse = (response) => {
    if (!response.ok) throw new Error(`Status Code Error : ${response.status}`)
    return response.json()
}

const printPlanets = (data) => {
    console.log('Loaded 10 more planets..');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next)
}

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => fetch(url);

/*
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
    return fetch(url);
};
*/

fetchNextPlanets()
    .then(checkAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)

    .then(checkAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)

    .then(checkAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)

    .then(checkAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('Someting went wrong !!');
        console.log(err);
    })


// Axios

axios
    .get('https://swapi.dev/api/planets/')
    .then((res) => {
        console.log(res);
        // console.log(res.data);
    }).catch((err) => {
        console.log('in catch callback');
        console.log(err);
    });


// Example
// Sequential axios request

axios
    .get('https://swapi.dev/api/planets/')
    .then(({ data }) => {
        console.log(data);
        for (let planet of data.results) {
            console.log(planet.name);
        }

        return axios.get(data.next)
    })
    .then(({ data }) => {
        console.log(data);
        for (let planet of data.results) {
            console.log(planet.name);
        }
    })
    .catch((err) => {
        console.log('ERROR!!!', err);
    });


// Example

const fetchNextPlanetss = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url)
};

const printPlanetss = (({ data }) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next)
});

fetchNextPlanetss()
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .then(printPlanetss)
    .then(fetchNextPlanetss)
    .catch((err) => {
        console.log(err);
    });