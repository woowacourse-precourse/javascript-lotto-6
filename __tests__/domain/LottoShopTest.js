import LottoShop from '../../src/domain/LottoShop';
import { ERROR_MESSAGE, SETTING } from '../../src/constants';

const {
  not_lotto_cost,
  not_natural_number,
  not_number,
  not_range,
  not_six_numbers,
  not_unique,
  not_unique_bonus,
} = ERROR_MESSAGE;

const { 
  size,
  lotto_cost,
  min_lotto_number, 
  max_lotto_number
} = SETTING;

describe('금액 유효성 검사', () => {
  let lottoShop = new LottoShop();

  test('숫자를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const cost = '1000a';
    expect(() => {
      lottoShop.income = cost;
    }).toThrow(not_number);
  })

  test('자연수를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const cost = '-2000';
    expect(() => {
      lottoShop.income = cost;
    }).toThrow(not_natural_number);
  });

  test(`${lotto_cost}원 단위로 입력 받지 않았다면 예외가 발생해야 한다.`, () => {
    const cost = `${lotto_cost + 1}`;
    expect(() => {
      lottoShop.income = cost;
    }).toThrow(not_lotto_cost);
  });

  test('금액을 올바르게 입력 받았다면 income을 정상적으로 설정해야 한다.', () => {
    const cost = `${lotto_cost * 2}`;
    lottoShop.income = cost;
    expect(lottoShop.income).toBe(cost);
  });
});

describe('당첨번호 유효성 검사', () => {
  let lottoShop = new LottoShop();

  test(`${size}개의 요소를 입력 받지 않았다면 예외가 발생해야 한다.`, () => {
    const prizeNumber = Array.from({length: size - 1}, (_, i) => i + 1);
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).toThrow(not_six_numbers);
  });

  test('숫자를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const prizeNumber = ['a', 'b', 'c', 'd', 'e', 'f'];
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).toThrow(not_number);
  });

  test('자연수를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const prizeNumber = [1, 1.1, 1.2, 1.3, 1.4, 1.5];
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).toThrow(not_natural_number);
  });

  test(`${min_lotto_number} 이상 ${max_lotto_number} 이하의 숫자를 입력 받지 않았다면 예외가 발생해야 한다.`, () => {
    const prizeNumber = [1, 4, 6, 13, 23, max_lotto_number + 2];
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).toThrow(not_range);
  });

  test('중복된 번호가 있다면 예외가 발생해야 한다.', () => {
    const prizeNumber = [1, 1, 2, 3, 4, 5];
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).toThrow(not_unique);
  });

  test('당첨번호를 올바르게 입력 받았다면 prizeNumber을 정상적으로 설정해야 한다.', () => {
    const prizeNumber = [1, 2, 3, 4, 5, 6];
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
    }).not.toThrow();
    expect(lottoShop.prizeNumber).toStrictEqual(prizeNumber);
  })
});

describe('보너스 번호 유효성 검사', () => {
  let lottoShop = new LottoShop();

  test('숫자를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const bonusNumber = 'number';
    expect(() => {
      lottoShop.bonusNumber = bonusNumber;
    }).toThrow(not_number);
  });

  test('자연수를 입력 받지 않았다면 예외가 발생해야 한다.', () => {
    const bonusNumber = '-10.5';
    expect(() => {
      lottoShop.bonusNumber = bonusNumber;
    }).toThrow(not_natural_number);
  });

  test(`${min_lotto_number} 이상 ${max_lotto_number} 이하의 숫자를 입력 받지 않았다면 예외가 발생해야 한다.`, () => {
    const bonusNumber = max_lotto_number + 1;
    expect(() => {
      lottoShop.bonusNumber = bonusNumber;
    }).toThrow(not_range);
  });

  test('당첨번호에 존재하는 번호를 입력했다면 예외가 발생해야 한다.', () => {
    const prizeNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 1;
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
      lottoShop.bonusNumber = bonusNumber;
    }).toThrow(not_unique_bonus);
  });

  test('보너스번호를 올바르게 입력 받았다면 bonusNumber을 정상적으로 설정해야 한다.', () => {
    const prizeNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    expect(() => {
      lottoShop.prizeNumber = prizeNumber;
      lottoShop.bonusNumber = bonusNumber;
    }).not.toThrow();
    expect(lottoShop.bonusNumber).toBe(bonusNumber);
  })
});