class Utils {
  static stringArrayToNumberArray(array) {
    const inputArray = array.split(',');
    const numberArray = [];
    inputArray.forEach(string => {
      numberArray.push(Number(string));
    });
    numberArray.sort((a, b) => a - b);

    return numberArray;
  }
}

export default Utils;
