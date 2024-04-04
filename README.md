# 할 일 앱만들기

## 리액트 프로젝트 세팅

- ./ 상위폴더

- `npx create-react-app ./`
- `yarn create react-app ./`

- 나중에 > emotion, sass 사용
- npm으로 설치 한 경우 yarn add 대신에 npm install

- `yarn add normalize.css`
  \_ 웹브라우저에 내장된 css 초기화

- sass 설치
- `yarn add sass`
- `npx install sass`
- `yarn add eslint --dev`
- `yarn eslint --init`

- `npm install eslint-config-prettier --save-dev`
- `yarn add eslint-config-prettier --save-dev`
- `yarn add classnames react-icons`

- `yarn add @babel/plugin-proposal-private-property-in-object --dev`
- `npm install @babel/plugin-proposal-private-property-in-object --dev`

- 코드정리용
- 세미콜론 / 줄바꿈 자동으로 해주는거 세팅 json.
  \_ 회사마다 다르다함.

````
npm일 시 아래 yarn npm 체크 해줄 것
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · yarn
Installing eslint-plugin-react@latest```
- `npx`
## ESLint, prettier 설정
    _.prettierrc.json(파일 만들기)
 ``` json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
````

- .eslintrc.js extends 오브젝트 안에 추가할것.

extends: [
"eslint:recommended",
"plugin:react/recommended",
"prettier"
],

- rules : 경고 띄우는거 끄는거

```
rules: {
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "no-unused-vars": "off",
},
```
