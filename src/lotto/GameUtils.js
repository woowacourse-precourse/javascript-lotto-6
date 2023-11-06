class GameUtils {
  static splitComma(input) {
    return input.split(",");
  }
  static sortLottoNumbers(arr) {
    // 각 행을 오름차순으로 정렬
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }
  static removeItemsWithNumericKeysLessThanThree(obj) {
    let result = {...obj}
    for (const key in result) {
        if (typeof Number(key) === 'number' && Number(key) < 3) {
            delete result[key];
        }
    }
    return result;

}
}
export default GameUtils;
