function loopingStructures(numbers) {
    if (numbers.length === 0) {
    }

    let max = numbers[0];
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

    return {
      max: max,
      min: min,
      sum: max + min
    };
  }
  let numbers = [1, 2, 3, 4, 5];
  console.log(loopingStructures(numbers));
