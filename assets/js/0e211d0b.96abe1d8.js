"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[90527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={id:"mobile-timecard-customization",title:"Mobile timecard customization",sidebar_label:"Mobile timecard customization",original_id:"mobile-timecard-customization"},a=void 0,c={unversionedId:"guides/mobile-timecard-customization",id:"version-1.10.0/guides/mobile-timecard-customization",title:"Mobile timecard customization",description:"Overview",source:"@site/versioned_docs/version-1.10.0/guides/mobile-timecard-customization.md",sourceDirName:"guides",slug:"/guides/mobile-timecard-customization",permalink:"/docs/guides/mobile-timecard-customization",draft:!1,tags:[],version:"1.10.0",frontMatter:{id:"mobile-timecard-customization",title:"Mobile timecard customization",sidebar_label:"Mobile timecard customization",original_id:"mobile-timecard-customization"},sidebar:"version-1.10.0-docs",previous:{title:"Search box customization",permalink:"/docs/guides/search-box-customization"},next:{title:"Cleaning check list customization",permalink:"/docs/guides/cleaning-check-list-customization"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Completed image",id:"completed-image",level:2},{value:"JavaScript and CSS Customization",id:"javascript-and-css-customization",level:2},{value:"Show punch-in and punch-out buttons",id:"show-punch-in-and-punch-out-buttons",level:3},{value:"Adjust the spacing of buttons using CSS",id:"adjust-the-spacing-of-buttons-using-css",level:3},{value:"Create a time stamp",id:"create-a-time-stamp",level:3},{value:"Reload process after stamping",id:"reload-process-after-stamping",level:3},{value:"What happens when the punch-in button is clicked?",id:"what-happens-when-the-punch-in-button-is-clicked",level:3},{value:"What happens when the punch-in button is clicked?",id:"what-happens-when-the-punch-in-button-is-clicked-1",level:3},{value:"Show error messages",id:"show-error-messages",level:3}],u={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This section describes how to use the MobileButton component and the MobileNotification component to create a mobile timecard to log punch-in and punch-out times."),(0,i.kt)("h2",{id:"completed-image"},"Completed image"),(0,i.kt)("p",null,"The completed image of the timecard customization is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Timecard",src:n(92906).Z,width:"584",height:"292"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stamp message",src:n(31798).Z,width:"584",height:"52"})),(0,i.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS Customization"),(0,i.kt)("p",null,"When you import the Kintone UI Component UMD file to the app, you can upload the JavaScript files by following the steps described below.",(0,i.kt)("br",null),"\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start"},"Quick Start")," for how to upload a file."),(0,i.kt)("h3",{id:"show-punch-in-and-punch-out-buttons"},"Show punch-in and punch-out buttons"),(0,i.kt)("p",null,"Use the MobileButton component to display the punch-in and punch-out buttons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"kintone.events.on('mobile.app.record.index.show', (event) => {\n\n  // Prevent button duplication bug\n  if (document.getElementById('kuc_punch_in_button') || document.getElementById('kuc_punch_out_button')) {\n    return event;\n  }\n\n  const app = kintone.mobile.app.getId();\n\n  // Display MobileButtons\n  const header = kintone.mobile.app.getHeaderSpaceElement();\n  const punchInButton = new Kuc.MobileButton({\n    text: 'Punch-in',\n    type: 'submit',\n    id: 'kuc_punch_in_button'\n  });\n  const punchOutButton = new Kuc.MobileButton({\n    text: 'Punch-out',\n    type: 'normal',\n    id: 'kuc_punch_out_button'\n  });\n  header.appendChild(punchInButton);\n  header.appendChild(punchOutButton);\n")),(0,i.kt)("h3",{id:"adjust-the-spacing-of-buttons-using-css"},"Adjust the spacing of buttons using CSS"),(0,i.kt)("p",null,"To adjust the spacing of the buttons in CSS, assign a value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of the MobileButton component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'@charset "UTF-8";\n#kuc_punch_in_button {\n  margin: 5px 5px 5px 5px;\n}\n#kuc_punch_out_button {\n  margin: 5px 0px 5px 0px;\n}\n')),(0,i.kt)("h3",{id:"create-a-time-stamp"},"Create a time stamp"),(0,i.kt)("p",null,"The following function is used to retrieve the current time when you click the punch-in button and the punch-out button:",(0,i.kt)("br",null),"\nCreates a value for the Time field format (HH: MM)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create time stamp\nconst getTime = () => {\n  const time = new Date();\n  const formatedTime = time.getHours() + ':' + time.getMinutes();\n  return formatedTime;\n};\n")),(0,i.kt)("h3",{id:"reload-process-after-stamping"},"Reload process after stamping"),(0,i.kt)("p",null,"After the timecard is stamped, the process of updating the screen takes place."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Reload function\nconst reload = (waitSeconds) => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(document.location.reload());\n    }, waitSeconds * 1000);\n  });\n};\n")),(0,i.kt)("h3",{id:"what-happens-when-the-punch-in-button-is-clicked"},"What happens when the punch-in button is clicked?"),(0,i.kt)("p",null,"The MobileButton component can specify a click event.",(0,i.kt)("br",null),'\nWhen you click the "punch-in" button, the following process is added.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Judge whether or not there is a record of the user logging in on the day."),(0,i.kt)("li",{parentName:"ul"},"Show the notification when there is a record.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Process of punchInButton\npunchInButton.addEventListener('click', async () => {\n  try {\n    // Check for records on the day\n    const getParams = {\n      app,\n      query: 'date = TODAY() and creator in (LOGINUSER()) order by $id desc limit 1 offset 0'\n    };\n    const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', getParams);\n\n    // Display the message if there are any records on the day\n    if (resp.records.length) {\n      const info = new Kuc.MobileNotification({\n        text: 'You have already punched-in!'\n      });\n      info.open();\n      return;\n    }\n")),(0,i.kt)("p",null,"After checking for the presence or absence of records, the following process is added."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stamp the punch-in time if there is no record."),(0,i.kt)("li",{parentName:"ul"},"Show the notification when punch-in time stamping is completed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// If there is no record on the day, punch-in\nif (!resp.records.length) {\n  const postParams = {\n    app,\n    'record': {\n    \u3000'start': {\n        'value': getTime()\n      }\n    }\n  };\n  await kintone.api(kintone.api.url('/k/v1/record', true), 'POST', postParams);\n\n  // Display the message when punch-in\n  const info = new Kuc.MobileNotification({\n      text: 'Registered a punch-in time!'\n  });\n  info.open();\n  await reload(5);\n}\n")),(0,i.kt)("h3",{id:"what-happens-when-the-punch-in-button-is-clicked-1"},"What happens when the punch-in button is clicked?"),(0,i.kt)("p",null,"When you click the punch-out button, the following process takes place in the same way as when you click the punch-in button:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Judge whether or not there is a record of the user logging in on the day."),(0,i.kt)("li",{parentName:"ul"},"Show the notification when there is no record."),(0,i.kt)("li",{parentName:"ul"},"Stamp the punch-out time if there is a record."),(0,i.kt)("li",{parentName:"ul"},"Show the notification when the punch-out time stamping is completed.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The code is omitted because there are a lot of parts that are similar to the punch-in process.",(0,i.kt)("br",null)),"The same process is performed when an error message is displayed."),(0,i.kt)("h3",{id:"show-error-messages"},"Show error messages"),(0,i.kt)("p",null,"If an error occurs during the process, use the MobileNotification component to display the message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"} catch (error) {\n  console.log(error);\n  let errmsg = 'An error occurred.';\n  if (error.message) {\n    errmsg += ' ' + error.message;\n  }\n  const alert = new Kuc.MobileNotification({\n    text: errmsg\n  });\n  alert.open();\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This article was reviewed by Kintone and Google Chrome as of August, 2021.",(0,i.kt)("br",null),"\nIn addition, the version of Kintone UI Component that is used for customization is v1.0.5.")))}h.isMDXComponent=!0},92906:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/timecard-2cf41352806f89f19469a8578593b78e.png"},31798:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);