{
  const sumArray = (numbers: number[]): number => {
    return numbers.reduce((total, currValue) => total + currValue, 0);
  };

  console.log(sumArray([1, 2, 3, 4, 5, 9]));
}
