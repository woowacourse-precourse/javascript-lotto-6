import LottoBundle from "../../../src/lib/Domain/LottoBundle";
import ReferenceLotto from "../../../src/lib/Domain/ReferenceLotto";
import OutputValidator from "../../../src/lib/Validator/OutputValidator";

describe("OutputValidator.lottoBundle - 기능", () => {
  test.each([new LottoBundle(8000), new LottoBundle(36000)])(
    "로또 다발이 존재할 때, 출력 검증한 결과는 정상 처리되어야 한다.",
    (bundle) => {
      expect(() => {
        OutputValidator.lottoBundle(bundle);
      }).not.toThrow();
    },
  );
});

describe("OutputValidator.lottoBundle - 예외", () => {
  test("로또 다발이 존재하지 않을 때, 출력 검증 결과는 정상 처리되어야 한다.", () => {
    expect(() => {
      OutputValidator.lottoBundle();
    }).toThrow();
  });
});

describe("OutputValidator.result - 기능", () => {
  test("로또 다발, 레퍼런스 로또가 존재하고 레퍼런스 로또에 보너스 번호가 존재할 때, 출력 검증 결과는 정상 처리되어야 한다.", () => {
    const lottoBundle = new LottoBundle(8000);
    const referenceLotto = new ReferenceLotto([1, 2, 3, 4, 5, 6]);
    referenceLotto.bonus = 7;
    expect(() => {
      OutputValidator.result(lottoBundle, referenceLotto);
    }).not.toThrow();
  });
});

describe("OutputValidator.result - 기능", () => {
  test.each([
    [null, null, null],
    [new LottoBundle(4000), null, null],
    [new LottoBundle(4000), new ReferenceLotto([1, 2, 3, 4, 5, 6]), null],
    [null, new ReferenceLotto([1, 2, 3, 4, 5, 6]), null],
    [null, new ReferenceLotto([1, 2, 3, 4, 5, 6]), 7],
  ])(
    "로또 다발이 %s, 레퍼런스 로또가 %s이며 보너스 번호가 %s일 때, 출력 검증 결과는 에러를 발생시켜야 한다.",
    (lottoBundle, referenceLotto, bonus) => {
      if (referenceLotto && bonus) referenceLotto.bonus = bonus;
      expect(() => {
        OutputValidator.result(lottoBundle, referenceLotto);
      }).toThrow();
    },
  );
});
