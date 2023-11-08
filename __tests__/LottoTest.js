import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 내가 작성한 test code
  test('당첨 번호 2개가 1~45 사이 숫자가 아닐 때 예외를 발생한다.?', () => {
    const testNumbers = [3, 56, 4, 7, 9, 89];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('당첨 번호를 입력하지 않으면 오류를 발생할까 ?', () => {
    const testNumbers = [];
    expect(() => {
      new Lotto(testNumbers);
    }).toThrow('[ERROR] 당첨 번호를 입력하세요.');
  });
});

describe('method test : countEqualNumbers()', () => {
  test('두 배열을 인수로 보냈을 때 같은 요소의 개수를 구할 수 있는가 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(testArray);
    const randomNumbers = [1, 5, 8, 6, 3, 2];
    const userLottoNumbers = [2, 6, 4, 13, 42, 1];
    const equalNumber = lotto.countEqualNumbers(
      randomNumbers,
      userLottoNumbers,
    );
    expect(equalNumber).toBe(3);
  });
});

describe('method test : compareBonusNumber()', () => {
  test('로또 번호와 보너스 번호가 같은지 비교할 수 있는가 ?', () => {
    const randomNumbers = [2, 4, 6, 8, 12, 14];
    const bonusNumber = 7;
    const lotto = new Lotto(randomNumbers);
    const equal = lotto.compareBonusNumber(randomNumbers, bonusNumber);
    expect(equal).toBe(false);
  });
});

describe('method test : compareBonusNumber()', () => {
  test('로또 번호와 보너스 번호가 같은지 비교할 수 있는가 ?', () => {
    const randomNumbers = [2, 4, 6, 8, 12, 14];
    const bonusNumber = 8;
    const lotto = new Lotto(randomNumbers);
    const equal = lotto.compareBonusNumber(randomNumbers, bonusNumber);
    expect(equal).toBe(true);
  });
});

describe('method test : checkRange()', () => {
  test('1~45 사이가 아닌 숫자들만 뽑은 배열의 length를 구할 수 있는가 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const randomNumbers = [1, 67, 4, 58, 42, 35];
    const lotto = new Lotto(testArray);
    const length = lotto.checkRange(randomNumbers);
    expect(length).toBe(2);
  });
});

describe('method test : getLottoResult()', () => {
  test('로또 결과를 배열에 오류 없이 담을 수 있을까 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const equalNumber = 5;
    const bonusResult = true;
    const lotto = new Lotto(testArray);
    const ResultArray = lotto.getLottoResult(equalNumber, bonusResult);
    expect(ResultArray).toEqual([0, 0, 0, 1, 0]);
  });
});

describe('method test : checkBonusNumber()', () => {
  test('만약 5개가 일치하고 BonusNumber이 일치하지 않으면 false를 반환하나 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(testArray);
    const randomNumbers = [2, 4, 6, 8, 12, 14];
    const bonusNumber = 7;
    const equalNumber = 5;
    const bonusResult = lotto.checkBonusNumber(
      randomNumbers,
      equalNumber,
      bonusNumber,
    );
    expect(bonusResult).toBe(false);
  });
});

describe('method test : getLottoRate()', () => {
  test('수익률을 소수점을 반올림하여 정확히 구할 수 있는가 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(testArray);
    const lottoResult = [0, 1, 0, 0, 0];
    const lottoPrice = 60000;
    const testRate = lotto.getLottoRate(lottoResult, lottoPrice);
    expect(testRate).toBe(83.3);
  });
});

describe('method test : compareLottoNumbers()', () => {
  test('로또 결과를 담은 배열을 잘 반환할 수 있는가 ?', () => {
    const testArray = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(testArray);
    const lottoRandomNumber = [[1, 2, 3, 4, 5, 6]];
    const userLottoNumber = [1, 2, 4, 5, 16, 9];
    const userBonusNumber = 13;
    const lottoResult = lotto.compareLottoNumbers(
      lottoRandomNumber,
      userLottoNumber,
      userBonusNumber,
    );
    expect(lottoResult).toEqual([0, 1, 0, 0, 0]);
  });
});
