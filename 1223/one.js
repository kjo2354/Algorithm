/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
     let add = 0;
     let list = [...digits].reverse();
     for(let i=0;i<list.length;i++) {
        if(list[i] === 9) {
            list[i] = 0;
            add = 1;
        } else {
            list[i] += 1;
            add = 0;
            break;
         }
     }
     if(add === 1) list.push(1);
    return list.reverse();
};

console.log(plusOne([9]));