/* eslint-disable no-new */
import Lotto from '../src/Models/Lotto';
import LottoCompany from '../src/Models/LottoCompany';

describe('LottoCompany 객체 테스트', () => {
  let lottoCompany;

  beforeEach(() => {
    lottoCompany = new LottoCompany();
  });

  test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
    // given
    const input = [1, 2, 3, 4, 5, 6, 7];

    // when
    const setNumbers = () => {
      lottoCompany.numbers = input;
    };
    // then
    expect(setNumbers).toThrow('[ERROR]');
  });

  test('당첨 번호 6개를 통해 생성하면, 멤버 numbers가 정상적으로 생성된다.', () => {
    const input = [1, 2, 3, 4, 5, 6];
    lottoCompany.numbers = input;
    expect(lottoCompany.numbers).toEqual(input);
  });

  test('보너스 번호를 추가할 수 있다.', () => {
    // given
    const bonusNumber = 10;

    // when
    lottoCompany.numbers = [1, 2, 3, 4, 5, 6];
    lottoCompany.pushBonus(bonusNumber);

    // then
    expect(lottoCompany.numbers).toEqual([1, 2, 3, 4, 5, 6, 10]);
  });

  test('보너스 번호를 두 번이상 추가할 경우 예외처리한다.', () => {
    // given
    lottoCompany.numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber1 = 10;
    const bonusNumber2 = 20;

    // when
    const pushBonusTwice = () => {
      lottoCompany.pushBonus(bonusNumber1);
      lottoCompany.pushBonus(bonusNumber2);
    };

    // then
    expect(pushBonusTwice).toThrow('[ERROR]');
  });

  test('로또 객체를 n개 발행할 수 있다.', () => {
    // given
    const numOfLottos = 2;
    const anyNumbers = [1, 2, 3, 4, 5, 6];

    // when
    const lottos = lottoCompany.issueLottos(numOfLottos);

    // then
    expect(lottos).toEqual([new Lotto(anyNumbers), new Lotto(anyNumbers)]);
    expect(lottos).toHaveLength(2);
  });

  test('numbers 멤버에는 1~45 사이의 숫자를 넣지않으면 예외가 발생한다.', () => {
    // given
    const input1 = 0;
    const input2 = 46;
    const inputList = [1, 2, 3, 4, 5, 46];

    // when
    const pushSmallNum = () => lottoCompany.pushBonus(input1);
    const pushLargelNum = () => lottoCompany.pushBonus(input2);
    const setNumbers = () => {
      lottoCompany.numbers = inputList;
    };
    // then
    expect(pushSmallNum).toThrow('[ERROR]');
    expect(pushLargelNum).toThrow('[ERROR]');
    expect(setNumbers).toThrow('[ERROR]');
  });

  test('match 메서드를 호출하면, 로또 번호의 일치 개수가 반환된다.', () => {
    // given
    lottoCompany.numbers = [1, 2, 3, 7, 8, 9];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const matchedNum = lottoCompany.match(lotto);

    // then
    expect(matchedNum).toBe(3);
  });

  test('로또 객체 배열이 주어지면, 통계를 계산할 수 있다.', () => {
    // given
    lottoCompany.numbers = [1, 2, 3, 4, 5, 6];
    const lottos = [
      new Lotto([1, 2, 3, 4, 8, 9]), // 4개 일치
      new Lotto([1, 2, 3, 10, 11, 12]), // 3개 일치
    ];

    // when
    const statics = lottoCompany.calculateStatics(lottos);

    // then
    expect(statics).toEqual({
      0: 0,
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 0,
      6: 0,
    });
  });

  test('로또 객체 배열이 주어지면, 수익률을 계산할 수 있다.', () => {
    // given
    lottoCompany.setNumbers([1, 2, 3, 4, 5, 6]);
    const lottos = [
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 10, 11, 12]),
    ];

    // when
    const rateOfReturn = lottoCompany.calculateRateOfReturn(lottos);

    // then
    expect(rateOfReturn).toBe(2750);
  });
});
