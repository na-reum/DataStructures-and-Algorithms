//  단어 객체를 키로 생성하고 해당 단어가 문자열 내에 등장하는 횟수를 생성하는 함수
function wordCount(sentence){
    // 마침표가 단어로 인식되지 않도록 마침표를 제거
    const wordsArray = sentence.replace(/[.]/g,"").split(" ");
    const occurenceList = {};
    const answerList = {};

    for(let i = 0, wordLength = wordsArray.length; i<wordLength; i++){
        const currentWord = wordsArray[i];
        // 존재하지 않는다. 따라서 첫 번째 등장으로 설정한다.
        if(!occurenceList[currentWord]){
            occurenceList[currentWord] = 1;
        }else{
            occurenceList[currentWord]++; // 등장 횟수를 증가한다.
        }
    }
    
    const arrayTemp = [];
    // 값과 키를 고정 배열로 저장한다. 
    for(let prop in occurenceList){
        arrayTemp.push([occurenceList[prop],prop]);
    }

    function sortcomp(a,b){
        return b[0] - a[0]; // 배열의 첫번쨰 항목을 비교한다.
    }

    arrayTemp.sort(sortcomp);

    for(let i = 0, arrLength = arrayTemp.length; i<arrLength; i++){
        const current = arrayTemp[i];
        answerList[current[1]] = current[0]; // 키-값 쌍
    }
    return answerList;
}

console.log(wordCount('practice makes perfect. get perfect by practice. just practice'))