import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t}from"./iframe-Bz-iIV9m.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,c as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./FormFields-DvofSV9t.js";function d({children:e}){return(0,h.jsx)(`div`,{style:_,children:e})}function f({label:e,children:t}){return(0,h.jsxs)(`fieldset`,{style:{display:`grid`,gap:`7px`,margin:0,padding:0,border:0},children:[(0,h.jsx)(`legend`,{style:{color:`var(--color-text-primary)`,fontSize:`13px`,fontWeight:700},children:e}),t]})}function p(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m=t(),i(),h=n(),g={title:`공통/FormFields`,component:s,parameters:{docs:{description:{component:`라벨·설명·오류를 입력 컨트롤과 연결하는 공통 폼 필드입니다. Select, Date, Textarea 예제는 같은 공개 입력 규칙을 공유합니다.`}}},argTypes:{name:{control:`text`,description:`입력 name과 기본 id입니다.`},label:{control:`text`,description:`컨트롤에 연결되는 라벨입니다.`},required:{control:`boolean`,description:`필수 표시와 required 속성입니다.`},description:{control:`text`,description:`입력 아래 도움말입니다.`},hint:{control:`text`,description:`description의 기존 호환 alias입니다.`},error:{control:`text`,description:`문자열 오류 또는 true일 때 기본 오류입니다.`},placeholder:{control:`text`},value:{control:`text`,description:`controlled 입력값입니다. 빈 문자열도 그대로 보존합니다.`},onChange:{control:!1,action:`값 변경`},children:{control:!1}}},_={display:`grid`,gap:`20px`,width:`min(100%, 640px)`,padding:`24px`,border:`1px solid var(--color-border-default)`,borderRadius:`var(--radius-surface)`,background:`var(--color-surface)`,boxShadow:`var(--shadow-surface)`},v={args:{name:`company`,label:`거래처명`,required:!0,description:`법인명을 입력합니다.`,placeholder:`거래처명을 입력하세요`},render:e=>(0,h.jsx)(d,{children:(0,h.jsx)(s,{...e})})},y={args:{name:`email`,label:`이메일`,error:`이메일 형식을 확인해 주세요.`,defaultValue:`contact@`},render:e=>(0,h.jsx)(d,{children:(0,h.jsx)(s,{...e})})},b={args:{name:`industry`,label:`업종`},parameters:{docs:{description:{story:`빈값 선택과 option disabled를 지원하는 SelectField 예제입니다.`}}},render:()=>(0,h.jsx)(d,{children:(0,h.jsx)(r,{name:`industry`,label:`업종`,options:[{value:``,label:`선택 안 함`},{value:`it`,label:`IT · 솔루션`}]})})},x={args:{name:`startDate`,label:`계약 시작일`},parameters:{docs:{description:{story:`Default는 실행 시점의 로컬 오늘 날짜를 사용합니다. 입력 전체 영역·달력 버튼·Alt+아래로 달력을 열 수 있습니다.`}}},render:()=>(0,h.jsx)(d,{children:(0,h.jsx)(c,{name:`startDate`,label:`계약 시작일`,defaultValue:p(new globalThis.Date),description:`달력에서 날짜를 선택합니다.`})})},S={args:{name:`emptyDate`,label:`날짜 미입력`},parameters:{docs:{description:{story:`controlled value=""는 오늘 날짜로 대체하지 않고 빈 값으로 유지됩니다.`}}},render:()=>(0,h.jsx)(d,{children:(0,h.jsx)(c,{name:`emptyDate`,label:`날짜 미입력`,value:``,onChange:()=>void 0})})},C={args:{name:`choices`,label:`선택`},parameters:{docs:{description:{story:`기존 통합 예제입니다. 독립 catalog는 Radio와 Checkbox story를 사용합니다.`}}},render:()=>{let[e,t]=(0,m.useState)(`active`),[n,r]=(0,m.useState)([`email`]);return(0,h.jsxs)(d,{children:[(0,h.jsx)(f,{label:`사용 상태`,children:(0,h.jsx)(a,{name:`status`,value:e,onChange:t,options:[{value:`active`,label:`사용`},{value:`inactive`,label:`사용 중지`}]})}),(0,h.jsx)(f,{label:`알림 설정`,children:(0,h.jsxs)(`div`,{style:{display:`grid`,gap:`12px`},children:[(0,h.jsx)(o,{label:`업무 알림`,checked:n.includes(`task`),onChange:e=>r(e?[...n,`task`]:n.filter(e=>e!==`task`))}),(0,h.jsx)(u,{name:`notifications`,value:n,onChange:r,options:[{value:`email`,label:`이메일`},{value:`sms`,label:`문자`}]})]})})]})}},w={args:{name:`note`,label:`설명`},parameters:{docs:{description:{story:`사용자 크기 조절 없이 내부 스크롤을 사용하는 TextareaField 예제입니다.`}}},render:()=>(0,h.jsx)(d,{children:(0,h.jsx)(l,{name:`note`,label:`설명`,description:`업무 메모를 입력합니다.`,rows:4})})},T=[`Text`,`Error`,`Select`,`Date`,`DateControlledEmpty`,`Choices`,`Textarea`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'company',
    label: '거래처명',
    required: true,
    description: '법인명을 입력합니다.',
    placeholder: '거래처명을 입력하세요'
  },
  render: args => <StorySurface><TextField {...args} /></StorySurface>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'email',
    label: '이메일',
    error: '이메일 형식을 확인해 주세요.',
    defaultValue: 'contact@'
  },
  render: args => <StorySurface><TextField {...args} /></StorySurface>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'industry',
    label: '업종'
  },
  parameters: {
    docs: {
      description: {
        story: '빈값 선택과 option disabled를 지원하는 SelectField 예제입니다.'
      }
    }
  },
  render: () => <StorySurface><SelectField name="industry" label="업종" options={[{
      value: '',
      label: '선택 안 함'
    }, {
      value: 'it',
      label: 'IT · 솔루션'
    }]} /></StorySurface>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'startDate',
    label: '계약 시작일'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default는 실행 시점의 로컬 오늘 날짜를 사용합니다. 입력 전체 영역·달력 버튼·Alt+아래로 달력을 열 수 있습니다.'
      }
    }
  },
  render: () => <StorySurface><DateField name="startDate" label="계약 시작일" defaultValue={localDateValue(new globalThis.Date())} description="달력에서 날짜를 선택합니다." /></StorySurface>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'emptyDate',
    label: '날짜 미입력'
  },
  parameters: {
    docs: {
      description: {
        story: 'controlled value=""는 오늘 날짜로 대체하지 않고 빈 값으로 유지됩니다.'
      }
    }
  },
  render: () => <StorySurface><DateField name="emptyDate" label="날짜 미입력" value="" onChange={() => undefined} /></StorySurface>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'choices',
    label: '선택'
  },
  parameters: {
    docs: {
      description: {
        story: '기존 통합 예제입니다. 독립 catalog는 Radio와 Checkbox story를 사용합니다.'
      }
    }
  },
  render: () => {
    const [radio, setRadio] = useState('active');
    const [checked, setChecked] = useState<string[]>(['email']);
    return <StorySurface>\r
      <ChoiceStoryField label="사용 상태">\r
        <RadioGroupInput name="status" value={radio} onChange={setRadio} options={[{
          value: 'active',
          label: '사용'
        }, {
          value: 'inactive',
          label: '사용 중지'
        }]} />\r
      </ChoiceStoryField>\r
      <ChoiceStoryField label="알림 설정">\r
        <div style={{
          display: 'grid',
          gap: '12px'
        }}>\r
          <CheckboxInput label="업무 알림" checked={checked.includes('task')} onChange={value => setChecked(value ? [...checked, 'task'] : checked.filter(item => item !== 'task'))} />\r
          <CheckboxGroupInput name="notifications" value={checked} onChange={setChecked} options={[{
            value: 'email',
            label: '이메일'
          }, {
            value: 'sms',
            label: '문자'
          }]} />\r
        </div>\r
      </ChoiceStoryField>\r
    </StorySurface>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'note',
    label: '설명'
  },
  parameters: {
    docs: {
      description: {
        story: '사용자 크기 조절 없이 내부 스크롤을 사용하는 TextareaField 예제입니다.'
      }
    }
  },
  render: () => <StorySurface><TextareaField name="note" label="설명" description="업무 메모를 입력합니다." rows={4} /></StorySurface>
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as Choices,x as Date,S as DateControlledEmpty,y as Error,b as Select,v as Text,w as Textarea,T as __namedExportsOrder,g as default};