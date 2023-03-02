async function getGames () {
    const getGames = await fetch ('/api/games', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    });
    console.log(getGames);
}

getGames();

console.log('im wokring');


// const get = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
// const response = await fetch ('/api/users/login', {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//     headers: { 'Content-Type': 'application/json'},
// });
