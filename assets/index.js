// 1
let a = 5;
let b = 2;
let sum_ab = a * b;
console.log(sum_ab);

// 2
let c = 10;
let d = 2;
let sum_cd = c / d;
console.log(sum_cd);

// 3
let e = 'abc';
let f = 'def';
let sum_ef = e + f;
console.log(sum_ef);

// 4
let lol = 11;
let lolz = true;
let text = "java script";
let textValue = "100";
console.log(typeof lol);
console.log(typeof lolz);
console.log(typeof text);
console.log(typeof textValue);

// 5

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// 2.1
let questionUser = Number(prompt("Введите число:"));
let resultQuestion = questionUser ** 2;
alert(resultQuestion);

// 2.2
let numUser = Number(prompt("Введите первое число"));
let numUser_2 = Number(prompt("Введите второе число"));
let numUserSum = (numUser + numUser_2) / 2;
alert(numUserSum);

// 2.3
let min_sec_User = Number(prompt("Введите кол-во минут"));
let min_sec_UserAnswer = min_sec_User * 60;
alert(min_sec_UserAnswer);

// 2.4
let greeting = "Hello, ";
let userName = prompt("Введите ваше имя")
let greetingUserName = greeting + userName;
alert(greetingUserName);