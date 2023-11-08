/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/utils/Define';
import LottoService from '../src/LottoService';
import lotto from "../src/Lotto.js";
import WinningLotto from "../src/domain/WinningLotto.js";
describe('로또 서비스 테스트', () => {
  describe('로또 생성 테스트', () => {
    // given
    const lottoService = new LottoService();
    const addCases = [
      { input: 3000, expected: 3 },
      { input: 1000, expected: 1 },
    ];
    test.each(addCases)(
      '구입 금액이 $input이라면, 로또 개수는 $expected 개가 되어야 한다.',
      ({ input, expected }) => {
        // when
        const lottoCount = lottoService.sellLotto(input)[0].length;
        // then
        expect(lottoCount).toEqual(expected);
      },
    );
  });

  describe('당첨 로또 생성 테스트', () => {
    //given
    const testCase =[[1,2,3,4,5,6],7]
    const lottoService = new LottoService();
    const expected = new WinningLotto([1,2,3,4,5,6],7)
    //when then
      expect(lottoService.getWinningLotto(...testCase)).toEqual(expected);
  });
});
