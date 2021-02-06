const nationWidth = {
         'korea': 220877,
         'Rusia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
    }

const koreaWidth = nationWidth['korea'];
delete nationWidth['korea'];

const nationNameArray = Object.entries(nationWidth);
const nationWidthArray = Object.values(nationWidth);

console.log(nationWidthArray)

function match(arr){
    let minGap = 0;
    let gapIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(i === 1){
            minGap = Math.abs( arr[i] - koreaWidth );
            gapIndex = i;
        }else{
            const gap =  Math.abs( arr[i] - koreaWidth )
            if(minGap > gap){
                minGap=gap;
                gapIndex = i;
            }
        }
    }
    return gapIndex;
}
const minGapIndex = match(nationWidthArray);

console.log(nationNameArray[minGapIndex][0],  Math.abs(nationNameArray[minGapIndex][1]-koreaWidth))