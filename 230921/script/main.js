// 자바 스크립트의 변수
// var
// let
// const

// console.log(1233456);

// var num =1;
// var str = "abcd";
// console.log(num);

// dddd = 1234;
// console,log(dddd);

// let number = 1;
// number = 2;
// console.log("변수 number",number);

// const MAXUNMBER = 1;
// MAXUNMBER = 2;
// console.log(MAXUNMBER);

// let value = prompt("input");
// console.log(value);
// alert("input scucess");
// if (condition) {
    
// }

// const NUMBER = 1;
// const NUMBER2 = "1";

// if (NUMBER === NUMBER2) {
//     console.log("num=1");
// }
//여기서 비교할떄 =을 두개만 쓰면 스트링을 형변환 시켜서 비교한다.
//떄문에 데이터의 형식까지 비교하기 위해서 =를 세개 써야한다.

// let score = 10;

// let b = 100;

// if(score == 10) {
//     let a = 50;
//     if(a == 50) {
//         a = 10;
//         b = 200;
//         console.log(a);
//         console.log(b);
//     }
// }

// //원시타입
// //numberType, String, boolean, undefined, null

// //객체타입
// //object, funtion, array...

// //if, for, switch, while...

// //함수의 오버로딩을 지원하지 않는다.

// class a{
//     //자바에서 처럼 객체를 지원하는건지는 알 수 없다.
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("*");
//         }
//     window.document.write("<br>");
// }

// //1. 함수 선언문
// function sum(x, y){
//     return x + y;
// }

// //2/힘수 표현식
// let res = function sum(z, y){
//     return x + y;
// }

// //3.생성자 사용
// let res1 = new Function('x', 'y', 'retrun x+y');

// //4.화살표 함수
// let res2 = (x,y) => z + y;
////////////////////////////////////////////////////////////////////////////
// let title = document.getElementById
// ("main-title");

// console.log(title);

// let sp = document.getElementsByTagName("span");
// console.log(sp);

// let spClass = document.getElementsByClassName("span-class");
// console.log(spClass);


let getGame = document.querySelectorAll(".Name");
console.log(getGame[1]);

let getLi = document.querySelector(".m1");
console.log(getLi);

getLi.innerHTML = "변경해볼까?";

// 브라우저 랜더링 과정
//DOM(document objeck model)
//BOM(brawzer object model)
//var, let, const차이
//levelScope가 뭔지(블록, 함수 등의 영역중 어떤 스코프인지 아는 것)
//