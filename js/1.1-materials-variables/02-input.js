                                                                //Комментарии
//Однострочный комментарий
/*многострочный
комментарий*/
                                                                //Ввод и вывод инфы
                                                                           //window.alert()
alert("alert"); //окно просит ОК
console.log("before window.alert"); //window можно не писать
window.alert("window.alert");
console.log("after window.alert");
                                                                            //window.confirm()
const shouldConfirm = confirm("Yes or No?");
//Кнопки ОК и Cansel
console.log("you have confirmed " + shouldConfirm);
                                                                            //window.prompt()
let quantity = prompt("Set quantity");
console.log("quantity = " + quantity);
console.log(typeof quantity);
//Поле для ввода

const myName = prompt("Set name");
console.log("myName = " + myName);
console.log(typeof myName);
//всегда возвращает строку

quantity = Number(quantity);
//Преобразовываем в число
console.log("quantity type changed to " + typeof quantity);
console.log("quantity = " + quantity);

//если нажать Cansel, вернется null
const myNull = prompt("если нажать Cansel, вернется null");
console.log("myNull = " + myNull);
console.log(typeof myNull);

