function sum(...nums){
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

// console.log(sum(1,2,3,4,5))

const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 10);
// console.log(result);