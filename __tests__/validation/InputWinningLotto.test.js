import { isValidWinningLotto } from '../../src/validator/WinningLottoValidator';

describe('로또 생성 번호 검증 테스트', () => {
  test('번호와 쉼표(,) 유효성', () => {
    const winningLotto = ['a,b,c,d,e,f', '1.2.3.4.5.6', '1,,,,,2', ' , , , , , 1', '1?,2!,3,4,5,6'];
    winningLotto.forEach((lotto) => {
      expect(() => isValidWinningLotto(lotto)).toThrow(
        '[ERROR] 번호와 쉼표(,)를 이어서 입력해주세요.',
      );
    });
  });

  test('로또 번호 범위 유효성', () => {
    const winningLotto = ['1,2,3,4,5,46', '1,2,3,4,5,0', '100,2,3,4,5,1'];
    winningLotto.forEach((lotto) => {
      expect(() => isValidWinningLotto(lotto)).toThrow('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    });
  });

  test('로또 번호 중복 유효성', () => {
    const winningLotto = ['1,1,1,1,1,1', '1,2,3,4,5,5', '1,2,3,4,5,1'];
    winningLotto.forEach((lotto) => {
      expect(() => isValidWinningLotto(lotto)).toThrow('[ERROR] 로또 번호는 중복될 수 없습니다.');
    });
  });

  test('로또 번호 개수 유효성', () => {
    const winningLotto = ['1,2,3,4,5', '1,2,3,4,5,6,7', '1,2,3,4,5,6,7,8,9'];
    winningLotto.forEach((lotto) => {
      expect(() => isValidWinningLotto(lotto)).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
    });
  });
});
