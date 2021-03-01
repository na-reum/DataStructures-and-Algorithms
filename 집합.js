// Set객체

// 삽입
const exampleSet = new Set();
exampleSet.add(1);
// 중복된 값을 삽입할 수 없다
exampleSet.add(1);
exampleSet.add(2);

// 삭제
exampleSet.delete(1); // 불리언을 반환

// 포함
exampleSet.has(2) // 불리언을 반환

// 교집합
const intersectSets = (setA, setB) => {
    const interSection = new Set();
    for(let elem of setB){
        if(setA.has(elem)){
            interSection.add(elem);
        }
    }
    return interSection;
}

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,3]);

// console.log(intersectSets(setA, setB));

// 상위 집합 여부 확인
const isSuperset = (setA,subset) => {
    for(let elem of subset){
        if(!setA.has(elem)){
            return false;
        }
    }
    return true;
}

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,3]);
// const setC = new Set([5]);

// console.log(isSuperset(setA,setB));
// console.log(isSuperset(setA,setC));


// 합집합
const unionSet = (setA,setB) => {
    const union = new Set(setA);
    for(let elem of setB){
        union.add(elem);
    }
    return union;
}

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,3]);
// const setC = new Set([5]);
// console.log(unionSet(setA,setB))
// console.log(unionSet(setA,setC))

// 차집합
const differenceSet = (setA,setB) => {
    const difference = new Set(setA);
    for(let elem of setB){
        difference.delete(elem);
    }
    return difference;
}
