export const BUY_AMOUNT_MESSAGE = "구입금액을 입력해 주세요.\n";
export const WIN_NUMBERS_MESSAGE = "\n당첨 번호를 입력해 주세요.\n";
export const BONUS_NUMBER_MESSAGE = "\n보너스 번호를 입력해 주세요.\n";
export const WIN_PRINT = "당첨 통계";
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const COUNT_NUMBER = 6;

export const WIN_INFO = {
    3: "3개 일치 (5,000원) - ",
    4: "4개 일치 (50,000원) - ",
    5: "5개 일치 (1,500,000원) - ",
    '5+1': "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    6: "6개 일치 (2,000,000,000원) - "
};

export const PRIZE = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000
};

export const ERRORS = {
    InvalidAmount: "[ERROR] 1000원 단위만 가능합니다.",
    InvalidBlank: "[ERROR] 입력값이 옳지 않습니다.",
    InvalidRange: "[ERROR] 1~45사이의 숫자를 입력해주세요.",
    InvalidWinNumbersCount: "[ERROR] 로또 번호는 6개여야 합니다.",
    InvalidBonusNumberCount: "[ERROR] 1개의 숫자만 입력해주세요.",
    InvalidDuplicateNumber: "[ERROR] 중복된 숫자가 있습니다.",
    InvalidNAN: "[ERROR] 숫자가 잘못된 형식입니다."
};