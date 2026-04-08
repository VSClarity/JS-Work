// 1
let a = 5;
let b = 2;
let multiply_ab = a * b;
console.log(multiply_ab);

// 2
let c = 10;
let d = 2;
let division_cd = c / d;
console.log(division_cd);

// 3
let e = 'abc';
let f = 'def';
let sum_ef = e + f;
console.log(sum_ef);

// 4
let numValue = 11;
let booleanValue = true;
let textValue = "java script";
let textValueNumber = "100";
console.log(typeof numValue);
console.log(typeof booleanValue);
console.log(typeof textValue);
console.log(typeof textValueNumber);

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
let inputNumUser = Number(prompt("Введите первое число"));
let inputNumUser_2 = Number(prompt("Введите второе число"));
let outputNumUserSum = (numUser + numUser_2) / 2;
alert(outputNumUserSum);

// 2.3
let min_sec_User = Number(prompt("Введите кол-во минут"));
let min_sec_UserAnswer = min_sec_User * 60;
alert(min_sec_UserAnswer);

// 2.4
let greeting = "Hello, ";
let userName = prompt("Введите ваше имя")
let greetingUserName = greeting + userName;
alert(greetingUserName);