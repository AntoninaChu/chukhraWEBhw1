/*
### 1. **Convert Object to Array**
​
Create a function that converts an object into array
​
    toArr({ key1: 'value1', key2: 'value2' }) // [["key1", "value1"], ["key2", "value2"]]
    toArray({}) // [] Return an empty array if the object is empty.*/

function toArray(object){
	var resultArr = [];
	for(let key in object){
		resultArr.push([key.toString(), object[key].toString()]);
	}
	return resultArr;
}