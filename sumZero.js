// 정렬된 배열이라는 가정하에 배열의 두개의 index값을 더해서 합이 0이 되는 값 두개를 출력하시오.

function sumZero(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
        return;
    }
}

// 이중 For문의 시간복잡도 = O(n^2)

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// 멀티포인터 사용하여 이중 For문 => while문으로 시간복잡도 O(n)으로 refectoring

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); // [-3,3]
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefinded
sumZero([1, 2, 3]); // undefinded
