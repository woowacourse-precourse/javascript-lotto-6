import Prizes from '../../src/result/Prizes.js';

describe('result/prizes : prizes 변경 테스트', () => {
  const prizes = new Prizes();

  test('1등 로또를 추가한 경우, prizes의 1등 갯수가 1개여야 한다.', () => {
    prizes.addPrize('1');
    expect(prizes.get()['1']).toEqual(1);
  });

  test('3등 로또를 2개 추가한 경우, prizes의 3등 갯수가 2개여야 한다.', () => {
    prizes.addPrize('3');
    prizes.addPrize('3');
    expect(prizes.get()['3']).toEqual(2);
  });

  test('5등 로또를 4개 추가한 경우, prizes의 5등 갯수가 4개여야 한다.', () => {
    prizes.addPrize('5');
    prizes.addPrize('5');
    prizes.addPrize('5');
    prizes.addPrize('5');
    expect(prizes.get()['5']).toEqual(4);
  });

  test('등수가 undefined 인 경우, 어느 등수도 추가되지 않아야 한다.', () => {
    const before = prizes.get();
    prizes.addPrize(undefined);
    expect(prizes.get()).toEqual(before);
  });
});
