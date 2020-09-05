# Big O 표기법


빅오 표기법 : 알고리즘의 최악의 경우 복잡도

빅오 표기법에서 n은 입력의 개수를 의미한다. 

즉, 알고리즘을 구현 할 때 빅오 표기법이 해당 알고리즘이 얼마나 효율적인지 나타낸다.


## 일반적인 예 
---
O(1)은 입력 공간에 대해 변하지 않는다. 따라서 상수시간이라 부른다. 

배열에 있는 항목을 인덱스를 사용해 접근하는 경우가 O(1)알고리즘의 예이다. 

O(n)알고리즘의 예로 다음코드와 같이 0부터 n-1까지의 숫자를 출력하는 경우가 있다. 

<pre>
<code>
function exampleLinear(n) {
    for(let i = 0 ; i < n; i++){
        console.log(i);
    }
} 
</code>
</pre>

마찬가지로 O(n <sup>2</sup> )은 2차 시간이고 O(n <sup>3</sup> )은 3차 시간이다.

시간복잡도의 예는 다음과 같다.
<pre>
<code>
function exampleQuadratic(n) {
    for(let i = 0 ; i < n; i++){
        console.log(i);

        for(let j = 0 ; j < n; j++){
            console.log(j);

        }
    }
} 
</code>
</pre>
<pre>
<code>
function exampleCubic(n) {
    for(let i = 0 ; i < n; i++){
        console.log(i);

        for(let j = 0 ; j < n; j++){
            console.log(j);

                for(let k = 0 ; k < n; k++){
                    console.log(k);
                }
        }
    }
} 
</code>
</pre>

마지막으로 로그 시간 복잡도를 지닌 알고리즘의 예로는 2의 2승부터 n승까지의 항목을 출력하는 경우가 있다. 

예를 들어 exampleLogarithmic(10)은 다음 결과를 출력한다. 

---
<pre>
2,4,8,16,32,64
</pre>

로그 시간 복잡도의 효율은 백만개의 항복과 같이 큰 입력이 있는 경우 효율적이다.
n이 백만이라고 하더라도 log<sub>2</sub>(1,000,000)=19.93xxx이기 때문에 단지 19개의 항목만 출력한다. 

<pre>
<code>
function exampleLogarithmic(n){
    for(let i = 2; i <= n; i= i*2){
        console.log(i);
    }
}
</code>
</pre>

---
## 빅오 표기법 규칙
---
### 1. 계수 법칙
- 상수를 제거하라
### 2. 합의 법칙
- 빅오를 더하라
### 3. 곱의 법칙
- 빅오를 곱하라
### 4. 전이 법칙
### 5. 다항 법칙 
- 빅오의 k제곱