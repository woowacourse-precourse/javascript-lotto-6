import App from '..src/App.js';

describe('기능 테스트', () => {
    const app = new App();

    test('당첨 번호에 중복이 있으면 예외가 발생한다.', () => {
        expect(app.getWinNumbers('1,2,3,4,5,5')).rejects.toThrow('[ERROR]');
    });

    test('당첨 번호에 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
        expect(app.getWinNumbers('1,2,3,4,5,46')).rejects.toThrow('[ERROR]');
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
        expect(app.getWinNumbers('1,2,3,4,5')).rejects.toThrow('[ERROR]');
    });
});
