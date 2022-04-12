                                                        //Конкатенація рядків
console.log("Конкатенація рядків");
//Під час конкатенації, будь-який тип даних приводиться до рядка і зшивається з рядком, але є особливість - послідовність запису операндів.
//Послідовність операцій має значення, перетворення типів відбувається тільки в момент операції додавання з рядком, до цього моменту діють звичні правила математики.
//Усі методи рядків чутливі до регістру.

let message = "Mango " + "is" + " happy";
console.log(message); // Mango is happy
console.log(1 + "2"); // "12"
console.log(typeof (1 + "2")) //string
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"
console.log(typeof (1 + 2 + "4")) //string

                                                        //Шаблонні рядки
console.log("");
console.log("Шаблонні рядки");
//Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки, замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${вираз}.
const guestName = "Манго";
const roomNumber = 207;
let greeting;

greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!

greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

                                                        //Властивості і методи рядків
console.log("");
console.log("Властивості і методи рядків");

//Длина строки
message = "Welcome to Bahamas!";
console.log(message.length); // 19
console.log("There is nothing impossible to him who will try".length); // 47
console.log(typeof message.length); // 19

//Регистр
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"

//Проверяет содержание
//Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".
const productName = "Ремонтний дроїд";
console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false

//Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.
console.log(productName); //Ремонтний дроїд
console.log(productName.replace("о", "000")); //Рем000нтний дроїд
console.log(productName.replaceAll("о", "000")); //Рем000нтний др000їд

//Нарезка строк
//Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.
//Нумерация символов с нуля
console.log(productName.length); // 15
console.log(productName[5]); //т
console.log(productName.slice(3)); // "онтний дроїд"
console.log(productName.slice(0, 4)); // "Ремо"
console.log(productName.slice(3, 9)); // "онтний"
console.log(productName.slice(0, productName.length)); // "Ремонтний дроїд"
console.log(productName.slice(7, productName.length)); // "ий дроїд"




