function solution(files) {
    var answer = [];
    let splitList = [];
    for (let file of files) {
        let num = file.match(/\d+/)[0];
        const [head, tail] = file.split(num);
        splitList.push([head, num, tail, file]);
    }

    splitList.sort((a, b) => {
        let wordA = a[0].toUpperCase();
        let wordB = b[0].toUpperCase();

        if (wordA > wordB) {
            return 1;
        } else if (wordA < wordB) {
            return -1;
        } else {
            let numA = parseInt(a[1]);
            let numB = parseInt(b[1]);
            if (numA > numB) return 1;
            else if (numA < numB) return -1;
            else {
                let idxA = files.indexOf(a[3]);
                let idxB = files.indexOf(b[3]);
                if (idxA > idxB) return 1;
                else return -1;
            }
        }
    })
    return splitList.map((item) => item[3]);
}

let files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];
//result : ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(files))
