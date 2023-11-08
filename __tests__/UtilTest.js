import { toSorted } from "../src/utils.js";

describe("유틸 함수를 테스트", () => {
  test("toSorted 함수는 정렬된 배열을 반환한다.", () => {
    // given
    const arr = [8, 23, 41, 42, 43, 21];
    const result = [21, 23, 41, 42, 43, 8];
    const numericResult = [8, 21, 23, 41, 42, 43];

    // when
    const sorted = toSorted(arr);
    const numericSorted = toSorted(arr, (a, b) => a - b);

    // then
    expect(sorted).toEqual(result);
    expect(numericSorted).toEqual(numericResult);
  });

  test("toSorted 함수는 기존 배열을 변경시키지 않는다.", () => {
    // given
    const arr = [8, 23, 41, 42, 43, 21];

    // when
    toSorted(arr);

    // then
    expect(arr).toEqual(arr);
  });
});
