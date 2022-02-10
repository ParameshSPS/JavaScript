// Promises

// Example 

const willgetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();
    }
    else {
        reject();
    }
});

willgetYouADog.then(() => {
    console.log('yay we got a dog!!!!');
});

willgetYouADog.catch(() => {
    console.log(':( no dog');
});


// Returning promises from functions

// Example 1

const willgetYouADog = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve();
        }
        else {
            reject();
        }
    }, 4000);
});

willgetYouADog.then(() => {
    console.log('yay we got a dog!!!!');
});

willgetYouADog.catch(() => {
    console.log(':( no dog');
});


// Example 2

const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            }
            else {
                reject();
            }
        }, 4000);
    });
};

/*
makeDogPromise() 
    .then(() => {
        console.log('yay we got a dog!!!!');
    })
    .catch(() => {
        console.log(':( no dog');
    });
*/

d = makeDogPromise()
d.then(() => {
    console.log('yay we got a dog!!!!');
})
d.catch(() => {
    console.log(':( no dog');
});


// Resolving rejecting w values

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.3) {
                reject({ status: 404 });
            }
            else {
                const pages = {
                    '/users': [
                        { id: 1, username: 'Paramesh' },
                        { id: 4, username: 'Hari Krishna' }
                    ],
                    '/about': 'This is the about page!'
                };
                const data = pages[url]
                resolve({ status: 200, data });
            }
        }, 2000);
    });
};

fakeRequest('/about')
    .then((res) => {
        console.log('Status Code', res.status);
        console.log('Data :', res.data);
        console.log('Request worked');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('request failed');
    });


// Example

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Paramesh' },
                    { id: 4, username: 'Hari Krishna' }
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url]
            if (data) {
                resolve({ status: 200, data });
            }
            else {
                reject({ status: 404 })
            }
        }, 1000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log('Status Code :', res.status);
        console.log('Data :', res.data);
        console.log('Request worked');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('request failed');
    });

fakeRequest('/dogs')
    .then((res) => {
        console.log('Status Code :', res.status);
        console.log('Data :', res.data);
        console.log('Request worked');
    })
    .catch((res) => {
        console.log(res.status);
        console.log('request failed');
    });


// The delights of promise chaining

// This is a FAKE Http Request Function
// It takes 1 second to resolve or reject the promise, depending on the url that is passed in

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'paramesh' },
                    { id: 5, username: 'gopal' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'paramesh',
                    upvotes: 360,
                    city: 'dharmavaram',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'gopal',
                    upvotes: 571,
                    city: 'guntur'
                },
                '/posts/454321': {
                    id: 454321,
                    title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data }); //resolve with a value!
            }
            else {
                reject({ status: 404 }); //reject with a value!
            }
        }, 1000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('OH NO!', err);
    });


// ATTEMPT 2 (deliberate error to illustrate CATCH)

/*
fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('OH NO!', err);
    });
*/