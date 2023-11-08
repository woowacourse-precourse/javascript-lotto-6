import GenerateLotto from '../src/domain/GenerateLotto.js';
import { MAGIC_NUMBER } from '../src/constants/MagicNumber.js';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe('GenerateLotto 함수 테스트', () => {
  beforeAll(() => {
    Random.pickUniqueNumbersInRange.mockImplementation((min, max, count) =>
      Array.from({ length: count }, (_, index) => min + index)
    );
  });

  test('로또 번호가 올바르게 생성되는지 확인', () => {
    const count = 5;
    const lottoNumbers = GenerateLotto(count);
    expect(lottoNumbers.length).toBe(count);
    lottoNumbers.forEach((numbers) => {
      expect(numbers.length).toBe(MAGIC_NUMBER.lottoNumberCount);
      expect(numbers).toBeInstanceOf(Array);
      expect(new Set(numbers).size).toBe(numbers.length);
      expect(numbers).toEqual(numbers.slice().sort((a, b) => a - b));
      numbers.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(MAGIC_NUMBER.lottoNumberMin);
        expect(number).toBeLessThanOrEqual(MAGIC_NUMBER.lottoNumberMax);
      });
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
