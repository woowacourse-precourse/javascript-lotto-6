import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  static async play() {
    this.makeLottoNum();

    await this.getBonusNum();
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

    return winningNum; // 문자열 상태
  }

  // 입력 값이 숫자인지 유효성도 같이 확인하면서 문자열을 숫자로 변환.
  static async stringToNum() {
    const getWinningNum = await this.getWinningNum();
    const numTypeOfWin = getWinningNum.map(Number);
    if (numTypeOfWin.includes(NaN)) {
      throw new Error(`[ERROR] 입력 값은 숫자여야 합니다.`);
    }
    Console.print(numTypeOfWin); // 지워야 함
    return numTypeOfWin;
  }

  // 보너스 넘버
  static async getBonusNum() {
    const winnigNumArry = await this.stringToNum();
    const bonusNum =
      await MissionUtils.Console.readLineAsync(
        '보너스 번호를 입력해 주세요.\n',
      );
    if (winnigNumArry.includes(Number(bonusNum))) {
      throw new Error(`[ERRPR] 보너스 숫자는 중복될 수 없습니다.`);
    }
    Console.print(bonusNum); // 지워야 함
    return bonusNum;
  }
}

export default App;

App.play();
