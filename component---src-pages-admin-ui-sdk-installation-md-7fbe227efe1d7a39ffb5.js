"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[7380],{41536:function(e,a,m){m.r(a),m.d(a,{_frontmatter:function(){return i},default:function(){return u}});var n,t=m(87462),o=m(63366),d=(m(15007),m(64983)),r=m(91515),p=["components"],i={},l=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:i},c=r.Z;function u(e){var a=e.components,m=(0,o.Z)(e,p);return(0,d.mdx)(c,(0,t.Z)({},s,m,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"install-adobe-commerce-admin-ui-sdk"},"Install Adobe Commerce Admin UI SDK"),(0,d.mdx)("p",null,"This topic describes the basic steps to install the Admin UI SDK."),(0,d.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,d.mdx)("h3",{id:"adobe-commerce"},"Adobe Commerce"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Adobe Commerce on cloud infrastructure or on premises: 2.4.5+"),(0,d.mdx)("li",{parentName:"ul"},"PHP 8.1+"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-admin/start/admin/ims/adobe-ims-integration-overview.html"},"Adobe Identity Management Service (IMS) for Adobe Commerce"))),(0,d.mdx)(l,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Magento Open Source is not supported."),(0,d.mdx)("h3",{id:"adobe-app-builder"},"Adobe App Builder"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/getting_started/"},"Adobe App Builder ",(0,d.mdx)("em",{parentName:"a"},"Getting Started")," guide")," lists the latest software requirements for creating App Builder apps."),(0,d.mdx)("h2",{id:"installation-steps"},"Installation steps"),(0,d.mdx)("p",null,"You can install the Admin UI SDK on Adobe Commerce on cloud infrastructure and on-premises instances."),(0,d.mdx)("h3",{id:"enable-adobe-ims-for-commerce"},"Enable Adobe IMS for Commerce"),(0,d.mdx)("p",null,"You must implement Adobe Identity Management Service (IMS) for Adobe Commerce to use the Admin UI SDK. ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-admin/start/admin/ims/adobe-ims-config.html?lang=en"},"Configure the Commerce Admin Integration with Adobe ID")," describes this process."),(0,d.mdx)("h3",{id:"adobe-commerce-on-cloud-infrastructure"},"Adobe Commerce on cloud infrastructure"),(0,d.mdx)("p",null,"This method installs the SDK on a cloud instance."),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"On your local workstation, change to the Cloud project root directory.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Update your ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer.json")," file:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},'composer require "magento/module-commerce-backend-uix": ">=1.0"\n'))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Update dependencies and install the extension:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update\n")),(0,d.mdx)("p",{parentName:"li"},"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer update")," command updates all dependencies. If you do not want to update all dependencies at the same time, use this command instead:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update magento/module-commerce-backend-uix\n"))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Commit and push your changes."))),(0,d.mdx)("h3",{id:"on-premises"},"On-premises"),(0,d.mdx)("p",null,"This method installs the SDK on an On-premises instance."),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Add the SDK module to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"require")," section of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer.json")," file:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},'composer require "magento/module-commerce-backend-uix": ">=1.0"\n'))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Update dependencies and install the extension:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update\n")),(0,d.mdx)("p",{parentName:"li"},"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"composer update")," command updates all dependencies. If you do not want to update all dependencies at the same time, use this command instead:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update magento/module-commerce-backend-uix\n"))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Upgrade Adobe Commerce:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade\n"))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Clear the cache:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n"))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Commit your changes.")),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Update your on-premises instance to ensure the committed code is deployed."))),(0,d.mdx)("h2",{id:"update-the-commerce-admin-ui-sdk"},"Update the Commerce Admin UI SDK"),(0,d.mdx)("p",null,"Use the following procedure to update patch versions of the SDK, such as from V1.0.0 to V1.1.0."),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Run the following command to update the SDK:"),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update magento/module-commerce-backend-uix\n"))),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("p",{parentName:"li"},"Run the following commands to upgrade Adobe Commerce and clear the cache."),(0,d.mdx)("pre",{parentName:"li"},(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade && bin/magento cache:clean\n")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-ui-sdk-installation-md-7fbe227efe1d7a39ffb5.js.map