var partitionLabels = function (s) {
    let words = [];
    let last = 0, index = 0;

    while (s.length) {
        let v = s[index];
        if (s.lastIndexOf(v) > last) {
            last = s.lastIndexOf(v);
        } else if (index == last) {
            let w = s.slice(0, last + 1);
            s = s.slice(last + 1);
            words.push(w);
            index = 0;
            last = 0;
            continue;
        }
        index++;
    }
    return words.map((w) => w.length);
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));