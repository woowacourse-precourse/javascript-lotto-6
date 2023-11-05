import LottoDrawChecker from '../../src/domains/LottoDrawChecker';

const winningNumbers = [1, 2, 3, 4, 5, 6];
const bonusNumber = 7;
let lottoDrawChecker;

beforeEach(() => {
  lottoDrawChecker = new LottoDrawChecker(winningNumbers, bonusNumber);
});

describe('method : matchingNumberCount test', () => {
  test('일치하는 숫자 3개가 주어졌을때 3을 반환해야 한다.', () => {
    // given
    const lotto = [1, 2, 3, 43, 44, 45];

    // when
    const matchingNumberCount = lottoDrawChecker.matchingNumberCount(lotto);

    //then
    expect(matchingNumberCount).toBe(3);
  });
});

describe('method : haveBonusNumber test', () => {
  test('bonus number가 lotto에 있을때 true를 반환해야 한다.', () => {
    // given
    const lotto = [1, 2, 3, bonusNumber, 44, 45];

    // when
    const haveBonusNumber = lottoDrawChecker.haveBonusNumber(lotto);

    // then
    expect(haveBonusNumber).toBe(true);
  });

  test('bonus number가 lotto에 없을때 false를 반환해야 한다.', () => {
    // given
    const lotto = [1, 2, 3, 43, 44, 45];

    // when
    const haveBonusNumber = lottoDrawChecker.haveBonusNumber(lotto);

    // then
    expect(haveBonusNumber).toBe(false);
  });
});
