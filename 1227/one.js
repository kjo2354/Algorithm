/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    if(nums1.length === 0) return nums2;
    else if(nums2.length === 0) return nums1;
    
    let l = 0, r = 0;
    let result = [];

    while(l < m || r < n) {
        let lNum = nums1[l];
        let rNum = nums2[r];
        if(lNum != 0 && lNum <= rNum && l < m) {
            result.push(lNum);
            l++;
        } else if(rNum != 0 && r < n){
            result.push(rNum);
            r++;
        }
    }
    return result;
};

console.log(merge([1], 1, [], 0));