export const RANKING = {
  0: 0,
  1: 0,
  2: 0,
  3: 5,
  4: 4,
  5: (hasBonus) => (hasBonus ? 2 : 3),
  6: 1,
}

export const REWARD = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  6: 0,
}

export const MESSAGE = {
  price: '구입할 금액을 알려주세요.\n',
  win: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
}

export const EXCEPTION = {
  money: '[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.',
  sixNumber: '[ERROR] 당첨 번호는 중복되지 않는 숫자 6개를 입력해야 합니다.',
  isNumber: '[ERROR] 보너스 번호는 1 ~ 45사이의 숫자 1개를 입력해야 합니다.',
}