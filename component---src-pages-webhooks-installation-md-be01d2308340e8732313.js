"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[6649],{39630:function(e,a,o){o.r(a),o.d(a,{_frontmatter:function(){return d},default:function(){return s}});var n=o(87462),m=o(45987),t=(o(35776),o(3905)),l=o(91515);const r=["components"],d={},p={_frontmatter:d},i=l.Z;function s(e){let{components:a}=e,o=(0,m.Z)(e,r);return(0,t.mdx)(i,(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"install-adobe-commerce-webhooks"},"Install Adobe Commerce Webhooks"),(0,t.mdx)("p",null,"The following steps apply to both Adobe Commerce on cloud infrastructure and on-premises installations. Cloud customers must perform additional steps to configure the ",(0,t.mdx)("inlineCode",{parentName:"p"},"ece-tools")," package."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Use the following command to load the webhooks modules:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"composer require magento/commerce-webhooks=^1.0 --no-update\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Update the project dependencies."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Enable the new modules:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:enable --all\n")))),(0,t.mdx)("h2",{id:"on-premise-installation"},"On-premise installation"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Run the following command to initialize the ",(0,t.mdx)("inlineCode",{parentName:"p"},"AdobeCommerceWebhookPlugins")," module. This module consists of generated plugins based on a list of subscribed webhooks."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento webhooks:generate:module\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Enable the generated modules:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:enable Magento_AdobeCommerceWebhookPlugins\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Upgrade your instance:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Compile your instance to generate new classes:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:di:compile\n")))),(0,t.mdx)("h2",{id:"cloud-configuration"},"Cloud configuration"),(0,t.mdx)("p",null,"Use the following steps to perform additional configuration for Adobe Commerce on cloud infrastructure:"),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Add the ",(0,t.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file to your working repository:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"git add app/etc/config.php\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Run the ",(0,t.mdx)("inlineCode",{parentName:"p"},"composer info magento/ece-tools")," command to determine your version of ece-tools. If the version is less than ",(0,t.mdx)("inlineCode",{parentName:"p"},"2002.1.16"),", ",(0,t.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/ece-tools/update-package.html"},"update to the most recent version"),".")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Enable webhooks in the ",(0,t.mdx)("inlineCode",{parentName:"p"},".magento.env.yaml")," file:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-yaml"},"stage:\n   global:\n      ENABLE_WEBHOOKS: true\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Commit and push updated files to the Cloud environment."))),(0,t.mdx)("h2",{id:"update-adobe-commerce-webhooks"},"Update Adobe Commerce Webhooks"),(0,t.mdx)("p",null,"Use the following procedure to update minor or patch versions of Adobe Commerce Webhooks, such as from V1.0.0 to V1.1.0."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Run the following command to update the webhook modules:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"composer update magento/commerce-webhooks --with-dependencies\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"For on-premises installations, run the following command to upgrade Adobe Commerce and clear the cache."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade && bin/magento cache:clean\n")),(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("strong",{parentName:"p"},"Note:")," Adobe Commerce on cloud infrastructure upgrades automatically."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-webhooks-installation-md-be01d2308340e8732313.js.map