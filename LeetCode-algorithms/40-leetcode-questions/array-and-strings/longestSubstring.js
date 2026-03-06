/*
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let seen = new Set()
    let curr_max = 0

    for(let j=0; j<s.length; j++){
        while(seen.has(s[j])){
            seen.delete(s[i])
            i++
        }
        seen.add(s[j])
        curr_max = Math.max(curr_max, j-i+1)
    }
    return curr_max
    
};