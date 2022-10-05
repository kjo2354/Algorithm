function solution(survey, choices) {
    let types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    let points = Array(4).fill(0);

    for (let i = 0; i < survey.length; i++) {
        let x = survey[i];
        let choice = choices[i];

        switch (x) {
            case 'RT':
                if (choice < 4) points[0] = points[0] + (4 - choice) * -1
                else if (choice > 4) points[0] = points[0] + (choice - 4)
                break;
            case 'TR':
                if (choice > 4) points[0] = points[0] + (choice - 4) * -1
                else if (choice < 4) points[0] = points[0] + (4 - choice)
                break;
            case 'CF':
                if (choice < 4) points[1] = points[1] + (4 - choice) * -1
                else if (choice > 4) points[1] = points[1] + (choice - 4)
                break;
            case 'FC':
                if (choice > 4) points[1] = points[1] + (choice - 4) * -1
                else if (choice < 4) points[1] = points[1] + (4 - choice)
                break;
            case 'JM':
                if (choice < 4) points[2] = points[2] + (4 - choice) * -1
                else if (choice > 4) points[2] = points[2] + (choice - 4)
                break;
            case 'MJ':
                if (choice > 4) points[2] = points[2] + (choice - 4) * -1
                else if (choice < 4) points[2] = points[2] + (4 - choice)
                break;
            case 'AN':
                if (choice < 4) points[3] = points[3] + (4 - choice) * -1
                else if (choice > 4) points[3] = points[3] + (choice - 4)
                break;
            case 'NA':
                if (choice > 4) points[3] = points[3] + (choice - 4) * -1
                else if (choice < 4) points[3] = points[3] + (4 - choice)
                break;
        }
    }

    return points.map((item, idx) => {
        if (item <= 0) return types[idx][0]
        else return types[idx][1]
    }).join('');
}

let survey = ["AN", "CF", "MJ", "RT", "NA"];
let choices = [5, 3, 2, 7, 5];
//result : TCMA
console.log(solution(survey, choices))

/**
 * 성격 유형 검사하기
 *
 * 문제를 꼼꼼하게 읽어야한다~
 * */