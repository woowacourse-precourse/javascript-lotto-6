
## 전체 기능 구현 체크리스트

- ✔️ 사용자에게 복권 구매 금액을 입력 받음 (userInput.js -> inputPurchaseAmount())
  - [x] while문을 활용해 올바른 값을 얻을때까지 반복
  - [x] 금액이 1000단위가 아니면 error throw
  - [x] 입력한 값이 숫자가 아니면 error throw
        
- ✔️ 구매 개수만큼 로또 생성 (LottoTicket.js)
  - [x] 주어진 Random 라이브러리와 Lotto 클래스를 사용
  - [x] Lotto 객체의 길이와 중복 체크 valid 추가
        
- ✔️ 사용자에게 당첨 번호를 입력 받음 (userInput.js -> inputWinningNumbers())
  - [x] while문을 활용해 올바른 값을 얻을때까지 반복
  - [x] 개수가 6개가 아니면 error throw
  - [x] 중복이 존재하면 error throw (Set 자료구조 활용)  
  - [x] 유효한 값이 아니면 error throw
        
- ✔️  사용자에게 보너스 번호를 입력 받음 (userInput.js -> inputBonusNumber())
  - [x] while문을 활용해 올바른 값을 얻을때까지 반복
  - [x] 입력한 값이 숫자가 아니면 error throw
        
- ✔️ 생성된 복권과 당첨/보너스 번호를 대조 (Result.js)

- ✔️ 실행 결과와 수익률 출력 (Result.js -> printResults())
- ✔️ 입력을 자동으로 넣어주는 테스트 코드 추가 (autoRun.js)
- ✔️ 에러 문구 상수화 (ErrorText.js)

- ✔️ 로또 생성에 대한 단위 테스트 추가 (LottoTicketTest.js)
- ✔️ 결과 계싼에 대한 단위 테스트 추가 (ResultTest.js)

<br />

<br />

## 커밋메세지 컨벤션
- feat = 새로운 기능 추가
- fix = 버그 수정
- refactor = 리팩토리
- style = css, ui, design 변경
- comment = 주석
- docs = 문서 수정
- test = 테스트 관련
- rename / remove = 파일 이름 변경 / 삭제

