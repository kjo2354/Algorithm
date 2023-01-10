/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let rs = [];
    let obj1 = {}, obj2 = {};
    for(const num of nums1) {
        obj1[num] = (obj1[num] || 0) + 1;
    }
    for(const num of nums2) {
        obj2[num] = (obj2[num] || 0) + 1;
    }
    for(const [k, v] of Object.entries(obj1)) {
        if(k in obj2) {
            let count = Math.min(obj2[k], v);
            while(count--) {
                rs.push(k);
            }
        }
    }
    return rs;
};
console.log(intersect([1,2,2,1], [2,2]));