import Lotto from "../../src/controller/Lotto.js";
import BonusInput from "../../src/view/input/BonusInput.js";

describe('Lotto()', () => {
  test('보너스 번호 반환 테스트', async () => {
    // given
    const validNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(validNumbers);
    const bonusInputSpy = jest.spyOn(BonusInput.prototype, 'number').mockResolvedValue(7);
    // when
    const bonusNumber = await lotto.bonus();
    // then
    expect(bonusNumber).toBe(7);
    expect(bonusInputSpy).toHaveBeenCalledWith(validNumbers);
  });
});