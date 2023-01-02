/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set();
    for(const x of nums) {
        if(set.has(x)) return true;
        set.add(x);
    }
    return false;
};

console.log(containsDuplicate([1,2,3,4]));