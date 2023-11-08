import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

// - 로또 당첨 확인 기능
// - 모든 로또 당첨 확인 기능
// - 로또 수익률 계산 기능

describe('로또 발행 테스트', () => {
  test('로또 하나의 금액은 1,000원이며 입력 받은 금액에 맞게 로또를 발행해야 한다.', () => {
    
    const app = new App();

    expect(app.issueLotto(3).length).toEqual(3);
  });
});

describe('로또 당첨 확인 테스트', () => {
  test('사용자가 구매한 1개의 로또와 당첨 번호, 보너스 번호를 비교하여 결과를 확인한다. (5등일 경우)', () => {
    const myLotto = new Lotto([1,2,3,4,5,6]);
    const lottoWinningNumber = [1,2,3,7,8,9];
    const lottoBonusNumber = 10;
    const result = {
      theNumberOfMatches: 3,
      haveBonusNumber: false
    }

    const app = new App();

    expect(app.compareToLottoNumbers(myLotto, lottoWinningNumber, lottoBonusNumber)).toEqual(result);
  });

  test('사용자가 구매한 1개의 로또와 당첨 번호, 보너스 번호를 비교하여 결과를 확인한다. (2등일 경우)', () => {
    const myLotto = new Lotto([1,2,3,4,5,6]);
    const lottoWinningNumber = [1,2,3,4,5,30];
    const lottoBonusNumber = 6;
    const result = {
      theNumberOfMatches: 5,
      haveBonusNumber: true
    }

    const app = new App();

    expect(app.compareToLottoNumbers(myLotto, lottoWinningNumber, lottoBonusNumber)).toEqual(result);
  });
});