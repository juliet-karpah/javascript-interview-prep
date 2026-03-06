/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

var minWindow = function(s, t) {

    // the characters need to for the window to be valid
    const need = new Map()

    for(let c of t){
        need.set(c, (need.get(c) || 0) + 1)
    }

    // the number of characters remaining from the window
    let missing = t.length

    let left = 0
    let start = 0
    let smallest_window = Infinity

    for(let right=0; right<s.length; right++){
        // reduce missing and need
        let curr = s[right]
        if(need.has(curr)){
            
            if(need.get(curr) > 0){
                missing--
            }
            need.set(curr, need.get(curr)-1)
        }

        while(missing === 0){
            if(right - left + 1 < smallest_window){
                smallest_window = right - left + 1
                start = left
            }

            //time to move the left pointer but first check if the character is valid
            // if it is valid, then increase missing and update need since you will be invalidating the window

            let left_curr = s[left]
            if(need.has(left_curr)){
                need.set(left_curr, need.get(left_curr) + 1)
                if(need.get(left_curr) > 0){
                    missing++
                }
            }

            left++
        }
    }
    console.log(smallest_window)
    result = smallest_window === Infinity ? "" : s.slice(start, start + smallest_window)
    return result


};