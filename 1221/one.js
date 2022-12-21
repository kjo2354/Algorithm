/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let answer = [];
    let obj = {};
    for(let i=0;i<nums.length;i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    for(let i=0;i<nums.length;i++) {
        let num = nums[i];
        let sum = 0;
        Object.entries(obj).map(([k, v])=>{
            if(num > k) {
                sum += v;
            }
        });
        answer.push(sum);
    }
    return answer;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));