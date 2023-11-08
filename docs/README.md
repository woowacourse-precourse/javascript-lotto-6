# 로또 기능 명세서

- [x] (README.md) 기능명세서 작성하기
- [ ] (README.md) MVC 패턴으로 코드 구조 분할하기
- [ ] (src/constants) 에러 메세지를 상수 객체로 설정
- [ ] (src/constants) 입력받을 때 사용할 쿼리를 상수 객체로 설정
- [ ] (src/constants) 로또 발행과 관련된 메세지를 상수 객체로 설정
- [ ] (src/constants) 로또 입력개수 조건을 상수 객체로 설정
- [ ] (src/validators) 구매금액의 유효성을 확인하는 함수 구현
- [ ] (src/validators) 당첨 번호의 유효성을 확인하는 함수 구현
- [ ] (src/validators) 보너스 번호의 유효성을 확인하는 함수 구현

# 추가된 요구사항

- [ ] throw문을 사용해 예외가 발생하면 "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. (try-catch 사용하기)
- [x] Indent depth를 3 이상으로 허용하지 않고, 2까지만 허용한다. (Linter + Formatter 사용)
- [x] 함수(또는 메서드)의 길이를 15 라인을 넘지 않도록 구현한다. (Linter + Formatter 사용)
- [ ] `else` 보다는 `if` 조건문이나 `switch`문을 사용하여 코드를 정리한다.
- [ ] 도메인 로직에 단위 테스트를 구현한다. 핵심 로직과 UI를 분리한다.
- [ ] 제공된 Lotto 클래스를 활용해 구현해야 한다.
