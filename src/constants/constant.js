const inputs = Object.freeze({
  amount: `구입금액을 입력해 주세요.`,
  winningNumber: `당첨 번호를 입력해 주세요.`,
  bonusNumber: `보너스 번호를 입력해 주세요.`,
});

const outputs = Object.freeze({
  statistics: `당첨 통계\n---`,
});

const game = Object.freeze({
  lottoNumbersTemp: [1, 2, 3, 4, 5, 6],
  lottoMin: 1,
  lottoMax: 45,
  lottoLength: 6,
  unit: 1000,
  threeMachesAmount: 5000,
  fourMachesAmount: 50000,
  fiveMachesAmount: 1500000,
  bonusMachesAmount: 30000000,
  sixMachesAmount: 2000000000,
});

const error = Object.freeze({
  invalidAmountType: `[ERROR] 금액은 정수만 입력되어야 합니다.`,
  invalidAmountUnit: `[ERROR] 구매 단위가 1000원으로 떨어져야 합니다.`,
  invalidNumType: `[ERROR] 로또 번호는 정수여야 합니다.`,
  invalidNumRange: `[ERROR] 로또 번호는 1보다 작거나 45보다 크면 안됩니다.`,
  invalidumLength: `[ERROR] 로또 번호는 6자리여야 합니다.`,
  duplicate: `[ERROR] 중복 값이 존재합니다.`,
  invalidBonusNumDuplicate: `[ERROR] 보너스 번호와 당첨 번호 중 중복된 번호가 있습니다.`,
  invalidBonusNumLength: `[ERROR] 보너스 번호는 한 숫자만 올 수 있습니다.`,
});
const CONSTANT = Object.freeze({ outputs, inputs, game, error });

export default CONSTANT;
