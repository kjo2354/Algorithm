function solution(n) {
    let answer = 0;

    const dfs = (board, row) => {
        if (row === n) answer++;
        else {
            for (let i = 1; i <= n; i++) {
                board[row + 1] = i;
                if (isValid(board, row + 1)) dfs(board, row + 1);
            }
        }
    }

    const isValid = (board, row) => {
        for (let i = 1; i < row; i++) {
            if (board[i] === board[row]) return false;
            if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
        }
        return true;
    }

    for (let i = 1; i <= n; i++) {
        const board = new Array(n + 1).fill(0);
        board[1] = i;
        dfs(board, 1);
    }

    return answer;
}

//result : 2
console.log(solution(2, 2))
//N-Queen 유명한 문제! .. 암기
/**
 * 첫번째 라인에 퀸이 위치하면 해당 라인의 가로, 세로줄 전체는
 * 어떤 퀸도 위치할 수 없다!!..
 * => 1차원 배열로 접근할 수 있다는 걸 의미한다.
 *
 * 예를 들어 [2, 4, 1, 3]이라는 배열이 있다면
 * 체스판[0][1] 위치에 퀸 한개
 * 체스판[1][3] 위치에 퀸 한개
 * 체스판[2][0] 위치에 퀸 한개
 * 체스판[3][2] 위치에 퀸 한개
 * 따라서 N크기의 1차원 배열로 표현할 수 있고 이 배열을 완성하면 된다.
 *
 */