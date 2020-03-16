/*### 3. **Maximum Possible Total**
​
Given an array of 10 numbers, return the **maximum possible total** made by summing just **5 of the 10 numbers**.
​
    maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) // 43
    maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])   // 100
    maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])    // 40
*/

function maxTotal(numArr){
	var repeat = true;
	var temp;
	var sum = 0;
	while(repeat){
		repeat = false;
		for(let index = 0; index < numArr.length - 1; index++){
			if(numArr[index] > numArr[index+1]){
				repeat = true;
				temp = numArr[index];
				numArr[index] = numArr[index+1];
				numArr[index+1] = temp;
			}
		}
	}
	for(let num of numArr.slice(5)){
		sum += num;
	}
	return sum;
}