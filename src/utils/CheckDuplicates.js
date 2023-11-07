const CheckDuplicates = {
  winningNumber(numbers) {
    const set = new Set();
    for (const number of numbers) {
      if (set.has(number)) {
        return true;
      }
      set.add(number);
    }
    return false;
  },
};

export default CheckDuplicates;
