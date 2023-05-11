const secondHighest = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  return second !== -Infinity ? second : undefined;
};

const start = () => {
  const second = secondHighest([
    -10, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18,
  ]);
  console.log(second, "Hello World");
};

start();

// uper function invokes when the first is greater
