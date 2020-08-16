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