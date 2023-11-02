import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  static async play() {
    this.makeLottoNum();
    this.getWinningNum();
  }

  static makeLottoNum() {
    const NEED_NUM = 6;
    const myLottoNum = [];
    while (myLottoNum.length < NEED_NUM) {
      const pick = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!myLottoNum.includes(pick)) {
        myLottoNum.push(pick); // 일단 이 배열은 정렬 안되어 있음. 하지만 숫자상태
      }
    }
    MissionUtils.Console.print(myLottoNum.sort((a, b) => a - b)); // 정렬되었지만 문자열상태 다른함수로 뺄거임.

    return myLottoNum;
  }

  static async getWinningNum() {
    const getNum =
      await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const winningNum = String(getNum).split(','); // 문자열 형태
    Console.print(winningNum); // 지워야 함

    return winningNum;
  }
}

export default App;

App.play();
