function solution(numbers, hand) {
    var answer = '';
    let left = '*', right = '#';
    let d2 = [[2], [1, 3, 5], [4, 6, 8], [7, 9, 0], ['#', '*']];
    let d5 = [[5], [2, 4, 6, 8], [1, 3, 7, 9, 0], ['#', '*']];
    let d8 = [[8], [7, 5, 9, 0], [2, 4, 6, '#', '*'], [1, 3]];
    let d0 = [[0], ['#', '*', 8], [7, 9, 5], [4, 6, 2], [1, 3]];

    for (let x of numbers) {
        if (x == 1 || x == 4 || x == 7 || x == '*') { left = x; answer += 'L' }
        else if (x == 3 || x == 6 || x == 9 || x == '#') { right = x; answer += 'R' }
        else {
            let dis;
            switch (x) {
                case 2: dis = d2;
                    break;
                case 5: dis = d5;
                    break;
                case 8: dis = d8;
                    break;
                case 0: dis = d0;
                    break;
            }

            for (let i = 0; i < dis.length; i++) {
                let l = dis[i].includes(left);
                let r = dis[i].includes(right);

                if (l && r) {
                    if (hand == 'right') {
                        right = x;
                        answer += 'R';
                    }
                    else {
                        left = x;
                        answer += 'L';
                    }
                    break;
                }
                else if (l) {
                    answer += 'L';
                    left = x;
                    break;
                }
                else if (r) {
                    answer += 'R';
                    right = x;
                    break;
                }
            }
        }
    }
    return answer;
}

let lottos = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
let win_nums = 'right';
//result : LRLLLRLLRRL
console.log(solution(lottos, win_nums))

/**
 * [카카오 인턴] 키패드 누르기
 *
 * 이차원 배열로 만들어서 좌표로 생각한 점!
 * 높이 기준으로 position 처리했고 가운데 기준으로 좌우거리는 1이니까
 *      => 147, 369일때는 1번째 인덱스는 1 처리
 * 절대값을 통해서 떨어진 거리를 구함..
 *
 * function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}
 * */