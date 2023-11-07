/* eslint-disable */

import { getRank } from "../src/utils/loterry.js";

describe("loterry 모듈 테스트", () => {
  test("당첨 순위 테스트 - 5위", () => {
    const matchingCount = 3;
    const matchingBonus = true;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual("fifth");
  });
  test("당첨 순위 테스트 - 4위", () => {
    const matchingCount = 4;
    const matchingBonus = true;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual("fourth");
  });
  test("당첨 순위 테스트 - 3위", () => {
    const matchingCount = 5;
    const matchingBonus = false;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual("third");
  });
  test("당첨 순위 테스트 - 2위", () => {
    const matchingCount = 5;
    const matchingBonus = true;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual("second");
  });
  test("당첨 순위 테스트 - 1위", () => {
    const matchingCount = 6;
    const matchingBonus = false;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual("first");
  });
  test("당첨 순위 테스트 - 미당첨", () => {
    const matchingCount = 1;
    const matchingBonus = false;
    const result = getRank(matchingCount, matchingBonus);
    expect(result).toEqual(null);
  });
});
