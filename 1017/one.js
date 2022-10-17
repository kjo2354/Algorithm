function solution(str1, str2) {
    var answer = 0;
    let interList = [];
    let unionList = [];
    let list1 = [];
    let list2 = [];

    for (let i = 0; i < str1.length - 1; i++) {
        list1.push(str1.substr(i, 2).toUpperCase())
    }
    for (let i = 0; i < str2.length - 1; i++) {
        list2.push(str2.substr(i, 2).toUpperCase())
    }
    list1 = list1.filter((item) => !/[^a-zA-Z]+/.test(item));
    list2 = list2.filter((item) => !/[^a-zA-Z]+/.test(item));

    for (let item of list1) {
        let index = list2.indexOf(item);
        if (index > -1) {
            list2.splice(index, 1);
            interList.push(item);
        }
    }
    unionList = [...list1, ...list2];
    let div_num = (interList.length / unionList.length);
    div_num = isNaN(div_num) ? 1 : div_num;
    answer = parseInt(div_num * 65536);
    return answer;
}

let str1 = 'A+C';
let str2 = 'DEF';
//result : 16384
console.log(solution(str1, str2))

/**
 * 뉴스 클러스터링
 *
 * substr(startindex, deletecount)
 *
*/