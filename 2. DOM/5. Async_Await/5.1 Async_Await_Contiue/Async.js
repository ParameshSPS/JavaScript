// Parallel Vs Sequential Requests

// Sequential Request

async function getPokenmon() {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const poke4 = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
    console.log(poke4.data);
}

getPokenmon();


// Parallel Request

async function get3Pokenmon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const prom4 = axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    const poke4 = await prom4;
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
    console.log(poke4.data);
}

get3Pokenmon();


// A better demonstration of the difference...

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

changeBodyColor('teal', 1000);

async function lightShow() {
    await changeBodyColor('teal', 1000)
    await changeBodyColor('pink', 1000)
    await changeBodyColor('purple', 1000)
    await changeBodyColor('indigo', 1000)

}

async function lightShow() {
    const p1 = changeBodyColor('teal', 1000)
    const p2 = changeBodyColor('pink', 1000)
    const p3 = changeBodyColor('purple', 1000)
    const p4 = changeBodyColor('red', 1000)

    await p1;
    await p2;
    await p3;
    await p4;
}

lightShow();


// Refacoring with promise.all

// Parallel

async function get3Pokenmons() {
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const promise4 = axios.get('https://pokeapi.co/api/v2/pokemon/4');

    const results = await Promise.all([promise1, promise2, promise3, promise4]);

    // console.log(results);
    printPokemon(results);
}

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

get3Pokenmons();