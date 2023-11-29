// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i= 0; i < 10; i++){
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, nisi.</p></div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, fuga. Index - ${i}</p></div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
    i++;
    document.write(`<div><h1>Lorem ipsum dolor sit amet.</h1></div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let index = 0;
while (index < 20){
    index++;
    document.write(`<div><h1>Lorem ipsum dolor. Index - ${index}</h1></div>`);
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++){
    document.write(`
        <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>mysql</li>
            <li>mongodb</li>
            <li>react</li>
            <li>angular</li>
            <li>node.js</li>
        </ul>
    `)
}
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++){
    document.write(`
        <div class="product-card">
             <h3 class="product-title">${products[i].title}.Price - ${products[i].price}$</h3>
             <img src="${products[i].image}" alt="image" class="product-image">
        </div>
    `)
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// - за допомоги циклу вивести користувачів зі статусом true
for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        console.log(users[i]);
    }
}
// - користувачів зі статусом false
for (let i = 0; i < users.length; i++){
    if (users[i].status === false){
        console.log(users[i]);
    }
}
// - користувачів які старші за 30 років
for (let i = 0; i < users.length; i++){
    if (users[i].age > 30){
        console.log(users[i]);
    }
}