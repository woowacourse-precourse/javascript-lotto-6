import {MissionUtils} from "@woowacourse/mission-utils";

class Outputs {
  #lottoList;
  #score;
  #message = {
    three: '3개 일치 (5,000원) - ',
    four: '4개 일치 (50,000원) - ',
    five: '5개 일치 (1,500,000원) - ',
    bonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    six: '6개 일치 (2,000,000,000원) - ',
  };

  printBlankLine() {
    MissionUtils.Console.print('');
  }

  printLottoList(lottoList) {
    this.#lottoList = lottoList;
    const leng = this.#lottoList.length;

    MissionUtils.Console.print(`${leng}개를 구매했습니다.`);

    for (let i = 0; i < leng; i += 1) {
      MissionUtils.Console.print(this.#lottoList[i].numbers.sort((a, b) => a - b));
    }

    MissionUtils.Console.print('');
  }

  printScore(score) {
    this.#score = score;

    MissionUtils.Console.print('당첨 통계\n---');

    const data = ['three', 'four', 'five', 'bonus', 'six'];

    for (let i = 0; i < 5; i += 1) {
      MissionUtils.Console.print(`${this.#message[data[i]]}${this.#score[data[i]]}개`);
    }
  }
}

export default Outputs;
