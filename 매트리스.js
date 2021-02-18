
const matrix = [[ 0, 2, 5, 4, 1 ],[ 4, 8, 2, 3, 7 ],[ 6, 3, 4, 6, 2 ],[ 7, 3, 1, 8, 3 ],[ 1, 5, 7, 9, 4 ] ]

const p = 1; 
const q=1;
const r=3; 
const s= 3;

let answer = 0;
for(let i = q; i<=s; i++ ){
    for(let j = p; j<=r; j++ ){
       answer += matrix[i][j];
    }
}
console.log(answer)
