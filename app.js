// 変数
let hello = 'Hello World';
alert(hello);

// 四則演算
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

// 文字列結合
alert('Hello' + 'Warld')

let str1 = 'Hello';
let str2 = 'World!';
alert(str1 + str2);

// 条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('good');
} else if(orange == apple){
  alert('bad');
} else{
  alert('no');
}

// 繰り返し
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let number = 0;

for(i = 1; i < 11; i++){
  number = number + i;
}

alert('1から10まで足し算した結果は' + number + 'です');