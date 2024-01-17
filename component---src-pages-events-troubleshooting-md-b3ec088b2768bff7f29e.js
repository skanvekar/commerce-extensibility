"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[2577],{56760:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return p}});var a=n(87462),i=n(45987),r=(n(35776),n(3905)),o=n(91515);const s=["components"],m={},d={_frontmatter:m},l=o.Z;function p(e){let{components:t}=e,n=(0,i.Z)(e,s);return(0,r.mdx)(l,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"events-troubleshooting"},"Events troubleshooting"),(0,r.mdx)("p",null,"This topic describes how to resolve frequently encountered issues with Adobe I/O Events for Adobe Commerce."),(0,r.mdx)("h2",{id:"events-are-not-showing-in-app-builder-event-registration"},"Events are not showing in App Builder event registration"),(0,r.mdx)("p",null,"If Commerce is correctly ",(0,r.mdx)("a",{parentName:"p",href:"configure-commerce.md"},"configured"),", but triggered events aren't being received, check if the events exist in the Commerce ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data")," table.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data")," table temporarily stores events before transforming them into Adobe I/O events. The table contains a status column that can have the following values:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Status ID"),(0,r.mdx)("th",{parentName:"tr",align:null},"Status"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"0")),(0,r.mdx)("td",{parentName:"tr",align:null},"Waiting")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"1")),(0,r.mdx)("td",{parentName:"tr",align:null},"Successfully sent")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"2")),(0,r.mdx)("td",{parentName:"tr",align:null},"Failed to send event")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"3")),(0,r.mdx)("td",{parentName:"tr",align:null},"Transmission is in progress")))),(0,r.mdx)("p",null,"You can use the following SQL query to select all events from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data")," table:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"SELECT * FROM event_data")),(0,r.mdx)("p",null,"Use the query results to determine the next troubleshooting step."),(0,r.mdx)("h3",{id:"the-table-is-empty"},"The table is empty"),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data")," table is empty, use the following procedure to diagnose the problem:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:list")," to ensure that you have subscribed events.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Check the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Magento")," directory to determine whether the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AdobeCommerceEvents")," module exists. If it does not exist, generate it with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:generate:module")," command."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Note"),": You must regenerate the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AdobeCommerceEvents")," module each time you subscribe to a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"plugin.*")," type event so that Commerce can create the required plugins.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento module:status Magento_AdobeCommerceEvents")," to check that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AdobeCommerceEvents")," module is enabled. If it is not enabled, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento module:enable Magento_AdobeCommerceEvents"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"On an Adobe Commerce on cloud infrastructure instance, check that eventing is enabled in ",(0,r.mdx)("inlineCode",{parentName:"p"},".magento.env.yaml"),". If not, enable it and push the changes to trigger deployment."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"stage:\n   global:\n      ENABLE_EVENTING: true\n")))),(0,r.mdx)("h3",{id:"the-event-status-is-0"},"The event status is ",(0,r.mdx)("inlineCode",{parentName:"h3"},"0")),(0,r.mdx)("p",null,"Events are sent by crons. If the status of an event in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data")," is still ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")," after a long period, then the crons are not configured correctly.\nIn a Cloud environment, check the logs. Cron execution might have been killed due to lack of space in the environment or other reasons."),(0,r.mdx)("h3",{id:"the-event-status-is-2"},"The event status is ",(0,r.mdx)("inlineCode",{parentName:"h3"},"2")),(0,r.mdx)("p",null,"The event status ",(0,r.mdx)("inlineCode",{parentName:"p"},"2")," indicates there was an error during transmission. Additional information can be found in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"info")," column of the table or in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"system.log")," file.\nThe following CLI command can show only logs related to the event batch sending."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"cat var/log/system.log | grep -i batch\n")),(0,r.mdx)("p",null,"The output contains information about any errors that occurred. For example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},'report.ERROR: Publishing of batch of 6 events failed: Error code: 500; reason: Server Error {"reason":null,"message":"Unexpected server error occurred"} [] []\nreport.INFO: Event data batch of 7 events was successfully published. [] []\nreport.INFO: Event data batch of 2 events was successfully published. [] []\n')),(0,r.mdx)("h3",{id:"client-id-is-invalid-error"},(0,r.mdx)("inlineCode",{parentName:"h3"},"Client ID is invalid")," error"),(0,r.mdx)("p",null,"The following error indicates the project in the Developer Console is missing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events for Adobe Commerce")," API."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},'Event publishing failed: Error code: 403; reason: Forbidden { "error": { "code": "Forbidden", "message": "Client ID is invalid", "details": { "error_code": "403003" } } }\n')),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"./project-setup.md#set-up-a-project"},"Set up a project")," describes how to add the required API.\nAfter adding the required API, download the workspace configuration for your project again and update it in the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Workspace Configuration")," field in the Adobe Commerce admin."),(0,r.mdx)("h3",{id:"the-status-shows-the-events-have-been-successfully-sent-but-they-were-not-received-in-the-event-registration"},"The status shows the events have been successfully sent, but they were not received in the event registration"),(0,r.mdx)("p",null,"If events are not received, determine if you have a different value for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Adobe Commerce Instance ID")," configured in the Adobe Commerce environment that is used in the event registration of the Developer Console."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1104px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.375000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/5530d/instance-name-developer-console.webp 320w","/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/0c8fb/instance-name-developer-console.webp 640w","/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/8d95b/instance-name-developer-console.webp 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/dd4a7/instance-name-developer-console.png 320w","/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/0f09e/instance-name-developer-console.png 640w","/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/829bf/instance-name-developer-console.png 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/ce3e51a885c1b3e4342fc05f91a5deef/829bf/instance-name-developer-console.png",alt:"Choose your instance ",title:"Choose your instance ",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"944px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/5530d/instance-name-developer-commerce.webp 320w","/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/0c8fb/instance-name-developer-commerce.webp 640w","/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/3d89b/instance-name-developer-commerce.webp 944w"],sizes:"(max-width: 944px) 100vw, 944px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/dd4a7/instance-name-developer-commerce.png 320w","/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/0f09e/instance-name-developer-commerce.png 640w","/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/26530/instance-name-developer-commerce.png 944w"],sizes:"(max-width: 944px) 100vw, 944px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/7b295df7992ca1db3e15e81ff9e66642/26530/instance-name-developer-commerce.png",alt:"Adobe Commerce instance ID",title:"Adobe Commerce instance ID",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"event-subscribe-cli-command-error"},"Event subscribe CLI command error"),(0,r.mdx)("p",null,"You might encounter the following error when attempting to subscribe to events with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"bin/magento events:subscribe")," command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},'Unsuccessful request: `POST https://api.adobe.io/events/xxxxx/eventmetadata` resulted in a `400 Bad Request` response:\n{"reason":"Bad Request. Request id: xxxxxxx.","message":"The current event provider\'s is associated with another workspace (check the provider\'s rel:update links to its workspace).."}\n')),(0,r.mdx)("p",null,"This error indicates the event provider configured in the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Event Provider ID")," field in the Admin is associated with a different workspace than the one configured in the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Workspace Configuration")," field.\nYou cannot create a new event subscription with an event provider that is associated with another workspace."),(0,r.mdx)("p",null,"You must specify an event provider created with the currently configured ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Workspace Configuration"),"."),(0,r.mdx)("h2",{id:"event-provider-is-not-shown-in-app-builder"},"Event provider is not shown in App Builder"),(0,r.mdx)("p",null,"After you create a new event provider, it might not appear in App Builder until it has at least one active subscribed event. Synchronize your event subscriptions from Adobe Commerce by using the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:metadata:populate\n")),(0,r.mdx)("p",null,"After refreshing the page with your App Builder project, you should be able to find the provider."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-troubleshooting-md-b3ec088b2768bff7f29e.js.map