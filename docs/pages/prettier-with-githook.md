---
title: Git Hooks로 커밋 할 파일들에 Prettier를 돌리기
---

# Git Hooks로 커밋 할 파일들에 Prettier를 돌리기

깃 훅으로 커밋 직전에 커밋 대상 파일들에 대해 코드 포멧팅을 진행한다.

- `Prettier` : 코드 포멧터
- `husky` : 패키지 설치 시, 자동으로 로컬 레포지터리의 깃 훅 디렉토리(`.git/hooks`)에 스크립트를 넣어 `package.json` 에 설정한 깃 훅 설정을 바라보게 함. 클론을 할 때마다 매번 깃 훅 설정을 따로 해줄 필요가 없어짐(깃 훅 디렉토리(`.git/hooks`)에 스크립트 설정).
- `lint-staged` : staged 상태인 파일들에 대한 조작을 가능하게 해줌

## 하면 좋은 이유

- 커밋 시 코드 포멧팅이 자동으로 일어나기에, 코드 포멧팅에 신경을 덜 쓸 수 있음

## 설치

```sh
npm install -D prettier husky lint-staged
```

## 설정

### prettier

```json
// .prettierrc
// 원하는 대로
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

### husky

```json
// package.json
// 커밋 직전에 lint-staged를 실행한다.
{
  "hussky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  ...
}
```

### lint-staged

```json
// package.json
// 예) staged 상태인, js와 json 파일들에 prettier를 돌리고
// 변경된 파일들을 다시 staged 상태로 올린다.
"lint-staged": {
    "*.{js,json}": [
      "prettier --write",
      "git add"
    ]
}
```

## Reference

- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
