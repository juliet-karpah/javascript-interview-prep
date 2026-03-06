/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

Hint:
One half is sorted.
If the target is in that half, search it.
Otherwise, search the other half — and always move past mid.
 
*/

var search = function(nums, target) {
/*
nums = [4,5,6,7,0,1,2], target = 0

- split the array by half
- identify which half is sorted 
    - if middle_num is greater than first number(left side is sorted)
    - if middle_number is less than first number(right side is sorted)
    - check if the target is between the first and mid numbers of the sorted
        - if yes then, middle number is in the sorted part
        - else it is in the unsorted part
*/

let left = 0
let right = nums.length-1
while(left <= right){
    mid = left + Math.floor((right-left)/2)
    if(nums[mid] == target) return mid

    //left half
    if(nums[mid] >= nums[left]){
        if(nums[left] <= target && target < nums[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }else {
        if(nums[mid] < target && target <= nums[right]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
}

return -1
    
};