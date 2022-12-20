// My Code
// countUniqueValues라는 함수를 생성하시오. 이 함수는 정렬된 배열을  배열 내의 고유한 값을 카운트합니다. 배열에는 음수를 지정할 수 있지만 항상 정렬되있는 배열입니다.
// 12월 20일

function countUniqueValues(arr) {
    let i = 0;
    let j = 1;
    if (arr.length === 0) return 0;
    // Edge Case

    while (j < arr.length) {
        // while문은 언제 끝날지 모를때 사용. 이 경우는 arr.length 까지 돌아야 하니까 for문이 더 바람직함.
        if (arr[i] === arr[j]) {
            arr[j++];
        } else {
            arr[i++];
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
// countUniqueValues([1, 1, 1, 1, 1, 2]); //
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// Time Complexity - O(n)
// Space Complexity - O(n)
