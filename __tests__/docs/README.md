## 개요

### 통합 테스트 
#### ☀️ 실시 영역
- 도메인 로직과 UI로직 전체를 `App`에 대한 통합 테스트를 통해 테스트함
- 도메인 로직 중 `Input Handler`의 재시도 로직은 UI로직과 분리되기 어려우므로 통합 테스트로 실시함

#### ☔ 미실시 영역
- 도메인 로직 중 `Output Handler`는 통합 테스트에 큰 의미가 없으므로 실시하지 않음

### 단위 테스트
#### ☀️ 실시 영역
- 도메인 로직인 `Lotto`, `ReferenceLotto`, `LottoBundle`에 대한 단위 테스트는 '검증' 영역을 제외하고 실시함 
- 검증 로직인 `InputValidator`, `DomainValidator`, `OutputValidator`에 대한 단위 테스트는 전부 실시함
- `OutputView`의 도메인 데이터를 가공하는 함수는 도메인과 인접성이 높으므로 단위테스트를 실시함

#### ☔ 미실시 영역
- 이외의 UI로직에 대한 단위 테스트는 실시하지 않음

## 신뢰성 테스트
- 신뢰성 테스트는 실패하는 것이 정상적인 상황
- 일부 환경에서 sort메서드의 `array.sort(() => Math.random() - 0.5)`으로 셔플 시에 편향이 존재
- 요구 사항을 충족하기 위해선 실질적으로 `MissionUtils`의 셔플을 대신하는 셔플 함수 구현 필요
- 범위에 해당하는 수를 배열로 만든 뒤, 정렬 후 슬라이스 하는 로직 역시 시간 복잡도 개선 필요

## 커버리지
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                
---------------------|---------|----------|---------|---------|-------------------
All files            |   98.68 |    96.29 |     100 |   98.59 | 
 src                 |     100 |      100 |     100 |     100 | 
  App.js             |     100 |      100 |     100 |     100 | 
  Lotto.js           |     100 |      100 |     100 |     100 | 
 src/lib             |     100 |      100 |     100 |     100 | 
  Constants.js       |     100 |      100 |     100 |     100 | 
 src/lib/Domain      |     100 |      100 |     100 |     100 | 
  LottoBundle.js     |     100 |      100 |     100 |     100 | 
  ReferenceLotto.js  |     100 |      100 |     100 |     100 | 
 src/lib/Handler     |   97.22 |     87.5 |     100 |   96.77 | 
  InputHandler.js    |     100 |      100 |     100 |     100 | 
  OutputHandler.js   |      90 |       75 |     100 |      90 | 30
 src/lib/Validator   |     100 |      100 |     100 |     100 | 
  DomainValidator.js |     100 |      100 |     100 |     100 | 
  InputValidator.js  |     100 |      100 |     100 |     100 | 
  OutputValidator.js |     100 |      100 |     100 |     100 | 
 src/lib/View        |   88.88 |    91.66 |     100 |    87.5 | 
  OutputView.js      |   88.88 |    91.66 |     100 |    87.5 | 17

## 테스트에서 커버되지 않은 내용
- `OutputHandler.error()`으로 예기치 못한 에러의 경우 App의 가장 바깥 스코프까지 전달하는 경우
- `OutputView.err()`으로 핸들되지 않은 에러에 대해 예기치 못한 에러를 출력하는 경우
