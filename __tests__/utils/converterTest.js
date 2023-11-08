import { ERROR_MESSAGE } from '../../src/constants/message';
import converter from '../../src/utils/converter';

describe('numbericStringToNumber 함수 테스트', () => {
  it('숫자로 구성된 문자열을 숫자로 형변환하여 반환한다.', () => {
    const input = '-1';

    const result = converter.numbericStringToNumber(input);
    
    expect(result).toBe(-1);
  });

  it('숫자로 구성된 문자열이 아닌 경우 예외가 발생한다.', () => {
    const input = 'hello';

    expect(() => {
      const result = converter.numbericStringToNumber(input);
      return result;
    }).toThrow(ERROR_MESSAGE.DEFAULT);
  });

  it('공백으로 구성된 문자열인 경우 예외가 발생한다.', () => {
    const input = ' ';
    
    expect(() => {
      const result = converter.numbericStringToNumber(input);
      return result;
    }).toThrow(ERROR_MESSAGE.DEFAULT);
  });

  it('빈 문자열인 경우 예외가 발생한다.', () => {
    const input = '';
    
    expect(() => {
      const result = converter.numbericStringToNumber(input);
      return result;
    }).toThrow(ERROR_MESSAGE.DEFAULT);
  });

  it('문자열이 아닌 경우는 모두 예외가 발생한다.', () => {
    const input = 1000;
    
    expect(() => {
      const result = converter.numbericStringToNumber(input);
      return result;
    }).toThrow(ERROR_MESSAGE.DEFAULT);
  });
});

describe('numberToDisplayFormatString 함수 테스트', () => {
  it('숫자를 보여주기 위해 정리된 형식의 문자열로 변환한다.', () => {
    const input = 10000;

    const result = converter.numberToDisplayFormatString(input);
    
    expect(result).toBe('10,000');
  });

  it('음수도 보여주기 위해 정리된 형식의 문자열로 변환한다.', () => {
    const input = -110000;

    const result = converter.numberToDisplayFormatString(input);
    
    expect(result).toBe('-110,000');
  });

  it('숫자가 아닌 입력인 경우 예외가 발생한다.', () => {
    const input = '100';

    expect(() => {
      const result = converter.numberToDisplayFormatString(input);
      return result;
    }).toThrow(ERROR_MESSAGE.DEFAULT);
  });
});
