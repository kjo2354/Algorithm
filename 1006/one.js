function solution(id_list, report, k) {
    let users = {};
    let receivers = {}
    for (let id of id_list) {
        users[id] = 0;
        receivers[id] = [];
    }

    for (let user of report) {
        let x = user.split(' ');
        let send = x[0];
        let receive = x[1];

        if (!receivers[receive].includes(send)) receivers[receive].push(send);
    }

    for (let [key, value] of Object.entries(receivers)) {
        let count = value.length >= k ? 1 : 0;
        value.map((id) => users[id] = (users[id] + count));
    }
    return Object.values(users);
}

let id_list = ["con", "ryan"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"]
let k = 3;
//result : [2,1,1,0]

console.log(solution(id_list, report, k))

/**
 * 신고 결과 받기
 *
 * Set으로 중복 신고된 결과를 제거하는게 가장 좋았다..
 *
 * function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a => { return a.split(' ') });
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1)
    }
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1)
        }
    }
    let answer = id_list.map(a => good.get(a) || 0)
    return answer;
}
 * */