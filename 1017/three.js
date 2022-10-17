function solution(fees, records) {
    var answer = [];
    let car = {}, timeRecord = {};

    for (let record of records) {
        let [t, number, type] = record.split(' ');
        let hm = t.split(':');
        let time = parseInt(hm[0]) * 60 + parseInt(hm[1]);

        if (type == 'IN') {
            car[number] = time;
        } else {
            let calc = time - car[number];
            if (timeRecord[number] === undefined) {
                timeRecord[number] = calc;
            } else {
                timeRecord[number] += calc;
            }
            delete car[number];
        }
    }

    for (const [number, time] of Object.entries(car)) {
        const lastMin = 23 * 60 + 59;
        let calc = lastMin - car[number];
        if (timeRecord[number] === undefined) {
            timeRecord[number] = calc;
        } else {
            timeRecord[number] += calc;
        }
        delete car[number];
    }

    let list = Object.keys(timeRecord).sort((a, b) => a - b);
    for (let car of list) {
        let time = timeRecord[car];
        let calc = time - fees[0];
        let fee = fees[1];
        if (calc > 0) {
            fee += Math.ceil((time - fees[0]) / fees[2]) * fees[3];
        }
        answer.push(fee);
    }

    return answer;
}

let fees = [120, 0, 60, 591]
let records = [
    "16:00 3961 IN",
    "16:00 0202 IN",
    "18:00 3961 OUT",
    "18:00 0202 OUT",
    "23:58 3961 IN"
];
//result [0, 591]
console.log(solution(fees, records))

/**
 * 주차 요금 계산
*/