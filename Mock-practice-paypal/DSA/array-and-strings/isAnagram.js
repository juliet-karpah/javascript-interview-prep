/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/

var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false
    }

    s_map = new Map();

    for(let i=0; i<s.length; i++){
        if(s_map.has(s[i])){
            s_map.set(s[i], s_map.get(s[i]) + 1)
        }else{
            s_map.set(s[i], 1)
        } 
    }

    for(let j=0; j<t.length; j++){
        if(!s_map.has(t[j]) || s_map.get(t[j]) == 0){
            return false
        }else{
            s_map.set(t[j], s_map.get(t[j]) - 1)
        }
    }

    return true
    
};