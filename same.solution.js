function sample(str) {
    // 객체를 만들고 마지막에 객체를 반환한다.
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //  object['key']
        //  객체['key'] : 대괄호[ ] 사이에 키값을 '문자열'로 넣어 접근한다.
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

sample("Hello");
