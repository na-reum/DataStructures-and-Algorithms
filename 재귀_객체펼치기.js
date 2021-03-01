const dictionary = {
    'Key1':'1',
    'Key2' : {
        'a':'2',
        'b':'3',
        'c':{
            'd':'3',
            'e':'1'
        }
    }
}

const flattenDictionary = (dictionary) => {
    const flattenDictionary = {};
    const flattenDictionaryHelper = (dictionary,propName) => {
        if(typeof dictionary !== 'object'){
            flattenDictionary[propName] = dictionary;
            return;
        }
        for(let prop in dictionary){
            if(propName === ''){
                flattenDictionaryHelper(dictionary[prop],propName+prop);
            }else{
                flattenDictionaryHelper(dictionary[prop],propName+'.'+prop);
            }

        }
    }
    flattenDictionaryHelper(dictionary,'');
    return flattenDictionary;
}

console.log(flattenDictionary(dictionary))