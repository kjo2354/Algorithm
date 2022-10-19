function solution(skill, skill_trees) {
    var answer = 0;
    for (let tree of skill_trees) {
        let chk = true;
        let skillList = skill.split('');

        for (let x of tree) {
            let index = skillList.indexOf(x);
            if (index == 0) {
                skillList.shift();
            } else if (index > 0) {
                chk = false;
                break;
            }
        }
        chk && answer++;
    }
    return answer;
}
//result : 2
console.log(solution('CBD', ["BACDE", "CBADF", "AECB", "BDA"]))

/**
 * 스킬트리
 *
 *
*/