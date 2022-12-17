// 리팩토링

function validAnagram(frist, second) {
    if (frist.length !== second.length) return false;
    // Edge Case
    let result = {};
    // Create empty object
    for (let el of frist) {
        result[el] ? result[el]++ : (result[el] = 1);
    }
    for (let value of second) {
        if (!result[value]) {
            return false;
        } else {
            result[value] -= 1;
        }
    }
    return true;
}

validAnagram("anagrams", "nagaramm"); // false
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false)
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
