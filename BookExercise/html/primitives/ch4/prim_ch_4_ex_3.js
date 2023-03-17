function getMaxSubSum(arr){
	let arrOfSums = [];
	let max = 0;
	
	for (let i = 0; i < arr.length; i++){
		let curSum = 0;		
		for (let j = i; j < arr.length; j++){
			curSum += arr[j];
			arrOfSums.push(curSum);
			if (arrOfSums[arrOfSums.length - 1] > max){
				max = arrOfSums[arrOfSums.length - 1];
			}
		}		
	}
	
	return max;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));