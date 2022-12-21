// Slide Window
// max_sum_refectoring

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([1, 2, 1, 3, 8, 1, 8, 2], 2); // 11
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 1], 4); // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([1,4]) // null
