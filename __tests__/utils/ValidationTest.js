import { ERROR_MESSAGE, SETTING } from '../../src/constants';
import { 
  isDivideMinCost, 
  isLottoNumberRange,
  isNaturalNumber,
  isNumber,
  isUnique,
  isUniqueBonus,
  hasSixValues,
} from '../../src/utils/validation';

const { 
  size,
  lotto_cost,
  min_lotto_number, 
  max_lotto_number
} = SETTING;

const {
  not_lotto_cost,
  not_natural_number,
  not_number,
  not_range,
  not_six_numbers,
  not_unique,
  not_unique_bonus,
} = ERROR_MESSAGE;

describe('validation 테스트', () => {
  test('숫자가 아니라면 예외가 발생해야 한다.', () => {
    const input = 'abc10';
    expect(() => {
      isNumber(input);
    }).toThrow(not_number);
  });

  test.each([
    -10, 
    1.2,
    0,
  ])('자연수가 아니라면 예외가 발생해야 한다.', (value) => {
    expect(() => {
      isNaturalNumber(value);
    }).toThrow(not_natural_number);
  });
  
  test(`${lotto_cost} 단위가 아니라면 예외가 발생해야 한다.`, () => {
    const input = `${lotto_cost + 1}`;
    expect(() => {
      isDivideMinCost(input);
    }).toThrow(not_lotto_cost);
  });

  test(`${size}개 요소를 갖고 있지 않다면 예외가 발생해야 한다.`, () => {
    const arr = Array.from({length: size - 1}, (_, i) => i + 1);
    expect(() => {
      hasSixValues(arr);
    }).toThrow(not_six_numbers);
  });

  test.each([
    min_lotto_number - 2,
    max_lotto_number + 2,
  ])(`${min_lotto_number}이상 ${max_lotto_number}이하의 숫자가 아니라면 예외가 발생해야 한다.`, (value) => {
    expect(() => {
      isLottoNumberRange(value);
    }).toThrow(not_range);
  });

  test('중복된 수가 있다면 예외가 발생해야 한다.', () => {
    const arr = [1, 2, 2, 4, 5, 6];
    expect(() => {
      isUnique(arr);
    }).toThrow(not_unique);
  });

  test('배열에 있는 숫자가 있다면 예외가 발생해야 한다.', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const num = 1;
    expect(() => {
      isUniqueBonus(arr, num);
    }).toThrow(not_unique_bonus);
  });
});