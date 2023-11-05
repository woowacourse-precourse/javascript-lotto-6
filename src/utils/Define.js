export const ZERO = 0;
export const INIT_ZERO = 0;

export const LOTTO_PRICE = 1000;

export const MIN_LOTTO_NUMBER = 1;
export const MAX_LOTTO_NUMBER = 45;
export const LOTTO_NUMBER_COUNT = 6;

export const RADIX_TEN = 10;
export const PERCENTAGE = 100;
export const DEMICAL_POINT = 1;

export const PRIZE_MAP = {
    '3': 5000,
    '4': 50000,
    '5': 1500000,
    '5+': 30000000,
    '6': 2000000000,
};

export const INPUT_MESSAGES = {
    PURCHACE_PRICE: '구매 금액을 입력해 주세요.',
    LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const ERROR = {
    HEAD: '[ERROR]',
    DUPLICATE_LOTTO_NUMBER: '로또 번호는 중복된 값을 가질 수 없습니다.',
    NOT_INPUT_SIX_NUMBER: '로또 번호는 6개를 입력해야 합니다.',
    INVALID_AMOUNT_MESSAGE: '구매 금액은 1,000원 단위여야 합니다.',
    INVALID_WINNING_NUMBERS_MESSAGE: '당첨 번호는 1부터 45 사이의 유니크한 6개 숫자여야 합니다.',
    INVALID_BONUS_NUMBER_MESSAGE: '보너스 볼은 당첨 번호와 달라야 하며, 1부터 45 사이의 숫자여야 합니다.',
};