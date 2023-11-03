/*
- [x] 사용자는 로또를 구입할 금액을 입력 할 수 있다
- [x] 만약 사용자가 로또 구입 금액을 입력한 금액이 1,000원으로 나누어지지 않는다면 Error문구를 노출하고 함수가 종료된다
- [x] 만약 사용자가 로또 구입 금액을 입력한 값이 숫자가 아닌 다른값을 입력하면 Error문구를 노출하고 함수가 종료된다
- [x] 사용자가 구입할 금액을 입력하는 함수를 만든다
- [x] 입력된 금액을 1000으로 나누는 함수를 생성한다
*/

export const getPayLottoAmount = async () => {
  const lottoPurchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.");

  return lottoPurchaseAmount
};
