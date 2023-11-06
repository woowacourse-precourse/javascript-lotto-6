import Lottos from "../src/domain/Lottos.js";

describe("Lottos 클래스 테스트", () => {
  test("Lottos 클래스가 인자로 들어온 수만큼 배열을 반환하는지 확인", () => {
    const lottos = new Lottos(7);
    expect(lottos.getLottos()).toHaveLength(7);
  });

  test("Lottos 클래스로 호출한 배열이 오름차순으로 구성되어 있는지 확인", () => {
    const lotto = new Lottos(1);
    expect(lotto.getLottos()).toEqual(lotto.getLottos().sort((a, b) => a - b));
  });
});
