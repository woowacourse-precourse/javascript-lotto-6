function RangeTest(inputNumbers) {
    return inputNumbers.some((number) => {
      return number < 1 || number > 45;
    });
  }
  
  export default RangeTest;