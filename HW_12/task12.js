// зробити файл Task 12.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// fetch('http://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value);
//     });
// // вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// fetch('http://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(value => {
//         let ul = document.createElement('ul');
//         value.forEach(user => {
//             let li = document.createElement('li');
//             let a = document.createElement('a');
//             a.href = `user-details.html?id=${user.id}`;
//             a.textContent = `${user.id} - ${user.name}`;
//             li.appendChild(a);
//             ul.appendChild(li);
//         })
//         document.body.appendChild(ul);
//     });
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX, ХХХ - айді користувача)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = `users.html?userId=${user.id}`;
            a.textContent = `${user.id} - ${user.name}`;
            li.appendChild(a);
            document.body.appendChild(li);
        }
    });