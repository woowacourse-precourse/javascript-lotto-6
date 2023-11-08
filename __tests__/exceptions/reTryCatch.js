import reTryCatch from '../../src/exceptions/reTryCatch';

describe('reTryCatch 함수 테스트', () => {
  it('콜백 함수의 결과를 리턴해야한다.', async () => {
    // given
    const testFn = () => Promise.resolve('success');

    // when
    const result = await reTryCatch(testFn);

    // then
    expect(result).toBe('success');
  });

  it('오류가 발생한다면 성공할 때까지 재시도 해야한다.', async () => {
    // given
    let count = 0;
    const testFn = () => {
      if (count < 3) {
        count++;
        throw new Error('failed');
      }
      return Promise.resolve('success');
    };

    // when
    const result = await reTryCatch(testFn);

    // then
    expect(result).toBe('success');
  });

  it('시도 횟수를 초과하여 재시도하면 오류를 일으킨다.', async () => {
    // given
    const tryCount = 2;
    const testFn = () => {
      throw new Error('failed');
    };

    // when
    const result = reTryCatch(testFn, tryCount);

    // then
    await expect(result).rejects.toThrow();
  });
});
