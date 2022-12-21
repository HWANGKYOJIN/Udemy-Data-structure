// 12.21(수))
// Slide Window
// O(n^2) => 이중 FOR문 사용으로 인해 시간복잡도 O(n^2)

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    // Edge Case
    let max = -Infinity;
    // 배열의 - < sum <= 0
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
            // Num 값 만큼 temp에 넣어서 더하기
        }
        if (temp > max) max = temp;
    }
    return max;
}

// maxSubarraySum([1, 2, 1, 3, 8, 1, 8, 2], 2); // 11
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 1], 4); // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([1,4]) // null
