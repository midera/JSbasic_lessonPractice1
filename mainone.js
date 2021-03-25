/*
Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.*/

/*
let str = 'hello';
let num = 123;
let  flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);*/
/*Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
найдите значения выражений:*/
/*
   let a1 = 5 + 3;
   let a2 = 5 - 3;
   let a3 = 5 * 3;
   let a4 = 5 / 3;
   let a5 = 5 % 3;
   console.log(`${a1} ${a2} ${a3} ${a4} ${a5}`);*/

/*Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:*/
/*
let a6 = 5 % 3 ;
let a7 = 3 % 5;
let  a8 = 5 + '3';
let  a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(`${a6} ${a7} ${a8} ${a9} ${a10}`);*/

/*
Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
шириной 10см (переменная width), значение площади должно хранится в числовой переменной s*/
/*
let width = 10;
 let height = 23;
 let s = 10*23;
 console.log(`${width} * ${height} = ${s}`);*/

/*Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v.*/
/*
let height = 10 ;
let dC = 4;
let float  = 3.14 ;
let V = float * dC/2*2 *height
console.log(`${float} *  ${dC} * ${height} =${V}`);*/
/*У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
или оператор возведения в степень ** */
/*
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(`${n} + ${m} = ${k}`);*/

/*Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и
console.log*/
/*
let str = String('Hello World');
console.log(str);
alert(str);*/
/*
Вывести в окно браузера при помощи метода alert() следующие данные:
    Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n)*/
/*let name = 'Full name: Nataliy  Olegovna  Alekseenko\n age: 28 \n Hobby: Pole dance';
alert(name);*/
/*Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write*/

/*let str1 = 'Кто';
let str2 = 'Ты';
let str3 = 'Такой?';
let concatenation = (`${str1} ${str2} ${str3}`);
document.write(concatenation);
*/

/*Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?*/
/*let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");*/
/*Ответ:
Происходит исчесление с переносом на новую строку*/
/*Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?*/
   /* parseInt("3.14");
    parseInt("-7.875");
    parseInt("435");
    parseInt("Вася");*/
/*
Ответ: NaN*/
/*С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться
 далее, повторите код ниже*/
/*
let str = prompt("Enter something", "ho-ho")
console.log(str);*/
/*
С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи
 метода alert*/

/*let a = prompt('number one', '32');
let b =  prompt('number two', '25');
let c = 32+25;
alert(c);*/

/*С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
    а вам не обходимо вывести строку такого вида
Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert*/
/*
let name = prompt("What is your name?", 'Иван');
let surName = prompt("What is your surname?", 'Иванов');
let age = parseInt(prompt("How old are you?", '32'));

let str =( `Доброго вечера ${name} ${surName}, мои поздравления что вам ${age}`);
alert(str)  ;*/
