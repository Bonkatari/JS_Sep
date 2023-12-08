// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
string1 = 'hello  world';
string2 = 'lorem ipsum';
string3 = 'javascript is cool';
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
st1 = 'HELLO WORLD';
st2 = 'LOREM IPSUM';
st3 = 'JAVASCRIPT IS COOL';
console.log(st1.toLowerCase());
console.log(st2.toLowerCase());
console.log(st3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
function stringToArray(string) {
    return string.split(' ');
}
let string = 'Ревуть воли як ясла повні';
let arr = stringToArray(string);
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numbers.map(String));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(direction) {
    if (direction === 'asc'){
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'desc'){
        return nums.sort((a, b) => b - a);
    }
}
console.log(sortNums('asc'));
console.log(sortNums('desc'));
//--------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((a, b) => {
    if (a.monthDuration > b.monthDuration){
        return -1;
    }
})
console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5
})
console.log(filter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappedCourses = coursesAndDurationArray.map(function (value, index) {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mappedCourses);
// -- описати колоду карт (від 6 до туза без джокерів)
let cardDeck = [
    {
        cardSuit: 'spade',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
        color: 'black'
    }
]
// - знайти піковий туз
let spades = cardDeck.find(value => value.cardSuit === 'spade');
let aceOfSpades = spades.value.find(value => value === 'ace');
console.log(aceOfSpades);
// - знайти всі шістки
let sixes = [];
for (let i = 0; i < cardDeck.length; i++) {
    let card = cardDeck[i];
    if (card.value.includes('6')){
        sixes.push(card);
    }
}
console.log(sixes);
// - всі червоні карти
let reds = [];
for (let i = 0; i < cardDeck.length; i++) {
    let card = cardDeck[i];
    if (card.color.includes('red')){
        reds.push(card);
    }
}
console.log(reds);
// - всі буби
let diamonds = [];
for (let i = 0; i < cardDeck.length; i++) {
    let card = cardDeck[i];
    if (card.cardSuit.includes('diamond')){
        diamonds.push(card);
    }
}
console.log(diamonds);
// - всі трефи від 9 та більше
let clubs = [];
for (let i = 0; i < cardDeck.length; i++) {
    let card = cardDeck[i];
    if (card.cardSuit.includes('clubs') && card.value.includes('9')){
        clubs.push(card);
    }
}
console.log(clubs);
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardsInNewObjects = cardDeck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }else if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }else if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }else if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cardsInNewObjects);
//----------------------------------------------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// -- написати пошук всіх об'єктів, в який в modules є sass
let sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);
// --написати пошук всіх об'єктів, в який в modules є docker
let dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);