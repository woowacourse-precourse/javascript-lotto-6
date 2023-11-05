const calcMatchCount = (arr1, arr2) => {
  return arr1.filter((el) => arr2.includes(el)).length;
};

export default calcMatchCount;
