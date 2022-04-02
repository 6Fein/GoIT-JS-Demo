/*                                                //Математичні оператори
console.log("Математичні оператори");

const x = 10;
const y = 5;
const z = 5;

console.log(x + y); // 15 // Додавання
console.log(x - y); // 5 // Віднімання
console.log(x * y); // 50 // Множення
console.log(x / y); // 2 // Ділення
console.log(x % y); // 0 // Остача від ділення

console.log(" ");
// Додавання із заміною (також є для всіх інших операторів)
let value = 5;
console.log(value); // 5
value += 10; // Аналогічно запису value = value + 10;
console.log(value); // 15


                                            //Оператори порівняння
console.log(" ");
console.log("Оператори порівняння");

//більше/менше
console.log("x > y:", x > y, typeof (x > y)); // true
console.log("x < y:", x < y); // false
console.log("y < z:", y < z); // false

//більше/менше або дорівнює
console.log("y <= z:", y <= z); // true

// строга рівність
console.log("x === y:", x === y); // false
console.log("y === z:", y === z); // true

//строга нерівність
console.log("x !== y:", x !== y); // true
console.log("y !== z:", y !== z); // false

//«Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число, що може призвести до помилок, особливо у початківців.
console.log(" ");
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
console.log(true == true); // true
console.log("1" != true); // false
//Погано, виконується приведення типів
*/

/*                                              //Преобразование в число
console.log(" ");
console.log("Преобразование в число");
                                            //Простое
let valueA;
let valueB;

valueA = "5";
console.log(valueA, typeof valueA); // 5 string
valueA = Number(valueA); //Преобразовываем в число
console.log(valueA, typeof valueA); // 5 number
console.log(" ");

//Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN (Not a Number). Аналогічним чином відбувається перетворення і в інших математичних операторах і функціях.
valueB = "random string";
console.log(valueB, typeof valueB); //random string string
valueB = Number(valueB);
console.log(valueB, typeof valueB); //NaN number

console.log(true, typeof true); //true boolean
console.log(true, Number(true), typeof (Number(true))); //1 number
console.log(false, Number(false), typeof (Number(false))); //0 number

                                            //Number.parseInt()
console.log(" ");
console.log("Number.parseInt()");
//Number.parseInt() парсить з рядка ціле число. (Integer)
//Запинается на первой не цифре

console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe5")); // NaN

                                            //Number.parseFloat()
console.log(" ");
console.log("Number.parseFloat()");
//Метод Number.parseFloat() парсить з рядка дробове число.

console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe5")); // NaN

                                            //Перевірка на число
console.log(" ");
console.log("Перевірка на число");
//Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає true - якщо значення val - NaN i false - якщо значення val - не NaN

const validNumber = Number("51"); // 51
console.log(validNumber, Number.isNaN(validNumber)); // 51 false

const invalidNumber = Number("qweqwe"); // NaN
console.log(invalidNumber, Number.isNaN(invalidNumber)); // NaN true
*/

/*                                                //Додавання чисел з рухомою крапкою (комою)
console.log(" ");
console.log("Додавання чисел з рухомою крапкою (комою)");

//Додаючи нецілі числа, в JavaScript і в інших мовах програмування є особливість. Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, результат додавання буде більший, ніж 0.3. Це тому що машина рахує у двійковій системі.
//Число 0.1 у двійковій системі числення - це нескінченний дріб, оскільки у двійковій системі одиниця не ділиться на десять. Двійкове значення нескінченних дробів зберігається тільки до певного знаку, тому виникає неточність. При додаванні 0.1 і 0.2, додаються дві неточності, виходить незначна, але все-таки помилка в обчисленнях.
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

//Можна зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.
console.log((0.1 * 10 + 0.2 * 10) / 10); //0.3
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

//Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().
//Точность до такого-то знака
console.log(0.21 + 0.24); // 0.0.44999999999999996
console.log((0.21 + 0.24).toFixed(2)); // 0.45

const salary = 1234.56789;
console.log(salary, typeof salary); // 1234.56789
console.log(salary.toFixed(2)); // 1234.57
console.log(salary.toFixed()); // 1235

console.log(typeof (salary.toFixed(2))); //string
console.log(Number(salary.toFixed(2))); //1234.57
console.log(typeof (Number(salary.toFixed(2))) ); //number
*/

                                                //Клас Math
console.log(" ");
console.log("Клас Math");

// Math.floor(num) - повертає найбільше ціле число, менше, або яке дорівнює зазначеному числу
console.log("Целые числа");
console.log(Math.floor(1.7)); // 1
console.log(Math.floor(1)); //1

// Math.ceil(num) - повертає найменше ціле число, більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
console.log(Math.round(3.2)); // 3
console.log(Math.round(2.5)); // 3
console.log(" ");

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log("Наибольшее/наименьшее число из набора");
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10
console.log(" ");

// Math.pow(base, exponent) - піднесення до степеня
console.log("Степень, корень");
console.log(Math.pow(2, 4)); // 16
console.log(2 ** 4); // 16
console.log(Math.sqrt(16)); //4
console.log(" ");

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log("Псевдорандом");
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

const max = 30;
const min = 10;
const result = Math.random() * (max - min) + min; // псевдовипадкове число від max до min
console.log(result);
console.log(Math.round(result));

console.log(" ");