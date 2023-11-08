import Random from '../src/lottogame/MakeLottoNumber.js';

describe('MakeLottoNumber 클래스 테스트', () => {
  test('랜덤 생성된 로또 번호가 6개 인지 확인한다.', () => {
    const numbers = Random.makeNumber();

    expect(numbers.length).toEqual(6);
  });

  test('랜덤 생성된 로또 번호가 1에서 45사이의 숫자인지 확인한다.', () => {
    const numbers = Random.makeNumber();
    const isNumberWithinRange = numbers.every((num) => num >= 1 && num <= 45);

    expect(isNumberWithinRange).toBeTruthy();
  });

  test('생성된 로또 번호가 오름차순으로 정렬되어 있는지 확인한다.', () => {
    const numbers = Random.makeNumber();
    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    expect(numbers).toEqual(sortedNumbers);
  });
});
