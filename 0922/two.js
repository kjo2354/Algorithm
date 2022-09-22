process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i=0; i<b; i++) {
        console.log('*'.repeat(a));
    }
});

/**
 * 직사각형 별찍기
 * '특정문자'.repeat(횟수) : 이 함수를 이용해서 특정문자로 채워진 문자열을 리턴 받을 수 있음
 * */