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

  static numberArrayToString(array) {
    let stringArray = [];
    
    array.forEach((number) => {
      stringArray.push(number.toString());
    });
    const result = `[${stringArray.join(', ')}]`;

    return result;
  }
}

export default Utils;
