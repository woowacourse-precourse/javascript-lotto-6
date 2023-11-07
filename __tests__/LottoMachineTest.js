import { Random } from '@woowacourse/mission-utils';
import { LottoMachine } from '../src/LottoMachine.js';
jest.mock('../src/LottoMachineUI.js', () => {
  return {
    LottoMachineUI: jest.fn().mockImplementation(() => {
      return { printLottoList: jest.fn() };
    }),
  };
});

describe('LottoMachine 테스트', () => {
  test('입력된 로또의 개수만큼 lottoList를 생성해야 함', () => {
    const numberOfLotto = 5;
    const lottoMachine = new LottoMachine(numberOfLotto);
    lottoMachine.createLottoNumber();

    //lotto list의 길이가 잘 들어왔는지
    expect(lottoMachine.lottoList.length).toBe(numberOfLotto);

    // 각 로또 배열에 6개의 번호가 포함되어 있는지
    lottoMachine.lottoList.forEach((lotto) => {
      expect(lotto).toHaveLength(6);
      expect(new Set(lotto).size).toBe(6);
    });

    // 각 번호가 1-45 범위 내에 있는지
    lottoMachine.lottoList.flat().forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
});
