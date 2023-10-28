function bubbleSort(arr) {
    const arrLength = arr.length;

    for (let j = arrLength - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }

    return arr;
  }

  console.log(bubbleSort([1, 40, -5, 10, 0]));