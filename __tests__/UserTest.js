import User from '../src/User';
import { LOTTO, PURCHASE_AMOUNT } from '../src/constants/api';
import { ERROR_MESSAGE } from '../src/constants/message';

describe('validatePurchaseAmount 메서드 테스트', () => {
  // given
  let user;
  beforeEach(() => {
    user = new User();
  })

  it('양의 정수가 아닌 경우 모두 예외가 발생한다.', () => {
    const input = -11;
    const errorMessage = ERROR_MESSAGE.NOT_POSITIVE_INTEGER;

    expect(() => {
      user.validatePurchaseAmount(input);
    }).toThrow(errorMessage);
  });

  it('로또 1장 가격으로 나누어 떨어지지 않는 경우 예외 처리한다.', () => {
    const input = LOTTO.PRICE * 1.1;
    const errorMessage = ERROR_MESSAGE.NOT_SEPERATED_BY(LOTTO.PRICE);

    expect(() => {
      user.validatePurchaseAmount(input);
    }).toThrow(errorMessage);
  });

  it('최대 구매 가능 금액보다 큰 값을 입력한 경우 예외 처리한다.', () => {
    const input = PURCHASE_AMOUNT.MAX + LOTTO.PRICE;
    const errorMessage = ERROR_MESSAGE.BIGGER_THAN_MAX(PURCHASE_AMOUNT.MAX)

    expect(() => {
      user.validatePurchaseAmount(input);
    }).toThrow(errorMessage);
  });
})

describe('buyLottos 메서드 테스트', () => {  
  it('구입 가능한 금액만큼 로또를 모두 구매한다.', () => {
    // given
    const numberOfLottos = 3;
    const generator = () => [1, 2, 3, 4, 5, 6];
    const user = new User();

    // when
    user.buyLottos(numberOfLottos, generator);

    // then
    expect(user.lottoNumbers.length).toBe(numberOfLottos);
  });
});
