"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[7698],{41139:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var n=a(87462),i=a(45987),r=(a(35776),a(3905)),o=a(91515);const m=["components"],s={},p={_frontmatter:s},d=o.Z;function c(e){let{components:t}=e,a=(0,i.Z)(e,m);return(0,r.mdx)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"configure-adobe-commerce"},"Configure Adobe Commerce"),(0,r.mdx)("p",null,"After you have created an ",(0,r.mdx)("a",{parentName:"p",href:"./project-setup.md"},"App Builder project")," and ",(0,r.mdx)("a",{parentName:"p",href:"./installation.md"},"install the eventing modules"),", you must download several files from the App Builder project and configure eventing in the Commerce admin."),(0,r.mdx)("h2",{id:"configure-the-adobe-io-connection"},"Configure the Adobe I/O connection"),(0,r.mdx)("p",null,"You must configure Commerce to communicate with your project. Configuration includes copying and pasting the contents of the ",(0,r.mdx)("a",{parentName:"p",href:"./project-setup.md#download-the-workspace-configuration-file"},"workspace configuration file")," that you downloaded from the Adobe Developer Console. If you decided to use JSON Web Tokens (JWT) as your server-to server authentication method, you must also upload a private key."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"In the Commerce Admin, navigate to ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > Settings > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Events")," > ",(0,r.mdx)("strong",{parentName:"p"},"General configuration"),". The following screen displays."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"991px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/5530d/general-configuration.webp 320w","/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/0c8fb/general-configuration.webp 640w","/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/6e312/general-configuration.webp 991w"],sizes:"(max-width: 991px) 100vw, 991px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/dd4a7/general-configuration.png 320w","/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/0f09e/general-configuration.png 640w","/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/f79d8/general-configuration.png 991w"],sizes:"(max-width: 991px) 100vw, 991px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/61dec672c13f2e6bded597e0d3c6b787/f79d8/general-configuration.png",alt:"General configuration",title:"General configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select the server-to-server authorization method you implemented from the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Authorization Type")," menu. Adobe recommends using OAuth. JWT has been deprecated.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"(JWT only) Copy and paste the contents of your ",(0,r.mdx)("inlineCode",{parentName:"p"},"private.key")," file into the ",(0,r.mdx)("strong",{parentName:"p"},"Service Account Private Key")," field. Use the following command to copy the contents."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"cat config/private.key | pbcopy\n")),(0,r.mdx)("p",{parentName:"li"},"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/"},"Service Account (JWT) Authentication")," for more information about the ",(0,r.mdx)("inlineCode",{parentName:"p"},"private.key")," file.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Copy the contents of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<workspace-name>.json")," file into the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Workspace Configuration")," field.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Enter a unique identifier in the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe Commerce Instance ID")," field. This value must contain English alphanumeric characters, underscores (_), and hyphens (-) only.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Save Config"),", but do not leave the page. The next section creates an event provider, which is necessary to complete the configuration."))),(0,r.mdx)("h2",{id:"create-an-event-provider-and-complete-the-commerce-configuration"},"Create an event provider and complete the Commerce configuration"),(0,r.mdx)("p",null,"You cannot create an event provider until you have configured and saved a workspace file and instance ID values. If you are using JWT for server-to-server authentication, you must also have previously specified the private key."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Run the following command to create an event provider:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento events:create-event-provider --label "<unique_provider_label>" --description "<provider description>"\n')),(0,r.mdx)("p",{parentName:"li"},"For example:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento events:create-event-provider --label "My_server_provider" --description "Provides out-of-process extensibility for Adobe Commerce"\n')),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Note"),": The label can contain English alphanumeric characters and underscores (_) only. The first character must be a letter."),(0,r.mdx)("p",{parentName:"li"},"The command displays a message similar to the following:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-terminal"},"No event provider found, a new event provider will be created\nA new event provider has been created with ID 63a1f8fe-e911-45a4-9d3f\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Copy the ID returned in the command output into the ",(0,r.mdx)("strong",{parentName:"p"},"Adobe I/O Event Provider ID")," field in the Admin."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/5530d/commerce-events.webp 320w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/0c8fb/commerce-events.webp 640w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/94b1e/commerce-events.webp 1280w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/50fb9/commerce-events.webp 1341w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/dd4a7/commerce-events.png 320w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/0f09e/commerce-events.png 640w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/bbbf7/commerce-events.png 1280w","/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/e5b55/commerce-events.png 1341w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/5eafb7950e76e19d0c31fd2685efadd1/bbbf7/commerce-events.png",alt:"Commerce events configuration",title:"Commerce events configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Enable Commerce Eventing by setting ",(0,r.mdx)("strong",{parentName:"p"},"Enabled")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Yes"),"."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},"Note"),": You must ",(0,r.mdx)("a",{parentName:"p",href:"#check-cron-and-message-queue-configuration"},"enable cron")," so that Commerce can send events to the endpoint.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Enter the merchant's company name in the ",(0,r.mdx)("strong",{parentName:"p"},"Merchant ID")," field. You must use alphanumeric and underscores only.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"In the ",(0,r.mdx)("strong",{parentName:"p"},"Environment ID")," field, enter a temporary name for your workspaces while you are in development mode. When you are ready for production, change this value to a permanent value, such as ",(0,r.mdx)("strong",{parentName:"p"},"Production"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"(Optional) By default, if an error occurs when Adobe Commerce attempts to send an event to Adobe I/O, Commerce retries a maximum of seven times. To change this value, uncheck the ",(0,r.mdx)("strong",{parentName:"p"},"Use system value")," checkbox and set a new value in the ",(0,r.mdx)("strong",{parentName:"p"},"Maximum retries to send events")," field.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"(Optional) By default, Adobe Commerce runs a cron job (clean_event_data) every 24 hours that deletes event data that is three days old. To change the number of days to retain event data, uncheck the ",(0,r.mdx)("strong",{parentName:"p"},"Use system value")," checkbox and set a new value in the ",(0,r.mdx)("strong",{parentName:"p"},"Event retention time (in days)")," field.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Click ",(0,r.mdx)("strong",{parentName:"p"},"Save Config"),"."))),(0,r.mdx)("p",null,"After you have completely configured and saved your Adobe I/O event connection and your event provider, you can click the ",(0,r.mdx)("strong",{parentName:"p"},"Send Test Event")," button to determine the status of the connection. The response displays beneath the button."),(0,r.mdx)("h2",{id:"subscribe-and-register-events"},"Subscribe and register events"),(0,r.mdx)("p",null,"You must define which Commerce events to subscribe to, then register them in the project."),(0,r.mdx)("p",null,"Commerce provides two sources for events: observers and plugins. You must specify the source as part of the event name. See ",(0,r.mdx)("a",{parentName:"p",href:"./commands.md"},"Subscribe to a Commerce event")," for details about the syntax of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:subscribe")," command."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"If you don't have a module ready for integration with Adobe I/O Events, or you don't know exactly which events to register at this point, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:subscribe")," command to subscribe to some sample events, as shown in the following example commands:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:subscribe observer.catalog_product_save_after --fields=sku --fields=stock_data.qty\n")),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento events:subscribe observer.customer_login --fields=firstname --fields=lastname --fields=entity_id\n")),(0,r.mdx)("p",{parentName:"li"}," ",(0,r.mdx)("strong",{parentName:"p"},"Warning"),": When you use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"events:subscribe")," command to subscribe to events on a Cloud environment, configuration information is stored in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file. You must keep in mind that this file can be replaced with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file from Git during deployment. As a result, the event subscription will be replaced as well.\nTo make these changes permanent, manually add the appropriate configuration to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file under Git."),(0,r.mdx)("p",{parentName:"li"},"If you have a module ready or have specific events in mind, see ",(0,r.mdx)("a",{parentName:"p",href:"./module-development.md#register-events"},"Register events")," for more information.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Return to your workspace. Click the ",(0,r.mdx)("strong",{parentName:"p"},"Add service")," pop-up menu and select ",(0,r.mdx)("strong",{parentName:"p"},"Event"),"."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"612px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/b6d2c50838534e50bac2441dde037e67/5530d/add-event.webp 320w","/commerce-extensibility/static/b6d2c50838534e50bac2441dde037e67/d408e/add-event.webp 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/b6d2c50838534e50bac2441dde037e67/dd4a7/add-event.png 320w","/commerce-extensibility/static/b6d2c50838534e50bac2441dde037e67/dbf98/add-event.png 612w"],sizes:"(max-width: 612px) 100vw, 612px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/b6d2c50838534e50bac2441dde037e67/dbf98/add-event.png",alt:"Click Add service in your workspace",title:"Click Add service in your workspace",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"On the ",(0,r.mdx)("strong",{parentName:"p"},"Add events")," page, select your event provider. Then click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select the events to subscribe to. Then click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),"."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1214px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/5530d/config-event-registration.webp 320w","/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/0c8fb/config-event-registration.webp 640w","/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/32dd4/config-event-registration.webp 1214w"],sizes:"(max-width: 1214px) 100vw, 1214px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/dd4a7/config-event-registration.png 320w","/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/0f09e/config-event-registration.png 640w","/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/2ed29/config-event-registration.png 1214w"],sizes:"(max-width: 1214px) 100vw, 1214px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/4e99d4d5903e93d3783d247e6f4f397e/2ed29/config-event-registration.png",alt:"Select the events to subscribe to",title:"Select the events to subscribe to",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Optionally create a new OAuth or JWT credential. Then click ",(0,r.mdx)("strong",{parentName:"p"},"Next"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Update the ",(0,r.mdx)("strong",{parentName:"p"},"Event registration name")," and ",(0,r.mdx)("strong",{parentName:"p"},"Event registration description")," fields. In the ",(0,r.mdx)("strong",{parentName:"p"},"How to receive events")," section, under ",(0,r.mdx)("strong",{parentName:"p"},"Option 2"),", select the runtime action you created in ",(0,r.mdx)("a",{parentName:"p",href:"./project-setup.md#set-up-app-builder-and-define-a-runtime-action"},"Set up App Builder and define a runtime action"),"."),(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"568px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/e6d3eee40cf7a4c040beb265c23cc3d5/5530d/select-runtime-action.webp 320w","/commerce-extensibility/static/e6d3eee40cf7a4c040beb265c23cc3d5/b2ce1/select-runtime-action.webp 568w"],sizes:"(max-width: 568px) 100vw, 568px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/e6d3eee40cf7a4c040beb265c23cc3d5/dd4a7/select-runtime-action.png 320w","/commerce-extensibility/static/e6d3eee40cf7a4c040beb265c23cc3d5/d63a8/select-runtime-action.png 568w"],sizes:"(max-width: 568px) 100vw, 568px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/e6d3eee40cf7a4c040beb265c23cc3d5/d63a8/select-runtime-action.png",alt:"Select a runtime action",title:"Select a runtime action",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Select ",(0,r.mdx)("strong",{parentName:"p"},"Save configured events"),"."))),(0,r.mdx)("p",null,"You are now set up to develop your App Builder extension."),(0,r.mdx)("h2",{id:"check-cron-and-message-queue-configuration"},"Check cron and message queue configuration"),(0,r.mdx)("p",null,"Cron and message queues must be enabled. Commerce uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"event_data_batch_send")," cron job to transmit batches of event messages and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"clean_event_data")," cron job to remove these messages from the database. These cron jobs are part of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"default")," group."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"commerce.eventing.event.publish")," message queue consumer helps expedite registered events that have been designated as priority. The consumer processes priority events within a second of their receipt. By default, it can take up to 59 seconds for cron to process standard-priority events."),(0,r.mdx)("p",null,"In Adobe Commerce on cloud infrastructure, update your ",(0,r.mdx)("inlineCode",{parentName:"p"},".magento.env.yaml")," file with the following changes to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"global")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"deploy")," stages:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"stage:\n  global:\n    ENABLE_EVENTING: true\n  deploy:\n    CRON_CONSUMERS_RUNNER:\n      cron_run: true\n      max_messages: 0\n      consumers: []\n")),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/configure/env/stage/variables-global.html"},"Global variables")," for more information about the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ENABLE_EVENTING")," variable."),(0,r.mdx)("p",null,"Cloud infrastructure and on-premises instances require different cron management procedures as described here:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/configure/app/properties/crons-property.html"},"Adobe Commerce on cloud infrastructure"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/crons/custom-cron-reference.html"},"On premises")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-configure-commerce-md-7453b72981dbe31a24bc.js.map