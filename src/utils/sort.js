function sortAsendingNumber(array) {
  function sortFunction(a, b) {
    return a - b;
  }
  return array.sort(sortFunction);
}

export default sortAsendingNumber;
