// Створити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function submitForm() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;

    let person = {
        name: name,
        surname: surname,
        age: age
    };

    let resultDiv = document.querySelector('.result');
    resultDiv.innerText = `Name: ${person.name}, Surname: ${person.surname}, Age: ${person.age}`;
}
// є сторінка, на якій є блок, на якому знаходиться цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let numberedDiv = document.getElementById('divWithNumber');
let currentValue = localStorage.getItem('numberedDivValue') || 0;
let newValue = parseInt(currentValue) + 1;
numberedDiv.innerText = newValue;
localStorage.setItem('numberedDivValue', newValue.toString());
// ----------------------------------------------------------------
// !!! НАСТУПНЕ ЗАВДАННЯ В ФАЙЛАХ INDEX.HTML ТА SESSIONS.HTML
// ----------------------------------------------------------------
// зробити масив на 100 об'єктів та дві кнопки prev next
let objectArr = [];
for (let i = 1; i <= 100; i++) {
    objectArr.push({id: 1, value: `Item: ${i}`});
}
// при завантаженні сторінки з'являються перші 10 об'єктів.
let currentIndex = 0;
let items = 10;
function showObjects(index) {
    let objectElement = document.getElementById('array100Objects');
    for (let i = index; i < index + items && i < objectArr.length; i++) {
        objectElement.innerHTML += `<p>ID: ${objectArr[i].id}, Value: ${objectArr[i].value}</p>`;
    }
}
showObjects(currentIndex);
// При натисканні next виводяться наступні 10 об'єктів
document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentIndex + items < objectArr.length){
            currentIndex += items;
            showObjects(currentIndex);
        }
})
// При натисканні prev виводяться попередні 10 об'єктів
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentIndex - items >= 0){
        currentIndex -= items;
        showObjects(currentIndex);
    }
})
// Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let textElement = document.getElementById('text');
let hideButton = document.getElementById('hiddenBtn');
hideButton.addEventListener('click', function () {
    if (textElement){
        textElement.remove();
    }
})
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let ageInput = document.getElementById('ageInput');
let checkAge = document.getElementById('checkAge');
checkAge.addEventListener('click', function () {
    let age = parseInt(ageInput.value);
    if (age < 18){
        alert('Ви повинні бути старше 18 років.')
    } else{
        alert('Ваш вік підтверджено.');
    }
})
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let rowCountInput = document.getElementById('rowCountInput');
let cellCountInput = document.getElementById('cellCountInput');
let cellContentInput = document.getElementById('cellContentInput');
let createTableBtn = document.getElementById('createTableBtn');
let tableWrapper = document.getElementById('tableWrapper');
createTableBtn.addEventListener('click', function () {
    let rowCount = parseInt(rowCountInput.value);
    let cellCount = parseInt(cellCountInput.value);
    let cellContent = cellContentInput.value;
    let tableHTML = '<table border = "1">';
    for (let i = 0; i < rowCount; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cellCount; j++) {
            tableHTML += `<td>${cellContent}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    tableWrapper.innerHTML = tableHTML;
})
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
function updatePrice() {
    let currentTime = new Date().getTime();
    let lastUpdateTime = localStorage.getItem('lastUpdateTime');
    if (!lastUpdateTime || (currentTime - lastUpdateTime > 10000)){
        let priceBlock = document.getElementById('priceBlock');
        let currentPrice = parseInt(priceBlock.innerText);
        let newPrice = currentPrice + 10;
        priceBlock.innerText = `${newPrice} UAH`;
        localStorage.setItem('lastUpdateTime', currentTime);
    }
}
updatePrice();