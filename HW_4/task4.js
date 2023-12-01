// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea (a, b){
    return a * b;
}
let firstSide = 2;
let secondSide = 10;
let area = rectangleArea(firstSide, secondSide);
console.log(area);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea (r, r, PI) {
    return r * r * Math.PI;
}
let radius = 15;
let areaOfCircle = circleArea(radius, radius, 3.14);
console.log(areaOfCircle);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea(PI, r, h) {
    return 2 * Math.PI * r * h;
}
let cylinderRadius = 5;
let h = 20;
let areaOfCylinder = cylinderArea(3.14, cylinderRadius, h);
console.log(areaOfCylinder);
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayTaker(array) {
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
let newArray = [20, 56, 7, 8];
arrayTaker(newArray);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphText(text) {
    document.write(`<p>${text}</p>`);
}
paragraphText(`some text`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulAndLiFunction(text) {
    document.write(`<ul>`);
    document.write(`
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    `)
    document.write(`</ul>`);
}
ulAndLiFunction(`fresh bread`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createTextInLi(text, numberOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfLi; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createTextInLi(`hello world!`, 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListFromArray(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
let myArray = [5, 'string', true, false];
createListFromArray(myArray);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function createArrayOfObjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        const object = arr[i];
        document.write(`<div>ID: ${object.id}</div>`);
        document.write(`<div>Name: ${object.name}</div>`);
        document.write(`<div>Age: ${object.age}</div>`);
        document.write(`<br>`);
    }
}
let myObjects = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Mike', age: 40},
    {id: 3, name: 'Alla', age: 18}
]
createArrayOfObjects(myObjects);
// - створити функцію яка повертає найменьше число з масиву
function smallestNumberFromArray(arr) {
    let smallestNumber = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallestNumber){
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}
let myNumbers = [3, 8, 5, 2, 9, 1];
smallestNumberFromArray(myNumbers);
console.log(smallestNumberFromArray(myNumbers));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total;
}
let numbers = [6, 9, 5];
console.log(sum(numbers));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;
}
let newArr = [56, 23, 44, 33]
swap(newArr, 0, 1);
console.log(newArr);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const forex of currencyValues) {
        if (forex.currency === exchangeCurrency){
            let exchangeRate = forex.value;
            return sumUAH / exchangeRate;
        }
    }
}
let sumUAH = 10000;
let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
]
let exchangeCurrency = 'USD';
let result = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(result);