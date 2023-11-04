import Request from '../src/request.js';
import prompt from '../src/prompt.js';
import validate from '../src/Validation.js';

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
    prompt.in.mockResolvedValue('8000');
    validate.money.mockResolvedValue(true);

    const result = await Request.money();

    expect(result).toBe(8000);
    expect(prompt.in).toHaveBeenCalledWith('구입금액을 입력해 주세요.\n');
    expect(validate.money).toHaveBeenCalledWith('8000');
  });

  test('에러 처리 테스트', async () => {
    prompt.in
      .mockResolvedValueOnce('팔천원')
      .mockResolvedValueOnce('8000');

    validate.money.mockImplementationOnce(() => {
      throw new Error('[ERROR] 정확한 값이 아닙니다.');
    });
    validate.money.mockImplementationOnce(true);

    const result = await Request.money();

    expect(result).toBe(8000);
    expect(prompt.in).toHaveBeenCalledWith('구입금액을 입력해 주세요.\n');
    expect(validate.money).toHaveBeenCalledWith('팔천원');
    expect(validate.money).toHaveBeenCalledWith('8000');
    expect(prompt.out).toHaveBeenCalledWith('[ERROR] 정확한 값이 아닙니다.');
  });
});
