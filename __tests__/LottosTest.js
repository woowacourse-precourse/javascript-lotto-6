import Lottos from '../src/model/Lottos';

describe('Lottos 클래스 테스트', () => {
  test('Lottos 생성시 잘못된 입력 테스트', () => {
    const tryExample = ['1', '2500', '4684', '0'];

    tryExample.forEach((ex) => {
      expect(() => new Lottos(ex)).toThrow('[ERROR]');
    });
  });

  test('로또 번호 순서 정렬 테스트', () => {
    const randomNumbers = [20, 6, 8, 16, 14, 43];
    const orderedNumbers = [6, 8, 14, 16, 20, 43];

    jest
      .spyOn(Lottos.prototype, 'generateNumbers')
      .mockReturnValueOnce(randomNumbers);
    const lottos = new Lottos('1000');
    expect(lottos.getLottos()[0].getNumbers()).toEqual(orderedNumbers);

    jest.restoreAllMocks();
  });

  test('구입 금액의 단위는 1000단위다.', () => {
    const amounts = ['2500', '3600'];
    amounts.forEach((amount) => {
      expect(() => new Lottos(amount)).toThrow('[ERROR]');
    });
  });

  test('공백 입력시 에러가 발생한다.', () => {
    expect(() => new Lottos('')).toThrow('[ERROR]');
  });
});
