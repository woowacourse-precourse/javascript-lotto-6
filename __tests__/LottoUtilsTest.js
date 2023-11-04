import * as utils from '../src/LottoUtils';
import { LOTTO_LENGTH } from '../src/constants';
describe('로또 게임 유틸 함수 테스트', () => {
  test('split 메서드로 주어진 값을 구분', () => {
    const input = '1,2,3,4,5,6';
    const result = input.split(',');
    expect(result).toContain('2', '1', '3', '6', '5', '4');
    expect(result).toContainEqual('1', '2', '3', '6', '5', '4');
  });
  test('map 메서드로 string 배열이 number 배열로 제대로 매핑되는지 확인', () => {
    const input = '1,2,3,4,5,6';
    const strArr = input.split(',');
    const numArr = input.split(',').map(x => Number(x));
    expect(strArr).toContainEqual('1', '2', '3', '6', '5', '4');
    expect(numArr).toContainEqual(1, 2, 3, 4, 5, 6);
  });

  test('랜덤값 6개를 중복없이 잘 가져오는지 확인', () => {
    const numbers = utils.getRandomNumbers();
    expect(numbers.length).toEqual(LOTTO_LENGTH);
    expect(new Set(numbers).size).toEqual(LOTTO_LENGTH);
  });

  test('로또 객체를 생성하여 잘 리턴하는지 확인', () => {
    const lotto = utils.issueLotto();
    expect(typeof lotto).toEqual('object');
    expect(Array.isArray(lotto.getNumbers())).toBeTruthy();
  });
  test('구입한 갯수 크기의 로또 객체 배열을 잘 리턴하는지 확인', () => {
    const lotto_count = 5;
    expect(Array.isArray(utils.getLottos(lotto_count))).toBeTruthy();
  });
  test('수익률값이 소수점 둘째자리에서 반올림 됐는지 확인', () => {
    const totalMoney = 5000; //수익
    const amount = 9000; //구입 금액
    const ratio = ((totalMoney / amount) * 100).toFixed(1);
    expect(ratio).toEqual(`55.6`);
    expect(ratio).not.toEqual(`55.5`);
  });
});
