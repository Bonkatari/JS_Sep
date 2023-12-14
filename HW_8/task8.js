// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArray = [];
for (let i = 1; i <= 10; i++) {
    let newUser = new User(i, `Name ${i}`, `Surname ${i}`, `email${i}@gmail.com`, `+38098123321${i}`);
    usersArray.push(newUser);
}
console.log(usersArray);
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let filteredArr = usersArray.filter(user => user.id % 2 === 0);
console.log(filteredArr);
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedArr = usersArray.sort((a, b) => {
    if (a.id > b.id){
        return 1;
    }
});
console.log(sortedArr);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsArr = [];
for (let i = 1; i <= 10; i++) {
    let newClient = new Client(i, `Name ${i}`, `Surname ${i}`, `email${i}@gmail.com`, `+38050123323${i}`, [`Product ${i}`]);
    clientsArr.push(newClient);
}
console.log(clientsArr);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clientsArr.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year - ${this.year}`);
        console.log(`Max.speed - ${this.maxSpeed}`);
        console.log(`Engine capacity - ${this.engine}`);
        if (this.driver){
            console.log(`Driver Name: ${this.driver.name}`);
            console.log(`Driver Age: ${this.driver.age}`);
            console.log(`License number: ${this.driver.licenseNumber}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        return this.maxSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
        return this.year;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}
console.log('----------');
let newCar = new Car ("Civic", "Honda", 2022, 200, "V6");
newCar.info();
console.log('----------');
newCar.drive();
console.log('----------');
console.log(newCar.increaseMaxSpeed(500));
console.log('----------');
console.log(newCar.changeYear(2030));
newCar.addDriver({ name: "John Doe", age: 30, licenseNumber: "ABC123" });
console.log('----------');
newCar.info();
// - (Те саме, тільки через клас)
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info (){
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year - ${this.year}`);
        console.log(`Max.speed - ${this.maxSpeed}`);
        console.log(`Engine capacity - ${this.engine}`);
        if (this.driver){
            console.log(`Driver Name: ${this.driver.name}`);
            console.log(`Driver Age: ${this.driver.age}`);
            console.log(`License number: ${this.driver.licenseNumber}`);
        }
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed += newSpeed;
        return this.maxSpeed;
    }
    changeYear (newValue){
        this.year = newValue;
        return this.year;
    }
    addDriver (driver){
        this.driver = driver;
    }
}
console.log('----------');
let newCarClass = new CarClass("Accord", "Honda", 2023, 240, "V8");
newCarClass.drive();
console.log('----------');
newCarClass.info();
console.log('----------');
console.log(newCarClass.increaseMaxSpeed(30));
console.log('----------');
console.log(newCarClass.changeYear(2021));
console.log('----------');
newCarClass.addDriver({ name: "Alice Smith", age: 25, licenseNumber: "XYZ456" });
newCarClass.info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let cinderellasArr = [];
for (let i = 0; i < 10; i++) {
    let newCinderella = new Cinderella(`Name ${i}`, `Age: 2${i}`, `Foot size: 3${i}`);
    cinderellasArr.push(newCinderella);
}
console.log(cinderellasArr);
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Alex', 25, cinderellasArr[4].footSize);
console.log(prince);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Cinderella.prototype.getFootSize = function () {
    return this.footSize;
}
let chosenCinderella;
for (let i = 0; i < cinderellasArr.length; i++) {
    if (cinderellasArr[i].getFootSize() === prince.shoe) {
        chosenCinderella = cinderellasArr[i];
        break;
    }
}
console.log(`Chosen Cinderella:`)
console.log(chosenCinderella);
console.log(`Prince and shoe:`);
console.log(prince);
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function findCinderella(cinderella) {
    return cinderella.getFootSize() === prince.shoe;
}
let cinderellaFinder = cinderellasArr.find(findCinderella);
console.log(cinderellaFinder);
console.log(`Chosen Cinderella:`)
console.log(chosenCinderella);
console.log(`Prince and shoe:`);
console.log(prince);