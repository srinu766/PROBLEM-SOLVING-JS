

function twoSum(nums, target) {
    for(let i=0; i<=nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[i] +nums[j] == target){
                return [i, j]
            }
        }
    }
    return []

}



console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]