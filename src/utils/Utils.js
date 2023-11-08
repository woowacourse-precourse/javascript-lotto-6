import SETTINGS from '../constants/Settings.js';

class Utils {
  /**
   * 문자열 형식의 input을 숫자 배열로 반환
   * @param {string} string 문자열 ('1,2,3,4,5,6')
   * @returns {number[]} 숫자 배열 ([1,2,3,4,5,6])
   */
  static stringToNumberArray(string) {
    const inputArray = string.split(',');
    const numberArray = [];

    inputArray.forEach(input => {
      numberArray.push(Number(input));
    });
    numberArray.sort((a, b) => a - b);

    return numberArray;
  }

  /**
   * 문자열 형식의 input을 숫자 배열로 반환
   * @param {string} string 문자열 ('[1, 2, 3, 4, 5, 6]')
   * @returns {number[]} 숫자 배열 ([1,2,3,4,5,6])
   */
  static stringArrayToNumberArray(string) {
    const inputArray = string.split(',');
    const numberArray = [];

    inputArray.forEach(input => {
      numberArray.push(Number(input));
    });
    numberArray.sort((a, b) => a - b);

    return numberArray;
  }

  /**
   * 숫자 배열 형식의 input을 문자열로 반환
   * @param {number[]} array 숫자 배열 ([1,2,3,4,5,6])
   * @returns {string} 문자열 ('1, 2, 3, 4, 5, 6')
   */
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
