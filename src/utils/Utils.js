import SETTINGS from '../constants/Settings.js';

class Utils {
  static stringToNumberArray(array) {
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

  static getReturnRate(returns, balance) {
    const returnRate = (returns / balance * 100).toFixed(SETTINGS.returnRateDecimal)

    return returnRate
  }
}

export default Utils;
