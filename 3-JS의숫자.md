# 자바스크립트 숫자

자바스크립트의 숫자 연산에는 다음과 같은 것들이 있다.

>- +: 덧셈
>- -: 뺄셈
>- /: 나눗셈
>- *: 곱셈
>- %: 나머지 연산

이는 다른 프로그래밍 언어에서도 일반적으로 사용되며 자바스크립트에 한정된 것은 아니다.

---

 ## 숫자체계 

자바스크립트는 숫자에 대해 64비트 부동 소숫점 표현을 사용한다. 

부호비트(63번째 비트) 가 1이면 음수이다.

다음 열한개의 비트 (62~52번째 비트) 까지 지수 값 e를 나타낸다.

마지막으로 나머지 52비트가 분수 값을 나타낸다.

64비트를 사용해 값은 다음과 같은 이해하기 난해한 공식에 의해 계산된다. 

> value = (-1)<sup>sign</sup> X e<sup>e-1023</sup> X (1 + $\sum_{i=1}^{52}$$b_{52-i}$ 
2<sup>-i</sup>)

40을 예로 위식에 대입해보면

> sign = 0

> e = (10000000100)<sub>2</sub> = 1028

> 1 + $\sum_{i=1}^{52}$$b_{52-i}$ 
2<sup>-i</sup> = 1 + (0.25)

결과는

> value = 1 X 2<sup>1028-1023</sup> X 1.25 = 1 X 2<sup>5</sup> X 1.25 = 40

십진분수로 인해 자바스크립트에서 부동소수점 체계가 반올림 오류를 일으킬 수 있다.

<pre>
0.1 + 0.2 === 0.3 ; // false
</pre>

0.1를 64비트 부동소수점 숫자로 제대로 표현할 수 없는 이유를 이해하기 위해서는 이진 표기법을 이해해야한다. 

이진 표기법으로 십진수를 표현할 때 무한개의 수가 필요한 경우가 많다. 이로 인해 이진수가 2<sup>n</sup>로 표햔되는 것이다. 여기사 n은 정수이다.

0.1을 계산하려고 할 때, 긴 나눗셈이 끝나지 않고 계속된다. 

---
## 자바스크립트 숫자 객체
다행히 자바스크립트에는 위와 같은 문제를 해결하는데 도움이 되는 Number 객체의 내장된 속성들이 있다. 

### 정수 반올림
자바스크립트가 모든 숫자를 나타낼 떄 부동소수점을 사용하기 때문에 정수 나눗셈은 소용이 없다. 

자바와 같은 프로그래밍 언어에서 정수 나눗셈의 결과는 해당 나누기의 몫이다. 

<pre>
5/4 // 자바스크립트에서는 1.25, 자바는 1
</pre>

자바에서는 명시적으로 정수를 정수형으로 선언해야 하기 때문에 결과가 부동소수점이 될 수 없다.

자바스크립트에서 정수 나눗셈을 하기 원한다면 다음 중 하나를 사용한다. 

> - Math.floor - 가장 가까운 정수로 내림
> - Math.round - 가장 가까운 정수로 반올림
> - Math.ceil - 가장 가까운 정수로 올림

<pre><code>
Math.floor(0.9); // 0
Math.floor(1.1); // 1

Math.round(0.49); // 0
Math.round(0.5); // 1

Math.round(2.9); // 3
Math.round(0.1); // 1

Math.ceil(0.9); // 1
Math.ceil(21); // 21
Math.ceil(21.01) // 22
</code></pre>
---
### Number.EPSILON

Number.EPSILON은 두 개의 표현이 가능한 숫자 사이의 가장 작은 간격을 반환한다.

이는 부동소수점 근사치를 활용해 분수가 제대로 표현되지 않는 문제를 해결하는데 유용하다.

<pre><code>
function numberEquals(x,y){
    return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.1 + 0.2 , 0.3 ); // true
</code></pre>
위의 함수는 두 수의 차이가 Number.EPSILON보다 작은지 검사해 더 작은 경우 true를 반환한다.

---

### 최대치
Number.MAX_SAFE_INTEGER는 가장 큰 정수를 반환한다.

<pre>
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true
</pre>
위 코드에서 두 수는 더 이상 커질 수 없기에 true이다. 하지만 위의 코드를 부동소수점과 같이 사용하면 제대로 작동하지 않으며 결과는 false이다. 

<pre>
Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022 // false
</pre>
Number.MAX_SAFE_INTEGER 은 가능한 가장 큰 부동 소수점을 반환한다.

Number.MAX_VALUE는 1.7976931348623157e+308이다.

<pre>
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2 // true
</pre>

Number.MAX_SAFE_INTEGER와는 달리 위의 코드는 배정밀도 부동소수점 표현을 사용하고 부동소수점에서도 잘 동작한다.

<pre>
Number.MAX_VALUE+ 1.111 === Number.MAX_VALUE + 2.022 // true
</pre>