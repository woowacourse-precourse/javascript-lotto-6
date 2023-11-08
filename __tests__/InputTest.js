// import App from "../src/App.js";
// import { MissionUtils } from "@woowacourse/mission-utils";

// const mockQuestions = (inputs) => {
//   MissionUtils.Console.readLineAsync = jest.fn();

//   MissionUtils.Console.readLineAsync.mockImplementation(() => {
//     const input = inputs.shift();
//     return Promise.resolve(input);
//   });
// };
// //로또 금액 입력받기 테스트
// describe("구입금액 입력받기", () => {
//   test("구입금액은 1000원으로 나누어 떨어져야 함", async () => {
//     //given
//     const inputs = "8000";
//     const outputs = "8장을 구매했습니다.";

//     mockQuestions(inputs); //사용자가 입력한 것처럼 테스트

//     //when
//     // const money = await App.getUserBuyCount();
//     const app = new App();
//     await app.play();

//     //then
//     expect(money).toEqual(outputs);
//   });
//   test.each([
//     ["1200"], //1000으로 나누어 떨어지지 않는 수 불가
//     ["-1000"], //음수 불가
//     ["10000j"], //문자열 불가
//   ])("입력 값에 대한 예외 처리", async (inputs) => {
//     //given
//     mockQuestions(inputs);
//     //when & then
//     await expect(App.getUserBuyCount()).rejects.toThrow(
//       "[ERROR] 숫자가 잘못된 형식입니다."
//     );
//   });
// });
