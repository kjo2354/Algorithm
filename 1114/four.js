function solution(board) {
    var answer = 0;
    let len = board.length;

    let dx = [-1, 1, 0, 0, 1, -1, 1, -1];
    let dy = [0, 0, -1, 1, 1, 1, -1, -1];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let v = board[i][j];
            if (v == 1) {
                for (let k = 0; k < 8; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                    if (nx < 0 || ny < 0 || nx >= len || ny >= len) {
                        continue;
                    }
                    let nv = board[nx][ny];
                    board[nx][ny] = nv == 0 ? 2 : nv;
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 0) answer += 1;
        }
    }

    return answer;
}
let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
];
let m2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0]
]
console.log(solution(board))