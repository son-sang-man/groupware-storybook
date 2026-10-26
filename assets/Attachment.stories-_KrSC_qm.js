import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Attachment-CTbMVsyl.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`공통/Attachment`,component:i,args:{files:[{id:`contract`,name:`계약서_가온시스템.pdf`,size:24e5,type:`application/pdf`,status:`attached`},{id:`license`,name:`사업자등록증.png`,size:68e4,type:`image/png`,status:`pending`}],accept:`.pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png`,onFilesSelected:s(),onRemove:s()},parameters:{docs:{description:{component:`기존 선택·drop 결합형 Attachment입니다. 새 화면은 독립 FilePicker 또는 Dropzone을 사용하고, 이 API는 호환성을 위해 유지합니다. 파일 본문은 보관하지 않고 metadata만 관리합니다.`}}},argTypes:{files:{control:!1,description:`metadata 파일 목록입니다.`},accept:{control:`text`,description:`허용 확장자·MIME 목록입니다.`},maxSizeBytes:{control:`number`,description:`최대 파일 크기입니다.`},multiple:{control:`boolean`,description:`복수 파일 허용 여부입니다.`},disabled:{control:`boolean`},error:{control:`text`},onFilesSelected:{control:!1,action:`파일 metadata 선택`},onRemove:{control:!1,action:`파일 제거`},onError:{control:!1,action:`파일 거부`}}},l={render:e=>{let[t,n]=(0,a.useState)(e.files);return(0,o.jsx)(i,{...e,files:t,onFilesSelected:t=>{e.onFilesSelected?.(t),n(e=>[...e,...t])},onRemove:t=>{e.onRemove?.(t),n(e=>e.filter(e=>e.id!==t))},onError:(t,n)=>e.onError?.(t,n)})}},u={args:{files:[]}},d={args:{files:[{id:`invalid-contract`,name:`계약서.pdf`,size:24e5,type:`text/plain`,status:`error`,error:`확장자와 MIME 형식이 허용 목록과 일치하지 않습니다.`}],error:`파일을 추가하지 못했습니다. 거부된 파일명과 사유를 확인해 주세요.`}},f=[`Interactive`,`Empty`,`Error`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState(args.files);
    return <Attachment {...args} files={files} onFilesSelected={next => {
      args.onFilesSelected?.(next);
      setFiles(current => [...current, ...next]);
    }} onRemove={id => {
      args.onRemove?.(id);
      setFiles(current => current.filter(file => file.id !== id));
    }} onError={(message, file) => args.onError?.(message, file)} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    files: []
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: 'invalid-contract',
      name: '계약서.pdf',
      size: 2400000,
      type: 'text/plain',
      status: 'error',
      error: '확장자와 MIME 형식이 허용 목록과 일치하지 않습니다.'
    }],
    error: '파일을 추가하지 못했습니다. 거부된 파일명과 사유를 확인해 주세요.'
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Empty,d as Error,l as Interactive,f as __namedExportsOrder,c as default};