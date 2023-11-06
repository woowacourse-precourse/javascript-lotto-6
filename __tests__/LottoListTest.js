import LottoList from '../src/repository/LottoList.js';

describe('로또 리스트 클래스 테스트', () => {
  test('유저의 총 로또 갯수가 입력한 구매 금액과 맞다.', () => {
    expect(new LottoList(5).getLottoList()).toHaveLength(5);
  });
});
