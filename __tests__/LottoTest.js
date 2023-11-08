import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 클래스 테스트", () => {
  test("로또 번호 개수 테스트", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호 중복 테스트", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

describe("로또 클래스 추가 테스트", () => {
  test("로또 번호 오름차순 정렬 출력.", () => {
    const logSpy = getLogSpy();
    new Lotto([45, 17, 28, 1, 9, 33]).printLottoNumber();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[1, 9, 17, 28, 33, 45]")
    );
  });

  test("로또 번호와 당첨 번호 비교 결과 반환 테스트", () => {
    const MOCK_WINNING_NUMBER = [1, 3, 5, 7, 44, 45];
    const MODK_BONUS_NUMBER = 43;
    const LOTTO_COMPARE = new Lotto([1, 3, 5, 7, 9, 11]).compareLottoNumber(
      MOCK_WINNING_NUMBER,
      MODK_BONUS_NUMBER
    );
    expect(LOTTO_COMPARE).toEqual({ correctCount: 4, bonusFlag: false });
  });

  test("로또 번호와 보너스 번호 비교 결과 반환 테스트", () => {
    const MOCK_WINNING_NUMBER = [1, 3, 5, 7, 9, 45];
    const MODK_BONUS_NUMBER = 11;
    const LOTTO_COMPARE = new Lotto([1, 3, 5, 7, 9, 11]).compareLottoNumber(
      MOCK_WINNING_NUMBER,
      MODK_BONUS_NUMBER
    );
    expect(LOTTO_COMPARE).toEqual({ correctCount: 5, bonusFlag: true });
  });
});
