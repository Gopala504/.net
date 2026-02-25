let db;

const request = indexedDB.open('userDB', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore('users', { keyPath: 'id'});
}

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Database opened successfully');

    let transaction = db.transaction('users', 'readwrite');
    let store = transaction.objectStore('users');

    store.add({ id: 1, name: 'Sai', age: 20 });
    store.add({ id: 2, name: 'Gopal', age: 25 });

    // let getData = store.get(1);
    // getData.onsuccess = function() {
    //     console.log('User with ID 1:', getData.result);
    // }

   
}
async function getAllUsers() {
    const response = await fetch('data.json');
    const data = await response.json();

    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');

    data.users.forEach(user => {
        store.add(user);
    });

    transaction.onsuccess= () => {
        console.log('All users added to the database');
    }
    let getData = store.getAll();
    getData.onsuccess = function() {
        console.log('All users:', getData.result);
    }
}
getAllUsers();

