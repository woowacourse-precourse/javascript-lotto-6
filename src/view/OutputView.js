import {Console} from "@woowacourse/mission-utils";
import {LottosDto} from "../domain/dto/LottosDto.js";

export class OutputView {
  /**
   *
   * @param {LottosDto} lottosDto
   * @description 구매한 로또 출력
   * @return {void}
   */
  printLottosDto(lottosDto) {
    this.#printLottsLenght(lottosDto.lottos.length); //배열의 길이로 몇개의 로또인지 구함
    lottosDto.lottos.forEach((lottoDto) => {
      this.#printLottoDto(lottoDto);
    });
  }

  /**
   *
   * @param {LottoDto} lottoDto
   * @return {void}`
   * @description 앞뒤 공백 제거를 위해 함수 하나를 더 생성
   */
  #printLottoDto(lottoDto) {
    //[1,2,3,4,5,6] -> '1, 2, 3, 4, 5, 6'
    const lottoNumberString = lottoDto.numbers.join(", ");
    // -> '[1, 2, 3, 4, 5, 6]'
    Console.print(`[${lottoNumberString}]`);
  }

  /**
   *
   * @param {number} length
   * @description 구입한 로또의 개수 출력
   * @return {void}
   */

  #printLottsLenght(length) {
    Console.print(`\n${length}개를 구매했습니다.`);
  }

  /**
   * @param {DrawResultDto} drawResultDto
   * @description 당첨 통계 출력
   *
   * 정규 표현식을 사용해 두글자 이상이면 지워버림(들여쓰기 삭제)
   * @return {void}
   */
  printDrawResult(drawResultDto) {
    Console.print(
      `
            당첨 통계
            ---
            3개 일치 (5,000원) - ${drawResultDto.fifthRank}개
            4개 일치 (50,000원) - ${drawResultDto.forthRank}개
            5개 일치 (1,500,000원) - ${drawResultDto.thirdRank}개
            5개 일치, 보너스 볼 일치 (30,000,000원) - ${drawResultDto.secondRank}개
            6개 일치 (2,000,000,000원) - ${drawResultDto.firstRank}개
            총 수익률은 ${drawResultDto.earningRate}%입니다.`.replaceAll(
        / {2,}/g,
        ""
      )
    );
  }
}
