import Utils from "../src/Utils";

describe("Utils 클래스 테스트", () => {
  test("금액을 입력하면 수량을 반환한다.", () => {
    expect(Utils.getLottoAmount(8000)).toBe(8);
  });

  test("랜덤 생성된 배열을 입력하면 오름차순 정렬을 한다.", () => {
    expect(Utils.getAscendingSortedArray([18, 2, 34, 43, 7, 23])).toEqual([
      2, 7, 18, 23, 34, 43,
    ]);
  });

  test("쉼표로 구분된 당첨 번호를 입력하면 숫자로된 배열로 변환한다.", () => {
    expect(Utils.convertStringIntoNumberArray("1,2,3,4,5,6")).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("숫자를 입력하면 원 단위로 표시해준다. 세 자리마다 쉼표로 표시해준다.", () => {
    expect(Utils.convertToLocaleUnit(1_000_000, "ko-KR")).toBe("1,000,000");
  });
});
