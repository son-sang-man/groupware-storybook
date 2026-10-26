import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./check-CHp5_wA0.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{r(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`공통/Form/Check`,component:n,args:{label:`업무 알림`,checked:!1,required:!1,disabled:!1,onChange:o()},parameters:{docs:{description:{component:`실제 CheckboxInput을 사용하는 체크박스입니다. Default 하나에서 checked·required·disabled 상태를 Controls로 확인합니다.`}}},argTypes:{label:{control:`text`,description:`체크박스 옆에 표시되는 라벨입니다. 입력한 문자열이 실제 label에 반영됩니다.`},checked:{control:`boolean`,description:`단일 체크 상태입니다.`},required:{control:`boolean`,description:`단일 체크 필수 여부입니다.`},disabled:{control:`boolean`,description:`선택을 비활성화합니다.`},onChange:{control:!1,action:`체크 변경`,description:`boolean 체크 상태 callback입니다.`}}},c={render:e=>{let[{checked:t},r]=a();return(0,i.jsx)(n,{...e,checked:t,onChange:t=>{e.onChange?.(t),r({checked:t})}})}},l=[`Default`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs<typeof args>();
    return <CheckboxInput {...args} checked={checked} onChange={next => {
      (args.onChange as ((checked: boolean) => void) | undefined)?.(next);
      updateArgs({
        checked: next
      });
    }} />;
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Default,l as __namedExportsOrder,s as default};