## 커밋 컨벤션
- feat    : 새로운 기능 추가
- fix     : 버그/오타(typo)/로직 등 코드를 수정한 경우
- refactor: 코드 리팩토링
- style   : 코드 포맷팅, 세미콜론 누락 수정 등 내부 로직 변경이 없이 코드를 수정한 경우
- docs    : README 문서 및 MD 파일 수정
- test    : 테스트 코드, 리팩토링 테스트 코드 추가
- chore   : 빌드 업무 수정, 패키지 매니저 수정
- remove  : 코드/파일 삭제
- dep     : 패키지 설치/삭제 등 의존성 관련 수정
- etc     : 기타
---

## 코드 컨벤션
#### 기본적으로 지켜야할 규칙
- 소스의 변수명, 클래스명 등에는 영문 이외의 언어를 사용하지 않는다.
- 클래스, 메서드 등의 이름에는 특수 문자를 사용하지 않는다.
- 상수명은 SNAKE_CASE로 작성한다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- `Random` 값 추출은 `Random.pickUniqueNumbersInRange()`를 활용한다.
- 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.
- 축약하지 않고 이름을 통해 의도를 드러내야한다.
- 공백 라인을 의미 있게 사용한다
- EOL(End Of Line)
- JavaScript에서 제공하는 API를 적극 활용한다
- 불필요한 console.log를 남기지 않는다
- 하나의 함수는 15자 라인으로 넘어가지 않게 설정
- else를 지양한다. if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.

#### 스스로 추가한 규칙
- 이외에 `utils`나 `validate`하는 함수들은 모두 소문자로 시작한다.
- 함수는 모두 동사로 시작한다.
- `boolean` 값을 리턴하거나 관련된 함수는 모두 `is~~`로 시작되게 함수명을 짓는다.
---

## 브렌치 컨벤션
- feat: 기능 추가
- refactor: 리팩토링
- fix: 에러 수정
- remove: 코드 제거

브렌치명 뒤에는 `-`을 추가하여 상세히 브렌치명을 따서 사용한다.
ex. feat-stringModel