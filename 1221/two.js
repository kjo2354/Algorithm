// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    function getSum(list) {
        if(list.length === 0) return 1;
        return list[0] * getSum(list.slice(1));
    }
    return getSum(arr);
}

console.log(productOfArray([1,2,3,10]))