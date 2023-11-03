const MissionUtils = {
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
};

describe("랜덤수 생성", () => {
  test("1에서 45 사이 6개의 서로 다른 정수", () => {
    const input = [5, 11, 18, 20, 25, 37];
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValue(input);

    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    expect(numbers).toHaveLength(6);

    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });

    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(numbers.length);
  });
});
