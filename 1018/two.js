function solution(record) {
    var answer = [];
    let actions = [];
    let users = {};

    for (let x of record) {
        const [action, userid, nickname] = x.split(' ');
        switch (action) {
            case 'Enter':
                users[userid] = nickname;
                actions.push([action, userid]);
                break;
            case 'Leave':
                actions.push([action, userid]);
                break;
            case 'Change':
                users[userid] = nickname;
                break;
        }
    }

    for (let x of actions) {
        const [action, userid] = x;
        if (action === 'Enter') {
            answer.push(`${users[userid]}님이 들어왔습니다.`);
        } else {
            answer.push(`${users[userid]}님이 나갔습니다.`);
        }
    }
    return answer;
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
//result : ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
console.log(solution(record))

/**
 * 오픈채팅방
 *
*/