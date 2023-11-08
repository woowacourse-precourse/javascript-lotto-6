import { MissionUtils } from '@woowacourse/mission-utils';
import Publish from '../src/Publish.js';
import { NUMBERS } from '../src/Constants/Constants.js';

describe('Publish Lotto Test', () => {
  test('로또 발행 시 Validation Check', async () => {
    const publish = new Publish(1);
    const list = publish.publish[0];

    const isUniqe = (arr) => arr.length === new Set(arr).size;
    expect(list.length).toBe(6); // 로또 번호 개수 테스트
    expect(isUniqe(list)).toBe(true); // 중복 테스트

    list.forEach((element) => {
      expect(element).toBeGreaterThanOrEqual(1);
      expect(element).toBeLessThanOrEqual(45);
    });
  });
});
