const swap = (strArr,index1,index2) => {
    // console.log(strArr);
    let temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}
const permute = (strArr,begin,end) => {
    if(begin === end){
        console.log(strArr);
    }else{
        for(let i = begin; i<end+1;i++){
            swap(strArr,begin,i);
            permute(strArr,begin+1,end);
            swap(strArr,begin,i);
        }
    }
}

const permuteArray = (strArr) => {
    permute(strArr, 0, strArr.length - 1);
}

permuteArray(["A", "C", "D"]);