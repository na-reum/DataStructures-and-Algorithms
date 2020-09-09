# 자바스크립트의 독특한 특징
자바스크립트는 동적 인터프리터 언어이기 때문에 다른 전통적인 객체 지향 언어들과 구문이 다르다. 

## 자바스크립트의 범위 
---
범위(Scope): 자바스크립트 변수에 대한 접근 권한. 지역 or 전역

### 전역선언 : 전역범위
<pre>
test = 'sss';
console.log(test); // sss출력
</pre>
위 코드는 전역변수를 생성한다. 위와 같은 선언은 가장 안좋으므로 피하도록 한다. 

### var : 함수 범위 

자바스크립트에서는 변수를 어디에서 선언하든 변수선언이 함수 맨 앞으로 이동한다. 이를 변수 호이스팅 이라고 한다. 

<pre>
<code>
function scope1(){
    var top = 'top';
    bottom = 'bottom';
    console.log(bottom);

    var bottom;
}
scope1(); //bottom을 출력하며 오류 발생 안함
</code>
</pre>

<pre>
<code>
function scope1(){
    var top = 'top';
    var bottom;
    bottom = 'bottom';
    console.log(bottom);

}
scope1(); //bottom을 출력하며 오류 발생 안함
</code>
</pre>

두 코드는 일치한다. 

var 키워드의 핵심사항은 해당 변수의 범위가 가장 가까운 함수 범위하는 것이다. 

다음 코드에서 scope2함수는 insideIf변수와 가장 가까운 함수 범위이다. 
<pre>
<code>
function scope2(print){
    if(print){
        var insideIf='12';
    }
    console.log(insideIf);
}
scope2(true); // 12를 출력
</code>
</pre>
<pre>
<code>
function scope2(print){
    var insideIf;
    if(print){
        insideIf='12';
    }
    console.log(insideIf);
}
scope2(true); // 12를 출력
</code>
</pre>

두 함수는 일치한다. 

자바에서는 위의 구문은 오류를 일으킨다. insideIf변수가 if문 블록 내에서만 사용 가능하고 if문 블록 밖에서는 사용할 수 없기 때문이다. 

<pre>
<code>
var a = 1;
function four(){
    if(true){
        var a = 4;
    }
    console.log(a); '4'를 출력
}
</code>
</pre>
전역번수 값인 1이 아니라 4가 출력된다.

 a변수가 four함수 내에서 재선언이 되었고 사용 가능하다. 

 ### let : 블록범위
let을 사용해 선언된 변수는 가장 가까운 블록 범위를 갖는다.(즉, 변수가 선언된 {} 내에서만 유효하다.)
<pre><code>
function scope3(print){
    it(print){
        let insideIf = '12';
    }
    console.log(insideIf)
}
scope3(true); // 오류 ReferenceError발생
</code></pre>

## 등가와 형 
---

자바스크립트에는 자바와 같은 전통적인 언어와 다른 자료형이 있다. 

### 변수형
---
자바스크립트에는 boolean, number, string, undefined, object, function, symbol과 같은 일곱 개의 기본 자료형이 있다. 

특이한 점은 선언만 되고 값이 할당되지 않은 변수에 undefined가 할당된다는 것이다. 

typeof는 변수의 형을 반환하는데 사용 하는 기본 연산자

<pre>
<code>
var is20 = false //boolean
typeof is20; //boolean

var age = 19;
typeof age; //number

var fruits = ['Apple','Banana','Kiwi'];
typeof fruits; //object

var me = {firstName:'Sammie',lastName:'Bae'};
typeof me; //object

var nullVar = null;
typeof nullVar; //object

var function1 = function(){
    console.log(1);
}
typeof function1; //function

var blank;
typeof blank //undefined
</code>
</pre>

###  참/거짓 확인
---
> ### false로 판정
> - false
> - 0
> - 빈 문자열 (' ' 와 " ")
> - NaN
> - undefined
> - null
  
> ### true로 판정
> - true
> - 0 이 아닌 다른 숫자
> - 비어 있지 않은 문자열
> - 비어 있지 않은 객체 

## === 대 ==
---
자바스크립트는 스크립트 언어이고 변수 선언시 변수에 형이 할당되지 않는다. 

대신에 코드가 실행될 떄 해당 변수의 형이 해석된다. 

따라서 ===는 ==보다 등가를 좀 더 엄격히 확인한다. 

==은 값만 확인하는 반면 ===은 형과 값 모두 확인한다. 

<pre>
<code>
"5" == 5 // true
"5" === 5 // false
</code>
</pre>

"5"가 비교 전에 숫자로 강제 변환되기 때문에 ==은 true, ===은 false를 반환

## 객체
---
자바와 같은 강 자료형(stongly typed) 언어는 isEquals를 사용해 두 객체가 동일한지 확인한다.

자바스크립트에서 두 객체가 동일한지 확인하고자 == 를 사용하면 ture를 반환하지 않는다. 
<pre>
<code>
var o1 = {};
var o2 = {};

o1 == o2 // false
o1 === o2 //false
</code>
</pre>

두 객체는 동일함(동일한 속성과 값을 지님)에도 두 객체는 동일하지 않다. 

메모리상 주소가 다르다.

이는 대부분의 자바스크립트 애플리케이션이 lodash나 underscore와 같은 유틸리티 라이브러리를 사용하는 이유이다. 

이 두 라이브러리에는 두 객체 혹은 두 값을 정확하게 확인 할 수 있는 isEqual(obj1,obj2)함수가 있다.

이것이 가능한 이유는 isEqual함수가 속성 기반 등가 비교 방식으로 구현 되었기 때문이다. (객체의 각 속성을 비교한다.)

<pre><code>
function isEquivalent(a,b){
    // 속성 이름 배열
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // 속성 길이가 다른 경우 두 객체는 다른 객체다.
    if(aProps.length != bProps.length){
        return false;
    }

    for(let i = 0; i < aProps.length; i++){
        var propName = aProps[i];

        // 속성 값이 다른 경우 두 객체는 같지 않다
        if(a[propName]!== b[propName]){
            return false
        }
    }

    // 모든 것이 일치하면 두 객체는 일치한다. 
    return true;
}
isEquivalent({'hi':12},{'hi':12});// true 를 반환
</code></pre>

isEquivalent함수는 문자열이나 숫자 하나만을 속성으로 갖는 객체에 대해서도 잘 동작할 것이다. 
<pre><code>
var obj1 = {'prop1':'test','prop2':function(){}};
var obj2 = {'prop1':'test','prop2':function(){}};

isEquivalent(obj1,obj2); // false를 반환
</code></pre>

위와 같이 잘 동작하는 이유는 함수와 배열이 등가를 비교하기 위해 단순히 == 연산자를 사용한것이 아니기 떄문이다.

<pre><code>
var function1 = function(){console.log(2)};
var function2 = function(){console.log(2)};
console.log(function1 === function2) //false
</code></pre>
두 함수가 동일한 연산을 수행하지만 두 함수의 메모리상 주소는 다르다. 따라서 등가 연산자는 false를 반환한다. 

기본 등가 확인 연산자인 ==와 ===은 문자열과 숫자에만 사용할수있다. 객체에 대한 등가 확인을 구현 하려면 객체의 각 속성을 확인 해야한다. 


> ### 요약
> var : 함수 범위 내에서 변수 선언
> 
> let : 블록 범위 내에서 변수 선언
> 
> 아무 연산자 없이 : 전역 범위에 변수 선언
>
> 형 확인을 위해서는 typeof
>
> 등가 확인을 위해서는 == 값과 형이 모두 같은지는 ===
>
> == 과 ===은 숫자, 문자열, 불리언 같은 비 객체형에만 사용할수있다.