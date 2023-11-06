import Converter from '../../src/utils/Converter.js';

describe('Converter', () => {
  test('입력 문자열을 구분자로 나누어야 한다.', () => {
    // given
    const input = '1,2,3,4,5,6';
    const delimiter = ',';

    // when
    // then
    expect(Converter.split(input, delimiter)).toEqual(['1', '2', '3', '4', '5', '6']);
  });

  test('다른 구분자도 처리할 수 있어야 한다.', () => {
    // given
    const input = 'apple;banana;cherry';
    const delimiter = ';';

    // when
    // then
    expect(Converter.split(input, delimiter)).toEqual(['apple', 'banana', 'cherry']);
  });

  test('빈 입력 문자열도 처리할 수 있어야 한다.', () => {
    // given
    const input = '';
    const delimiter = ',';

    // when
    // then
    expect(Converter.split(input, delimiter)).toEqual(['']);
  });
});
