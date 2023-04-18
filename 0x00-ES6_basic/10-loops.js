/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
    const tmpArray = [];
    for (const i of array) {
        tmpArray.push(appendString + i);
    }
    return tmpArray;
};

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));