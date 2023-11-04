/* eslint-disable no-new */
import { Random } from '@woowacourse/mission-utils';
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
    lottoCompany.bonusNumber = bonusNumber;

    // then
    expect(lottoCompany.bonusNumber).toBe(bonusNumber);
  });

  test('보너스 번호 일치 여부를 알 수 있다.', () => {
    // given
    lottoCompany.bonusNumber = 10;
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 10]);

    // when
    const match1 = lottoCompany.matchBonus(lotto1);
    const match2 = lottoCompany.matchBonus(lotto2);

    // then
    expect(match1).toBe(false);
    expect(match2).toBe(true);
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
    lottoCompany.bonusNumber = 10;
    const lottos = [
      new Lotto([1, 2, 3, 4, 8, 9]), // 4개 일치
      new Lotto([1, 2, 3, 4, 5, 10]), // 3개 일치
    ];

    // when
    const statistics = lottoCompany.calculateStatistics(lottos);

    // then
    expect(statistics).toEqual({
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 1,
      5: 0,
      6: 0,
      bonus: 1,
    });
  });

  test('로또 객체 배열이 주어지면, 수익률을 계산할 수 있다.', () => {
    // given
    jest
      .spyOn(Random, 'pickUniqueNumbersInRange')
      .mockReturnValue([1, 2, 3, 7, 8, 9]);
    lottoCompany.numbers = [1, 2, 3, 4, 5, 6];
    const lottos = lottoCompany.issueLottos(2);

    // when
    const rateOfReturn = lottoCompany.calculateRateOfReturn(lottos);

    // then
    expect(rateOfReturn).toBe(500);
  });
});
