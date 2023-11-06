import Request from '../src/views/Request.js';
import prompt from '../src/views/prompt.js';
import validate from '../src/domains/validation.js';
import { REQUEST, ERROR } from '../src/constants.js';

prompt.in = jest.fn();
prompt.out = jest.fn();

validate.money = jest.fn();

describe('Request', () => {
  beforeEach(() => {
    prompt.in.mockClear();
    prompt.out.mockClear();
    validate.money.mockClear();
  });

  test('유효한 값 리턴', async () => {
    // given
    prompt.in.mockResolvedValue('8000');
    validate.money.mockResolvedValue(true);

    // when
    const result = await Request.money();

    // then
    expect(result).toBe(8000);
    expect(prompt.in).toHaveBeenCalledWith(REQUEST.MONEY);
    expect(validate.money).toHaveBeenCalledWith('8000');
  });

  test('에러 처리 테스트', async () => {
    // given
    prompt.in
      .mockResolvedValueOnce('팔천원')
      .mockResolvedValueOnce('8000');

    validate.money.mockImplementationOnce(() => {
      throw new Error(ERROR.TYPE_CHECK);
    });
    validate.money.mockImplementationOnce(true);

    // when
    const result = await Request.money();

    // then
    expect(result).toBe(8000);
    expect(prompt.in).toHaveBeenCalledWith(REQUEST.MONEY);
    expect(validate.money).toHaveBeenCalledWith('팔천원');
    expect(validate.money).toHaveBeenCalledWith('8000');
    expect(prompt.out).toHaveBeenCalledWith(ERROR.TYPE_CHECK);
  });
});
