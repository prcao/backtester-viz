export function groupBy(arrayOfObjects, propertyToGroupBy) {

    let wrappingDict = {};

    for(let obj of arrayOfObjects) {

        let key = obj[propertyToGroupBy];

        // init array
        if(!wrappingDict[key]) {
            wrappingDict[key] = [];
        }

        wrappingDict[key].push(obj);
    }

    return wrappingDict;
}

export function keyToIndexes(arrayOfObjects, key) {
    let dict = {};

    for(let [index, obj] of arrayOfObjects.entries()) {
        dict[obj[key]] = index;
    }

    return dict;
}

export function dictFromExtractedKey(arrayOfObjects, keyToExtract) {

    let dict = {};
    
    for(let [index, obj] of Array.entries(arrayOfObjects)) {
        obj['_index'] = index;
        dict[obj[keyToExtract]] = obj;
    }

    return dict;
} 