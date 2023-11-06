const errorString = (message) => `[ERROR] ${message}`;

export const ERROR_MESSAGE = {
    notUnit: errorString("구입 금액은 1,000원 단위로 입력 가능합니다"),
    notRange: errorString("1~45사이에 숫자만 입력 가능합니다."),
    notNumber: errorString("','가 잘못된 형식입니다."),
    notDouble: errorString("6개에 숫자가 중복이 되지 않아야 합니다."),
    overlap: errorString("먼저 입력한 숫자와 중복됩니다."),
};
