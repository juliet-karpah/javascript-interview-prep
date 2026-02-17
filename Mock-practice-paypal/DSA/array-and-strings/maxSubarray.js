/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/


var maxSubArray = function(nums) {
// at every index, decide if you should extend the window, kadane algorithm

    let total = nums[0]
    let curr = nums[0]

    for(let i=1; i<nums.length; i++){
        curr = Math.max(nums[i], curr + nums[i])
        total = Math.max(curr, total)
    }
    
    return total
}
