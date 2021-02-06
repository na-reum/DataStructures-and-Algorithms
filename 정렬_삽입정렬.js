let 입력값 = [5,10,66,77,54,32,11,15];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스 (정렬된배열,삽입값){
    for(let i in 정렬된배열){
        if(삽입값<정렬된배열[i]){
            return i;
        }
    }
    return 정렬된배열.length
}

for (let i = 0; i<배열의길이; i++){
    삽입값 = 입력값.shift();
    인덱스 = 삽입값이들어갈인덱스(정렬된배열,삽입값);
    정렬된배열.splice(인덱스,0,삽입값);
    console.log(인덱스);
    console.log(정렬된배열);
}