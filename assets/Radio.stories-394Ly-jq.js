import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,i as r}from"./FormFields-DvofSV9t.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`공통/Radio`,component:r,args:{name:`status`,value:`active`,options:[{value:`active`,label:`사용`},{value:`inactive`,label:`사용 중지`},{value:`review`,label:`검토 중`,disabled:!0}],required:!1,disabled:!1,onChange:o()},parameters:{docs:{description:{component:`서로 배타적인 선택지를 하나만 선택하는 라디오 그룹입니다. 선택 상태는 value/onChange로 소비자가 소유합니다.`}}},argTypes:{name:{control:`text`,description:`라디오 그룹의 name입니다.`},value:{control:`select`,options:[`active`,`inactive`,`review`],description:`현재 선택된 value입니다.`},options:{control:!1,description:`value·label·disabled를 가진 선택지 목록입니다. ReactNode label은 코드 예제로 전달합니다.`},required:{control:`boolean`,description:`그룹 필수 여부입니다.`},disabled:{control:`boolean`,description:`전체 선택지를 비활성화합니다.`},onChange:{control:!1,action:`라디오 변경`,description:`선택된 value callback입니다.`}}},c={render:e=>{let[{value:t},n]=a();return(0,i.jsx)(r,{...e,value:t,onChange:t=>{e.onChange?.(t),n({value:t})}})}},l={args:{disabled:!0}},u={args:{required:!0}},d=[`Default`,`Disabled`,`Required`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs<typeof args>();
    return <RadioGroupInput {...args} value={value} onChange={next => {
      (args.onChange as ((value: string) => void) | undefined)?.(next);
      updateArgs({
        value: next
      });
    }} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Default,l as Disabled,u as Required,d as __namedExportsOrder,s as default};