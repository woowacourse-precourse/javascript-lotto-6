class FindIndex {
  static findArrayIndex(arr, targetValue) {
    const indexes = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === targetValue) {
        indexes.push(i);
      }
    }
    return indexes;
  }
}

export default FindIndex;
