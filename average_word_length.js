/*### 2. **Average Word Length**
​
Create an average word calculator function. The function must take in text and return the number of the average word length. **Ignore punctuation when counting the length.**
​
    avgWordLengthCalc("q w e r t y.") // 1.00
    avgWordLengthCalc("The reduce method executes a reducer function.") // 5.57
    avgWordLengthCalc("callback is called, accumulator!") // 6.75
    avgWordLengthCalc("") // 0
​
**Notice:**
You can't use:
`Array.prototype.reduce()` and `Array.prototype.map()`
*/

function avgWordLengthCalc(text){
	var sum = 0;
	let regexp = /\b[a-zA-Z`]+/g;
	let words = text.match(regexp);
	if(words == null){
		return 0;
	}
	for(let word of words){
		sum += word.length;
	}
	return sum/words.length;
}