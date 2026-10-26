import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,n as r,t as i}from"./FormFields-DvofSV9t.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),a=t(),{useArgs:o}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`공통/Checkbox`,component:r,args:{label:`업무 알림`,checked:!1,required:!1,disabled:!1,onChange:s()},parameters:{docs:{description:{component:`단일 boolean 동의와 문자열 value 그룹 선택을 제공하는 체크박스입니다. 각 story는 실제 CheckboxInput 또는 CheckboxGroupInput을 사용합니다.`}}},argTypes:{label:{control:!1,description:`ReactNode 라벨입니다. 코드 예제로 전달합니다.`},checked:{control:`boolean`,description:`단일 체크 상태입니다.`},required:{control:`boolean`,description:`단일 체크 필수 여부입니다.`},disabled:{control:`boolean`,description:`선택을 비활성화합니다.`},onChange:{control:!1,action:`체크 변경`,description:`boolean 체크 상태 callback입니다.`}}},l={render:e=>{let[{checked:t},n]=o();return(0,a.jsx)(r,{...e,checked:t,onChange:t=>{e.onChange?.(t),n({checked:t})}})}},u={args:{disabled:!0,checked:!0}},d={args:{required:!0}},f={parameters:{docs:{description:{story:`복수 선택은 CheckboxGroupInput으로 value 배열과 onChange를 사용합니다.`}}},render:()=>{let[{value:e},t]=o();return(0,a.jsx)(i,{name:`notifications`,value:e??[`email`],onChange:e=>t({value:e}),options:[{value:`email`,label:`이메일`},{value:`sms`,label:`문자`},{value:`push`,label:`앱 알림`}]})}},p=[`Default`,`Disabled`,`Required`,`Group`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '복수 선택은 CheckboxGroupInput으로 value 배열과 onChange를 사용합니다.'
      }
    }
  },
  render: () => {
    const [{
      value
    }, updateArgs] = useArgs<{
      value: string[];
    }>();
    const current = value ?? ['email'];
    return <CheckboxGroupInput name="notifications" value={current} onChange={next => updateArgs({
      value: next
    })} options={[{
      value: 'email',
      label: '이메일'
    }, {
      value: 'sms',
      label: '문자'
    }, {
      value: 'push',
      label: '앱 알림'
    }]} />;
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Default,u as Disabled,f as Group,d as Required,p as __namedExportsOrder,c as default};