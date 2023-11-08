import roundAndFormatWithComma from '../src/util/roundAndFormatWithComma.js';

describe('반올림 및 1000단위 콤마 동작 테스트', () => {
  test('소수점이 없고, 1000보다 작은 경우 : 0', () => {
    //given
    const input = 0;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('0.0');
  });

  test('소수점이 없고, 1000보다 큰 경우 : 1000', () => {
    //given
    const input = 1000;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('1,000.0');
  });

  test('소수점이 있지만 반올림 되지 않으면서 1000보다 작은 경우 : 120.54', () => {
    //given
    const input = 120.54;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('120.5');
  });

  test('소수점이 있지만 반올림 되지 않으면서 1000보다 큰 경우 : 12025.54', () => {
    //given
    const input = 12025.54;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('12,025.5');
  });

  test('소수점이 있지만 반올림 되면서 1000보다 작은 경우 : 120.551', () => {
    //given
    const input = 120.551;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('120.6');
  });

  test('소수점이 있지만 반올림 되면서 1000보다 큰 경우 : 1250.551', () => {
    //given
    const input = 1250.551;

    //when
    const result = roundAndFormatWithComma(input, 1);

    //then
    expect(result).toBe('1,250.6');
  });
});
