function sortAscendingNumber(array) {
  function sortFunction(a, b) {
    return a - b;
  }
  return array.sort(sortFunction);
}

export default sortAscendingNumber;
