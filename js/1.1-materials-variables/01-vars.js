                                                                //Комментарии
//Однострочный комментарий
/*многострочный
комментарий*/

/*"use strict" или 'use strict' в начале скрипта -> весь сценарий работает в «современном» режиме*/

                                                                //Переменные
                                                                    //Типы переменных
/*
const - не позоволяет в дальнейшем менять значение
Змінні, оголошені як const, обов'язково повинні бути ініціалізовані значенням під час оголошення, інакше виникне помилка.
Імена КОНСТАНТ - змінних, значення яких не змінюється ніколи впродовж роботи всього скрипту, як правило, записуються у форматі UPPER_SNAKE_CASE.

let - можно потом присвоить другое значение
Змінним, оголошеним через let, не обов'язково одразу присвоювати значення

имена переменных чувствительны к регистру
*/

                //number
const year = 2006;
console.log(year); // 2006
console.log(year + " " + typeof year); //number
//цілі числа і числа з плаваючою комою (крапкою).

const price = 200.74;
console.log(price); // 200.74
console.log(price + " " + typeof price); //number

                //string
const text = "hello";
console.log(text); // hello
console.log(text + " " + typeof text); //string
//рядки, послідовність з нуля або більше символів. Рядок починається і закінчується одинарними ', або подвійними лапками "

                //boolean
const isOpen = true;
console.log(isOpen); // true
console.log(isOpen + " " + typeof isOpen); //boolean
//логічний тип даних, прапорці стану.Всього два значення: true і false

                //undefined
let test
console.log(test); // undefined
console.log(test + " " + typeof test); //undefined
//undefined - ще одне спеціальне значення. За замовчуванням, коли змінна оголошується, але не ініціалізується, її значення не визначено, їй присвоюється undefined.

                //null
let something = null;
console.log(something); //null
console.log(something + " " + typeof selectedProduct); //object
//null - особливе значення, яке по суті означає ніщо. Використовується в тих ситуаціях, коли необхідно явно вказати порожнечу. Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null.


                                                                //Способы ввода и вывода

console.log(" ");
console.log("const " + year + " type " + typeof year);        //const 2006, type number
console.log("const", year, "type", typeof year);               //const 2006, type number
console.log(`const ${year}, type ${typeof year}`);               //const 2006, type number

                                                                //проверка типа переменной
console.log(" ");
const a = typeof year;
console.log(a); //number
console.log(a, typeof a); //number string