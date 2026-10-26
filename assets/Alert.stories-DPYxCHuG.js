import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n,r,i,a,o,s,c,l;function u(){return(u=e((()=>{n=`_alert_1purs_1`,r=`_mark_1purs_11`,i=`_message_1purs_29`,a=`_info_1purs_34`,o=`_success_1purs_45`,s=`_warning_1purs_56`,c=`_error_1purs_67`,l={alert:n,mark:r,"mark-in":`_mark-in_1purs_1`,message:i,info:a,success:o,warning:s,error:c}})))()}function d({tone:e=`info`,title:t,children:n,className:r,...i}){return(0,f.jsxs)(`div`,{...i,className:[l.alert,l[e],r].filter(Boolean).join(` `),role:i.role??(e===`error`?`alert`:`status`),children:[(0,f.jsx)(`span`,{className:l.mark,"aria-hidden":`true`,children:p[e]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`strong`,{children:t}),(0,f.jsx)(`div`,{className:l.message,children:n})]})]})}var f,p;function m(){return(m=e((()=>{u(),f=t(),p={info:`i`,success:`✓`,warning:`!`,error:`!`},d.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{tone:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]}})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{m(),h={title:`공통/Alert`,component:d,args:{title:`안내`,children:`작업 전에 확인할 내용을 지속적으로 보여줍니다.`},parameters:{docs:{description:{component:`사용자 입력이나 작업 결과를 같은 맥락에서 지속적으로 안내하는 상태 메시지입니다.`}}},argTypes:{tone:{control:`select`,options:[`info`,`success`,`warning`,`error`],description:`상태 tone입니다. 기본값은 info입니다.`},title:{control:`text`,description:`알림 제목입니다.`},children:{control:!1,description:`ReactNode 메시지 본문입니다. 코드 예제로 전달합니다.`},role:{control:`select`,options:[`status`,`alert`],description:`미전달 시 error는 alert, 나머지는 status입니다.`}}},g={args:{tone:`info`}},_={args:{tone:`success`,title:`저장 완료`,children:`변경 내용을 정상적으로 반영했습니다.`}},v={args:{tone:`warning`,title:`확인 필요`,children:`계약 종료일을 다시 확인해 주세요.`}},y={args:{tone:`error`,title:`저장 실패`,children:`입력값은 유지됩니다. 잠시 후 다시 시도해 주세요.`}},b=[`Info`,`Success`,`Warning`,`Error`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'info'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    title: '저장 완료',
    children: '변경 내용을 정상적으로 반영했습니다.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    title: '확인 필요',
    children: '계약 종료일을 다시 확인해 주세요.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'error',
    title: '저장 실패',
    children: '입력값은 유지됩니다. 잠시 후 다시 시도해 주세요.'
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Error,g as Info,_ as Success,v as Warning,b as __namedExportsOrder,h as default};