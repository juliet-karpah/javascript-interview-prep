/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/*
Naive solution in terms of space complexity. There doesn't need to be multiple arrays for prefix and suffix
*/

var productExceptSelf = function(nums) {
    const result = []
    const n = nums.length
    const prefix = new Array(n).fill(1);

    prefix[1] = nums[0]
    
    for(let i=2; i<n; i++){
        prefix[i] = prefix[i-1]*nums[i-1]
    }
    const suffix = new Array(n).fill(1);
    suffix[n-2] = nums[n-1]
    for(let i=n-3; i>=0; i--){
        suffix[i] = suffix[i+1]*nums[i+1]
    }
    
    for(let i=0; i < n; i++){
        result[i] = prefix[i]*suffix[i]
    }

    return result
};

/*
Optimized for space.
*/


var productExceptSelf = function(nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

 
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
};
