// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [
    10, true, -597, 'kolya', false, 100500, 'js', -30, true, 'array'
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'Harry Potter',
    pageCount: 800,
    genre: 'fantasy'
}
console.log(book);
let book2 = {
    title: 'Murder on the Orient Express ',
    pageCount: 560,
    genre: 'mystery'
}
console.log(book2);
let book3 = {
    title: 'Gone Girl ',
    pageCount: 710,
    genre: 'thriller'
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let firstBook = {
    title: 'The Help',
    pageCount: 960,
    genre: 'Historical Fiction',
    authors: [
        {
            name: 'Vlad',
            age: 30
        }
    ]
}
console.log(firstBook);
let secondBook = {
    title: 'Red at The Bone',
    pageCount: 300,
    genre: 'Fiction',
    authors: [
        {
            name: 'Oleg',
            age: 25
        }
    ]
}
console.log(secondBook);
let thirdBook = {
    title: 'Jane Eyre',
    pageCount: 660,
    genre: 'Adventure',
    authors: [
        {
            name: 'Maria',
            age: 18
        }
    ]
}
console.log(thirdBook);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Vasya',
        username: 'vas',
        password: 12345
    },
    {
        name: 'Petya',
        username: 'pet',
        password: 54321
    },
    {
        name: 'Kate',
        username: 'kat',
        password: 12345
    },
    {
        name: 'Kolya',
        username: 'kol',
        password: 23657
    },
    {
        name: 'Lola',
        username: 'lol',
        password: 95682
    },
    {
        name: 'Olya',
        username: 'ol',
        password: 64932
    },
    {
        name: 'Anna',
        username: 'ann',
        password: 73296
    },
    {
        name: 'Yura',
        username: 'yur',
        password: 93784
    },
    {
        name: 'Valery',
        username: 'val',
        password: 75932
    },
    {
        name: 'Anton',
        username: 'antony',
        password: 58923
    }
]
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
    if(x !== 0) {
        console.log('Вірно');
} else{
        console.log('Невірно');
    }
// ----------------------------
let a1 = 1;
    if(a1 !== 0) {
        console.log('Вірно');
} else{
        console.log('Невірно');
}
let a2 = 0;
    if(a2 !== 0) {
        console.log('Вірно');
} else{
        console.log('Невірно');
}
let a3 = -3;
    if(a3 !== 0) {
        console.log('Вірно');
} else{
        console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time = 45;
    if(time >= 0 && time < 15){
        console.log('Перша четверть години');
    } else if(time >=15 && time < 30){
        console.log('Друга четверть години');
    } else if(time >=30 && time < 45){
        console.log('Третя четверть години');
    } else if(time >=45 && time <= 59){
        console.log('Четверта четверть години');
    }
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю)
let day = 20;
    if(day >= 1 && day <= 10){
        console.log('Перша половина місяця');
    } else if(day >= 11 && day <= 20){
        console.log('Друга половина місяця');
    } else if(day >= 21 && day <= 31){
        console.log('Третя половина місяця');
    }
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською)
let dayNumber = +prompt('Введіть порядковий номер дня тижня від 1 до 7:');
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Невірний порядковий номер'
    }
    console.log(`День тижня під номером ${dayNumber}: ${dayName}`);
// Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('Введіть перше число:')
let number2 = +prompt('Введіть друге число:');
    if(isNaN(number1) || isNaN(number2)){
        console.log('Введіть числа:');
    } else if (number1 === number2) {
            console.log('Введені числа рівні.');
        } else if (number1 > number2) {
            console.log(`Максимальне число: ${number1}`);
        } else if (number2 > number1){
            console.log(`Максимальне число: ${number2}`);
    }
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let newX;
newX = newX || "default";
console.log(newX);
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
} else{
    console.log('Не супер');
}