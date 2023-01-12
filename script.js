//151.1 Математические методы в JavaScript
// console.log(Math.pow(2, 10));

//151.2
// console.log(Math.sqrt(245));

//151.3
// let arr = [4, 2, 5, 19, 13, 0, 10];

// let sum = 0;
// let result;

// for (let elem of arr) {
// 	let res = Math.pow(elem, 3);
// 	sum += res;
// 	result = Math.sqrt(sum);
// }
// console.log(result);

//151.4
// let num = 379;

// let whole = Math.sqrt(num); //целое число
// console.log(whole);

// let dozen = whole.toFixed(1); //Десятка
// console.log(dozen);

// let weaving = whole.toFixed(2); //сотое
// console.log(weaving);

//151.5
// let num = 587;

// let rounding = Math.sqrt(num);
// console.log(rounding);

// let toBigger = Math.ceil(rounding);
// console.log(toBigger);

// let toShorter = Math.floor(rounding);
// console.log(toShorter);

// let obj = {
// 	ceil: toBigger,
// 	floor: toShorter,
// };
// console.log(obj);

//151.6 Нахождение максимального и минимального числа

// let arr = [4, -2, 5, 19, -130, 0, 10];
// let min = Math.min.apply(null, arr);
// console.log(min);

// let arr = [4, -2, 5, 19, -130, 0, 10];
// let max = Math.max.apply(null, arr);
// console.log(max);

//151.7 Метод Math.random
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomInt(0, 100));

//151.8
// let arr = [];

// for (let i = 0; i < 10; i++) {
// 	function getRandomInt(min, max) {
// 		return Math.floor(Math.random() * (max - min + 1) + min);
// 	}
// 	arr.push(getRandomInt(0, 100));
// }
// console.log(arr);

//151.9 Метод Math.abs
// let a = -123;
// let b = -1;

// let res = Math.abs(a) + Math.abs(b);
// console.log(res);

//152.1 Строковые методы JavaScript
// let str = 'js';

// console.log(str.toUpperCase());

//152.2
// let str = 'JS';

// console.log(str.toLowerCase());

//152.3 Работа с substr, substring, slice
// let str = 'я учу javascript';
// console.log(str.substring(0, 2));

// let newStr = str.substr(0, 2);
// console.log(newStr);

// let strSlice = str.slice(0, 2);
// console.log(strSlice);

//152.4 Работа с indexOf
// let str = 'abcde';
// let res = str.indexOf('c');
// console.log(`Позиция буквы c: ` + str.indexOf('c'));

//152.5
// let str = 'bacde';
// let res = str.indexOf('a', 0);

// if (res[str.length] == 'a') {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

//152.6
// let str = 'abcde';
// let res = str.indexOf('a', 0);

// if (res == false) {
// 	console.log('Yes');
// } else {
// 	console.log('No');
// }

//152.7
// let str = 'bcdea';
// if (str[str.length - 1] == 'a') {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

//152.8
// let str = 'http://abcde';

// if (str.indexOf('http://', 0) == false) {
// 	console.log('Yes');
// } else {
// 	console.log('No');
// }

//152.9
// let str = 'index.html';

// if (str.endsWith('.html') == true) {
// 	console.log('Yes');
// } else {
// 	console.log('No');
// }

//152.10
// let str = 'http://.gwfsa';
// console.log(str.startsWith('http://'));

//152.11
// let str = 'few,lf.html';
// console.log(str.endsWith('.html'));

//152.12
// let num = '1-2-3-4-5';
// let arr = num.split('');
// console.log(arr);

//152.13
// let num = '12345';
// let res = num.split('');
// console.log(res);

//152.14
// let arr = [1, 2, 3, 4, 5];
// let res = arr.join('-');
// console.log(res);

//153,1 Методы для массивов в JavaScript
// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//153.2
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//153.3
// let arr = [1, 2, 3];
// let elem = arr.shift();
// console.log(elem);

//153.4
// let arr = [1, 2, 3];
// let elem = arr.pop();
// console.log(elem);

//153.5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice(3, 5);
// console.log(arr);

//153.6
// let arr = [1, 2, 3, 4, 5];
// let res = arr.slice(3, 5);
// console.log(res);

//153.7
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//153.8
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//153.9
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

//153.10
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));

//153.11
// let arr = [1, 2, 3, 4, 5];
// let res = arr.includes(3);
// console.log(res);

//154,1
// let str = 'london';
// let qwe = str.split('');
// qwe[qwe.length - 1] = qwe[qwe.length - 1].toUpperCase();
// console.log(qwe.join(''));

// let res = str.slice().toUpperCase() + str.slice(1);

//154.2
// let str = 'london';
// let res = str.slice(0, 2).toUpperCase() + str.slice(1);
// console.log(res);

// 154,3
// let str = 'London';
// let res = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(res);

//154,4
// let str = 'word1 word2 word3';
// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }

// let res = words.join(' ');
// console.log(res);

//154.5
// let str = 'var_test_text'; // to 'VarTestText'
// let words = str.split('_');
// console.log(words);

// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let res = words.join('');
// console.log(res);

//154.6 Не решено
// let str = 'var_test_text'; // to 'VartestText'
// let words = str.split('_');
// console.log(words);

// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// 	words[words.length - 2] = words[words.length - 2].toLowerCase();
// }
// let res = words.join('');
// console.log(res);

//154.7
// let str = 'SomeRandomTextForExample';
// let res = str.split('').reverse().join('');

// console.log(res);

//155.1
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;

// for (let digit of arr) {
// 	sum += +digit;
// }

// console.log(sum);

//155.2
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }

// console.log(sum);

//155.3
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum); // почему-то выводит 5, а не 15

//155.4
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);

//155.5
// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;

// for (let digit of arr) {
// 	prod *= digit;
// }

// console.log(prod);
