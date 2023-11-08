import Numbers from '../../src/raffle/Numbers.js';
import {
  LottoDuplicatedError,
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
} from '../../src/error/CustomErrors.js';

describe('raffle/numbers : 생성 numbers 유효성 검사 테스트', () => {
  test.each([
    '0,1,2,3,4,5',
    '1,2,3,4,5,1024',
    '45,46,47,48,49,50',
    '100,1,200,2,300,3',
  ])(
    '당첨 번호는 1 이상 45 이하여야 한다. 그렇지 않으면 LottoRangeError를 반환한다.',
    input => {
      expect(() => new Numbers(input)).toThrowError(LottoRangeError);
    },
  );

  test.each(['일,2,3,4,5,6', 'a,b,c,d,e,f', '-1,0,3.14,5,6,7'])(
    '당첨 번호는 자연수로 이루어져야 한다. 그렇지 않으면 LottoTypeError를 반환한다.',
    input => {
      expect(() => new Numbers(input)).toThrowError(LottoTypeError);
    },
  );

  test.each(['1,2,3', '1', '1,2,3,4,5,6,7'])(
    '당첨 번호는 6개여야 한다. 그렇지 않으면 LottoLengthError를 반환한다.',
    input => {
      expect(() => new Numbers(input)).toThrowError(LottoLengthError);
    },
  );

  test.each(['1,1,3,4,5,6', '30,1,3,2,30,40'])(
    '당첨 번호에 중복되는 숫자는 없어야 한다. 그렇지 않으면 LottoDuplicatedError를 반환한다.',
    input => {
      expect(() => new Numbers(input)).toThrowError(LottoDuplicatedError);
    },
  );
});

describe('raffle/numbers : numbers 반환값 테스트', () => {
  test.each('numbers 생성값과 get 반환값이 같아야 한다.', () => {
    const numbers = new Numbers('1,2,3,4,5,6');
    const result = numbers.get();

    expect(result).toEqual('1,2,3,4,5,6');
  });
});
