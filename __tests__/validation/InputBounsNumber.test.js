import { isValidBounsNumber } from '../../src/validator/BounsNumberValidator';

describe('보너스번호 검증 테스트', () => {
  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [2, [1, 2, 3, 4, 5, 6]],
    [3, [1, 2, 3, 4, 5, 6]],
    [4, [1, 2, 3, 4, 5, 6]],
  ])('보너스번호와 당첨번호 중복 테스트', (input, winningLottoNumbers) => {
    expect(() => isValidBounsNumber(input, winningLottoNumbers)).toThrow(
      '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
    );
  });

  test.each([
    [0, [1, 2, 3, 4, 5, 6]],
    [46, [1, 2, 3, 4, 5, 6]],
    [' ', [1, 2, 3, 4, 5, 6]],
  ])('보너스번호 범위 테스트', (input, winningLottoNumbers) => {
    expect(() => isValidBounsNumber(input, winningLottoNumbers)).toThrow(
      '[ERROR] 보너스 번호는 1~45 중 숫자 하나만 입력해 주세요.',
    );
  });

  test.each([
    ['1,2', [1, 2, 3, 4, 5, 6]],
    ['a', [1, 2, 3, 4, 5, 6]],
    ['45+2', [1, 2, 3, 4, 5, 6]],
  ])('보너스번호 숫자만 가능 테스트', (input, winningLottoNumbers) => {
    expect(() => isValidBounsNumber(input, winningLottoNumbers)).toThrow(
      '[ERROR] 숫자를 입력해 주세요.',
    );
  });
});
