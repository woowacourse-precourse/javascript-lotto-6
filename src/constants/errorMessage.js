const ERROR_MESSAGE_WITHOUT_PREFIX = Object.freeze({
  not_number: '숫자가 아닙니다.',
  not_multiples_of_1000: '1000으로 나누어지지 않습니다.',
  less_than_one: '1보다 작습니다.'
});

export const ERROR_MESSAGE = Object.fromEntries(
  Object.keys(ERROR_MESSAGE_WITHOUT_PREFIX).map(key => [key, '[Error] ' + ERROR_MESSAGE_WITHOUT_PREFIX[key]])
);