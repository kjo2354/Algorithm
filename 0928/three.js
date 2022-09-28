function solution(nums) {
    let hash = new Set(nums);
    let max = parseInt(nums.length / 2);
    let size = hash.size;

    return max > size ? size : max;
}

let m1 = [3, 1, 2, 3];     //result : 2
let m2 = [3, 3, 3, 2, 2, 4]; //result : 3
let m3 = [3, 3, 3, 2, 2, 2]; //result : 2
console.log(solution(m3))

/**
 * 폰켓몬
 * 종류로만 확인하기 위해서 Set을 이용! (Set은 중복 제거되기 때문)
 * */