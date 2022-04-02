                                                                //Комментарии
//Однострочный комментарий
/*многострочный
комментарий*/
                                                                //Ввод и вывод инфы
                                                                           //window.alert()
alert("Нажми ОК");                                                  //окно просит ОК
console.log("before window.alert"); //window можно не писать
window.alert("Нажми ОК опять");
console.log("after window.alert");
                                                                            //window.confirm()
const shouldConfirm = confirm("Yes or No?");                       //окно просит ОК или Отмена
//на выходе получаем boolean
console.log("you have confirmed " + shouldConfirm);
                                                                            //window.prompt()
let quantity = prompt("Set quantity");                              //окно просит ввести текст
console.log("quantity = " + quantity);
console.log(typeof quantity); //string or object(null)
//на выходе получаем string
//если нажать Cansel, вернется null

const myName = prompt("Set name");
console.log("myName = " + myName);
console.log(typeof myName); //string or object(null)

                                                                        //Преобразование в число
console.log(" ");
quantity = Number(quantity); //Преобразовываем в число
console.log("quantity type changed to " + typeof quantity); //number
console.log("quantity = " + quantity);
