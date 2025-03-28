// Utility function to convert objects to arrays if needed
function convertToArray(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
}

// Collection Functions (work with Arrays or Objects)
function myEach(collection, callback) {
    const arr = convertToArray(collection);
    
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], Object.keys(collection)[i], collection);
    }
    
    return collection;
}

function myMap(collection, callback) {
    const arr = convertToArray(collection);
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], Object.keys(collection)[i], collection));
    }
    
    return result;
}

function myReduce(collection, callback, acc) {
    const arr = convertToArray(collection);
    const keys = Object.keys(collection);
    
    let startIndex = 0;
    if (acc === undefined) {
        acc = arr[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], collection);
    }
    
    return acc;
}

function myFind(collection, predicate) {
    const arr = convertToArray(collection);
    const keys = Object.keys(collection);
    
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], keys[i], collection)) {
            return arr[i];
        }
    }
    
    return undefined;
}

function myFilter(collection, predicate) {
    const arr = convertToArray(collection);
    const keys = Object.keys(collection);
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], keys[i], collection)) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

function mySize(collection) {
    return convertToArray(collection).length;
}

// Array Functions
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
}

// BONUS: Advanced Functions
function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const valueA = callback(a);
        const valueB = callback(b);
        
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB;
        }
        
        return valueA.toString().localeCompare(valueB.toString());
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            if (shallow) {
                newArr.push(...array[i]);
            } else {
                myFlatten(array[i], shallow, newArr);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Export functions if needed
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues
};