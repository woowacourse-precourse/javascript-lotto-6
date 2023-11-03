import { toSorted } from "../src/utils.js";

describe("유틸 함수를 테스트", () => {
  test("toSorted 함수는 정렬된 배열을 반환한다.", () => {
    // given
    const arr = [3, 1, 2];
    const result = [1, 2, 3];

    // when
    const sorted = toSorted(arr);

    // then
    expect(sorted).toEqual(result);
  });

  test("toSorted 함수는 기존 배열을 변경시키지 않는다.", () => {
    // given
    const arr = [3, 1, 2];

    // when
    toSorted(arr);

    // then
    expect(arr).toEqual(arr);
  });
});
