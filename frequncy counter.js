// 12.15일(목)
// 내 코드 runjs 에서는 모두 정상으로 돌아가는데 강의에서 제공하는 웹상에서의 index.js 로 테스트해보면 통과하지못함. test case 가 추가
// 적으로 뭐가 더있는지 모르겠음.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    //Edge Case 맨처음에 글자 길이가 다르면 무조건 false 반환
    if (str1.length === 0 && str2.length === 0) return true;
    //Edge Case 둘다 빈문자열일경우 length == 0 이고 이경우 무조건 true
    let checkLetter = {};
    let checkLetter1 = {};
    for (let value of str1) {
        checkLetter[value] > 0
            ? checkLetter[value]++
            : (checkLetter[value] = 1);
    }
    for (let value of str2) {
        checkLetter1[value] > 0
            ? checkLetter1[value]++
            : (checkLetter1[value] = 1);
    }
    for (let value in checkLetter) {
        // 서로 글자가 일치하는지 체크
        if (value in checkLetter1 === false) return false;
        // console.log(value in checkLetter1)
        return checkLetter[value] === checkLetter1[value] ? true : false;
    }
}
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false)
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
