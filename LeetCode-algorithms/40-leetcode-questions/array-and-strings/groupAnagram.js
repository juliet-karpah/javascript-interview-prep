/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
*/

// sorting method O(n * k log k)

var groupAnagrams = function(strs) {
    // compare the frequency of each word and group them together
    const map = new Map()
    for(let str of strs){
        let sorted = [...str].sort().join()
        if(map.has(sorted)){
            anagrams = map.get(sorted)
            anagrams.push(str)
        }else{
            map.set(sorted, [str])
        }
    }

    const result = []
    for(let value of map.values()){
        result.push(value)
    }

    return result
};

// frequency method O(n * k)

var groupAnagrams = function(strs) {
    // compare the frequency of each word and group them together
    const map = new Map()
    for(let str of strs){
        let digits = new Array(26).fill(0)
        for(let s of str){
            let num = s.toLowerCase().charCodeAt(0) - 97
            digits[num]++
        }
        let temp = digits.join("#")

        if(map.has(temp)){
            anagrams = map.get(temp)
            anagrams.push(str)
        }else{
            map.set(temp, [str])
        }
    }

    const result = []
    for(let value of map.values()){
        result.push(value)
    }

    return result
};