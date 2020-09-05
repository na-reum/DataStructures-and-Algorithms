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

var obj1 = {'prop1':'test','prop2':function(){}};
var obj2 = {'prop1':'test','prop2':function(){}};

isEquivalent(obj1,obj2); // false를 반환