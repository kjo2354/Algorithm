function solution(keyinput, board) {
    var answer = [0, 0];
    let updown = (board[1] - 1) / 2;
    let leftright = (board[0] - 1) / 2;

    for (const x of keyinput) {
        let next;
        if (x === 'right' || x === 'left') {
            next = answer[0] + (x === 'right' ? 1 : -1);
            if (next > leftright || next < (-1 * leftright)) {
                continue;
            }
            answer[0] = next;
        } else {
            next = answer[1] + (x === 'up' ? 1 : -1);
            if (next > updown || next < (-1 * updown)) {
                continue;
            }
            answer[1] = next;
        }
    }

    return answer;
}
//[0, -4]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]))