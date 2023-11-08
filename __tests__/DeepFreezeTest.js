import deepFreeze from '../src/util/deepFreeze.js';

describe('deepFreeze Test', () => {
  test('1depth freeze 테스트 ', () => {
    // given
    const person = deepFreeze({
      name: 'chihwan',
      age: 20,
    });

    expect(() => {
      // when
      person.nickname = 'chiman';
    }).toThrow();
  });

  test('2depth freeze 테스트 ', () => {
    // given
    const person = deepFreeze({
      name: 'chihwan',
      age: 20,
      family: {
        sister: true,
      },
    });

    expect(() => {
      // when
      person.family.brother = false;
    }).toThrow();
  });

  test('3depth freeze 테스트 ', () => {
    // given
    const person = deepFreeze({
      name: 'chihwan',
      age: 20,
      family: {
        sister: {
          child: true,
        },
      },
    });

    expect(() => {
      // when
      person.family.sister.age = 30;
    }).toThrow();
  });
});
