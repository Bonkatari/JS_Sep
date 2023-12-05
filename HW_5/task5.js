// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleArea = (a, b) => a * b;
console.log(rectangleArea(30, 30));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (rad1, rad2, PI) => rad1 * rad2 * Math.PI;
console.log(circleArea(2, 5, 3.14));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (PI, r, h) => 2 * Math.PI * r * h;
console.log(cylinderArea(3.14, 5, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayTaker = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return array;
}
console.log(arrayTaker([20, 5, 49, 7]))
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraphText = (text) => {
    document.write(`<p>${text}</p>`);
}
paragraphText('new text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulAndLiFunction = (text) => {
    document.write(`<ul>`);
    document.write(`
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    `)
    document.write(`</ul>`);
}
ulAndLiFunction(`hello world`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createTextInLi = (text, numberOfLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfLi; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createTextInLi('java script practice', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createListFromArray = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
createListFromArray([5, 'string', true, false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let createArrayOfObjects = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const object = arr[i];
        document.write(`<div>ID: ${object.id}</div>`);
        document.write(`<div>Name: ${object.name}</div>`);
        document.write(`<div>Age: ${object.age}</div>`);
        document.write(`<br>`);
    }
}
createArrayOfObjects([{id: 1, name: 'John', age: 25}, {id: 2, name: 'Mike', age: 40}, {id: 3, name: 'Alla', age: 18}]);
// - створити функцію яка повертає найменьше число з масиву
let smallestNumberFromArray = (arr) => {
    let smallestNumber = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallestNumber){
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}
console.log(smallestNumberFromArray([3, 8, 5, 2, 9, 1]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total;
}
console.log(sum([6, 9, 5]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr,index1,index2) => {
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;
    return arr;
}
console.log(swap([56, 23, 44, 33], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const forex of currencyValues) {
        if (forex.currency === exchangeCurrency){
            let exchangeRate = forex.value;
            return sumUAH / exchangeRate;
        }
    }
}
let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
]
let exchangeCurrency = 'USD';
console.log(exchange(10000, currencyValues, exchangeCurrency));