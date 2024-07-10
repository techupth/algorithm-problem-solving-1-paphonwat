function twoSum(numbers, target) {
	// เริ่มเขียนโค้ดตรงนี้จ้า
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
};

//let numbers =  [2, 7, 11, 15];
//let target = 9;

let numbers =  [2, 7, 11, 15];
let target = 23;

let result = twoSum(numbers, target);

console.log(result)