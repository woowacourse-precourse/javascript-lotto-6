const ERROR_MESSAGE_WITHOUT_PREFIX = Object.freeze({
  not_number: '숫자가 아닙니다.',
  not_multiples_of_1000: '1000으로 나누어지지 않습니다.',
  less_than_one: '1보다 작습니다.',
  exists_duplication: '중복된 숫자가 있습니다.',
  not_six_numbers: '로또 번호는 6개여야 합니다.',
  not_in_range: '1부터 45 사이의 숫자여야 합니다.'
});

export const ERROR_MESSAGE = Object.fromEntries(
  Object.keys(ERROR_MESSAGE_WITHOUT_PREFIX).map(key => [key, '[ERROR] ' + ERROR_MESSAGE_WITHOUT_PREFIX[key]])
);