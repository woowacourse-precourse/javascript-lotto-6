import Parser from '../../src/parser/Parser.js';

describe('형변환을 위한 Parser 테스트', () => {
  test('숫자를 잘 바꿔주는지 테스트', () => {
    const parsedNumber = Parser.parseInt('77');

    expect(parsedNumber).toEqual(77);
  });

  test('로또 배열 입력을 받아 숫자 배열 변환 테스트', () => {
    const input = '1,2,3,4,5,6';
    const parsedLotto = Parser.parseLotto(input);
    const decapsulatedLotto = parsedLotto.map((lottoNum) => lottoNum.get());

    expect(decapsulatedLotto).toEqual([1, 2, 3, 4, 5, 6]); // 돈 범위 오류를 명확하게 체크
  });

  test('소수점 2자리까지 잘리는지 테스트', () => {
    const num = 3.14159;
    const parsedNum = Parser.parseToFixed(num, 2);

    expect(parsedNum).toEqual(3.14); // 돈 범위 오류를 명확하게 체크
  });

  test('정수가 들어왔을 때 소수점 없이 정수가 출력되는지 테스트', () => {
    const num = 3;
    const parsedNum = Parser.parseToFixed(num, 2);

    expect(parsedNum).toEqual(3); // 돈 범위 오류를 명확하게 체크
  });
});
