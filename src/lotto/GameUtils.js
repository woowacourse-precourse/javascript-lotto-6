class GameUtils {
  static splitComma(input) {
    return input.split(",");
  }
  static sortLottoNumbers(arr) {
    // 각 행을 오름차순으로 정렬
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }
}
export default GameUtils;
