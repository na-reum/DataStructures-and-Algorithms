//선택정랼 가장 작은 값을 꺼내서 정렬된 배열에 하나씩 넣는다 
let a = [10,11,9,2,3,6,5,4];
let 정렬된배열 = [];

// function min(){

// }

for (let i = 0; i < 8; i++){
    정렬된배열.push(Math.min.apply(null,a));

    a.splice(a.indexOf(Math.min.apply(null,a)),1)
    console.log(a);
    console.log(정렬된배열)
}

// while(a)