function solution(spell, dic) {
    var answer = 0;
    spell = spell.sort((a, b) => a.localeCompare(b)).join('');
    let len = spell.length;
    for (const x of dic) {
        let set = [...new Set(x)].sort((a, b) => a.localeCompare(b)).join('');
        if (spell == set) answer++;
    }
    return answer === 0 ? 2 : answer;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]))