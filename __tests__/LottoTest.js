import { Lotto, CashCount, LottoMachine, LottoGame } from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
});

//CashCount 클래스 테스트
describe('cashcount 클래스 테스트', () => {
  test('1000원 나누어 떨어지나', () => {
    expect(() => {
      new CashCount(123);
    }).toThrow('[ERROR]');
  });
  test('숫자인가', () => {
    expect(() => {
      new CashCount(NaN);
    }).toThrow('[ERROR]');
  });
});

describe('LottoMachine 클래스 테스트', () => {
  test('로또를 구매하고 배열로 반환한다.', () => {
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.buyLottos(10000);

    expect(Array.isArray(lottos)).toBe(true);
  });

  test('구매한 로또 개수가 올바르게 출력된다.', () => {
    const lottoMachine = new LottoMachine();
    const cash = 5000;
    const cashCount = new CashCount(cash).count;

    const consoleMock = jest.spyOn(MissionUtils.Console, 'print');
    lottoMachine.buyLottos(cash);

    expect(consoleMock).toHaveBeenCalledWith(`${cashCount}개를 구매했습니다.`);
  });

  test('구매한 로또의 개수와 반환된 배열의 길이가 일치한다.', () => {
    const lottoMachine = new LottoMachine();
    const cash = 10000;
    const cashCount = new CashCount(cash).count;

    const lottos = lottoMachine.buyLottos(cash);

    expect(lottos.length).toBe(cashCount);
  });
});
