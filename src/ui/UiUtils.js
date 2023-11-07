import { WINNIG_PROFITS } from "../Constants";
class UiUtils {
  static splitComma(input) {
    return input.split(",");
  }

  static sortLottoNumbers(arr) {
    // 각 행을 오름차순으로 정렬
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }
  
  static winningStatusForUser(matchingCount, winnigStatus) {
    const WINNIG_PROFIT = WINNIG_PROFITS[matchingCount].toLocaleString();
    if (matchingCount === "bonus") {
      return `5개 일치, 보너스 볼 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
    }
    return `${matchingCount}개 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
  }

}
export default UiUtils;
