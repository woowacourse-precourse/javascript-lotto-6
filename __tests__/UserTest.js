import User from "../src/User.js";

describe("User 클래스 테스트", () => {
  test("User 클래스 생성 정상 여부 ", () => {
    const user = new User(3000);
    expect(user).toBeInstanceOf(User);
  });
});
