import User from '../src/domain/User.js';

describe('유저 클래스 테스트', () => {
    test('유저가 입력한 값이 1000원으로 떨어지지 않으면 예외 발생', () => {
        expect(() => {
            new User('3001');
        }).toThrow('[ERROR]');
    });
});