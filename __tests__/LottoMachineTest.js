import LottoMachine from "../src/domain/LottoMachine";

describe("로또 머신 테스트", () => {
  test("로또는 오름차순으로 정렬되어야 한다.", () => {
    const lotto_machine = new LottoMachine();
    const lotto = lotto_machine.generateLotto();

    expect(lotto).toBe(lotto.sort((a, b) => a - b));
  });

  test("구매 수량만큼 로또를 생성해야 한다.", () => {
    const lotto_machine = new LottoMachine();
    const lotto_list = lotto_machine.generateAllLottos(5);

    expect(lotto_list.length).toBe(5);
  });
});
