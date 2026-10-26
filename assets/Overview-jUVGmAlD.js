import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t,u as n}from"./blocks-BjqAEfwT.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,r as a}from"./react-BXJ34t_g.js";import{r as o,t as s}from"./TokenDefinitions-BGiUps2F.js";function c(e){let n={h1:`h1`,h2:`h2`,p:`p`,...i(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t,{title:`Token/정의`}),`
`,(0,u.jsx)(n.h1,{id:`token-정의`,children:`Token 정의`}),`
`,(0,u.jsx)(n.p,{children:`토큰은 색상·글꼴·간격처럼 여러 컴포넌트가 함께 사용하는 디자인 값을 의미 있는 이름으로 정의한 CSS 변수입니다.`}),`
`,(0,u.jsx)(n.h2,{id:`기준-원본`,children:`기준 원본`}),`
`,(0,u.jsx)(n.p,{children:`이 카탈로그는 design/system/tokens.css를 직접 읽어 현재 선언값을 표시합니다. 값이 다른 별도 토큰 목록을 만들지 않습니다. 용도와 시각 규칙은 design/06-ui-foundation.md를 함께 참조합니다. 확인 기준일은 2026-10-26입니다.`}),`
`,(0,u.jsx)(n.h2,{id:`사용-방법`,children:`사용 방법`}),`
`,(0,u.jsx)(n.p,{children:`CSS에서 background: var(--color-primary), padding: var(--space-4)처럼 사용합니다. 같은 색이라도 역할이 다르면 해당 의미의 이름을 선택합니다. 예를 들어 오류는 color-danger-text, 대표 행동은 color-primary입니다.`}),`
`,(0,u.jsx)(n.p,{children:`색상은 Color, 글꼴은 Typography, 간격은 Spacing, 테두리·모서리·그림자는 Shape, 초점·높이·업무 화면 너비는 Interaction에서 확인할 수 있습니다. 표의 정의값은 원본 문자열이며 var(...) 참조도 그대로 표시합니다. 견본은 실제 CSS 변수를 사용해 렌더합니다.`}),`
`,(0,u.jsx)(n.h2,{id:`관리-기준`,children:`관리 기준`}),`
`,(0,u.jsx)(n.p,{children:`공통 값을 변경할 때는 디자인 원본을 먼저 수정하고 프런트엔드 소비를 확인합니다. 토큰의 존재가 모든 제품 화면의 적용 완료를 의미하지는 않습니다. 컴포넌트별 확정 높이·공개 상태는 해당 문서를 따릅니다.`}),`
`,(0,u.jsx)(n.h2,{id:`기존-호환-이름`,children:`기존 호환 이름`}),`
`,(0,u.jsx)(n.p,{children:`기존 코드가 사용하는 짧은 이름입니다. 신규 코드는 역할을 드러내는 원본 이름을 우선 사용합니다.`}),`
`,(0,u.jsx)(s,{category:`alias`})]})}function l(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=r(),a(),n(),o()})))()}d();export{l as default};