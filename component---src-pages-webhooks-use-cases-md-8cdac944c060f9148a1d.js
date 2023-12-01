"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[4983],{54154:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a=t(87462),r=t(45987),o=(t(35776),t(3905)),s=t(91515);const i=["components"],d={},l={_frontmatter:d},c=s.Z;function u(e){let{components:n}=e,t=(0,r.Z)(e,i);return(0,o.mdx)(c,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"webhooks-use-cases"},"Webhooks use cases"),(0,o.mdx)("p",null,"This topic uses common scenarios to describe how to implement webhooks on Adobe Commerce. Each example provides a webhook configuration fragment as well as the default and configured webhook payload. Some examples also include sample code that define the basic logic of an operation in an App Builder app."),(0,o.mdx)("h2",{id:"discount-code-validation"},"Discount code validation"),(0,o.mdx)("p",null,"A merchant uses a third-party extension to create and manage discount codes. When a shopper applies a coupon code to their cart, the coupon code must be validated. The Commerce checkout process can continue if the code is valid. Otherwise, the following error message displays on the Payment Method checkout page:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},'App Builder Webhook Response: The discount code "<code-value>" is not valid\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Webhook name:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"plugin.magento.quote.api.guest_coupon_management.set")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Default payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "cartId": "string",\n    "couponCode": "string"\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"webhook.xml configuration:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<method name="plugin.magento.quote.api.guest_coupon_management.set" type="before">\n    <hooks>\n        <batch>\n            <hook name="validate_discount_code" url="{env:APP_BUILDER_URL}/validate-discount-code" method="POST" timeout="5000" softTimeout="1000" priority="300" required="true" fallbackErrorMessage="The discount code can not be validated">\n                <headers>\n                    <header name="x-gw-ims-org-id">{env:APP_BUILDER_IMS_ORG_ID}</header>\n                    <header name="Authorization">Bearer {env:APP_BUILDER_AUTH_TOKEN}</header>\n                </headers>\n                <fields>\n                    <field name="discountCode.cartId" source="cartId" />\n                    <field name="discountCode.couponCode" source="couponCode" />\n                </fields>\n            </hook>\n        </batch>\n    </hooks>\n</method>\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Configured payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "discountCode": {\n        "cartId": "string",\n        "couponCode": "string"\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint code example:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const fetch = require('node-fetch')\nconst { Core } = require('@adobe/aio-sdk')\nconst { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')\n \n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n \n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n \n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n \n    //check for missing request input parameters and headers\n    const requiredParams = [/* add required params */]\n    const requiredHeaders = ['Authorization']\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n \n    const discountCode = params.discountCode\n    console.log(discountCode)\n \n    // Place the real validation (calling 3rd party endpoints) here.\n    // In this example, we check if the coupon code contains the string `test`.\n    // If it does, the request is considered invalid.\n\n    const response = {statusCode: 200}\n    if (discountCode && discountCode.couponCode.toLowerCase().includes('test')) {\n      response.body = JSON.stringify({\n          op: \"exception\",\n          message: `App Builder Webhook Response: The discount code \"${discountCode.couponCode}\" is not valid`\n        })\n    } else {\n      response.body = JSON.stringify({\n        op: \"success\"\n      })\n    }\n \n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")),(0,o.mdx)("p",null,"If validation fails, the runtime AppBuilder action returns an exception message."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'response.body = JSON.stringify({\n    op: "exception",\n    message: `App Builder Webhook Response: The discount code "${discountCode.couponCode}" is not valid`\n})\n')),(0,o.mdx)("h2",{id:"gift-card-validation"},"Gift card validation"),(0,o.mdx)("p",null,"In this example, Commerce calls a third-party gift card provider to validate the gift card."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Webhook:")),(0,o.mdx)("p",null,"plugin.magento.gift_card_account.api.gift_card_account_management.save_by_quote_id"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Default payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "cartId": null,\n    "giftCardAccountData": {\n        "gift_cards": "string[]",\n        "gift_cards_amount": "float",\n        "base_gift_cards_amount": "float",\n        "gift_cards_amount_used": "float",\n        "base_gift_cards_amount_used": "float",\n        "extension_attributes": []\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"webhook.xml configuration:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<method name="plugin.magento.gift_card_account.api.gift_card_account_management.save_by_quote_id" type="before">\n    <hooks>\n        <batch>\n            <hook name="validate_gift_card" url="{env:APP_BUILDER_URL}/validate-gift-card" method="POST" timeout="5000" softTimeout="1000" required="true" fallbackErrorMessage="The gift card cannot be validated">\n                <headers>\n                    <header name="x-gw-ims-org-id">{env:APP_BUILDER_IMS_ORG_ID}</header>\n                    <header name="Authorization">Bearer {env:APP_BUILDER_AUTH_TOKEN}</header>\n                </headers>\n                <fields>\n                    <field name="giftCard.cartId" source="cartId" />\n                    <field name="giftCard.gift_cards" source="giftCardAccountData.gift_cards" />\n                </fields>\n            </hook>\n        </batch>\n    </hooks>\n</method>\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Configured payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "giftCard": {\n        "cartId": null,\n        "gift_cards": "string[]"\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint code example:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const fetch = require('node-fetch')\nconst { Core } = require('@adobe/aio-sdk')\nconst { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')\n \n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n \n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n \n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n \n    // check for missing request input parameters and headers\n    const requiredParams = [/* add required params */]\n    const requiredHeaders = ['Authorization']\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n \n    // Place the real validation (calling 3rd party endpoints) here.\n    // In this example, we check if the postal code is larger than 70000.\n    // If it is, the request is considered invalid.\n\n    const response = {statusCode: 200}\n    const address = params.address\n    if (address.postcode > 70000) {\n      response.body = JSON.stringify({\n        op: \"exception\",\n        message: `App Builder Webhook Response: The address with postcode  \"${address.postcode}\" is not valid`,\n        type: \"Magento\\\\Framework\\\\Exception\\\\InputException\"\n      })\n    } else {\n      response.body = JSON.stringify({\n        op: \"success\"\n      })\n    }\n \n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n \nexports.main = main\n")),(0,o.mdx)("p",null,"If validation fails, the runtime AppBuilder action returns an exception message. The message is visible to the customer."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'response.body = JSON.stringify({\n    op: "exception",\n    message: `App Builder Webhook Response: The gift card code "${giftCards[i]}" is not valid`\n})\n')),(0,o.mdx)("h2",{id:"add-product-to-cart"},"Add product to cart"),(0,o.mdx)("p",null,"When a shopper adds a product to the cart, a third-party inventory management system checks whether the item is in stock. If it is, allow the product to be added. Otherwise, display an error message."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Webhook:")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"observer.checkout_cart_product_add_before")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Default Payload:")),(0,o.mdx)("p",null,"The following ",(0,o.mdx)("inlineCode",{parentName:"p"},"observer.checkout_cart_product_add_before")," payload was obtained from the code execution in the application. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"extension_attributes")," section was deleted for brevity."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "subject": [],\n    "eventName": "checkout_cart_product_add_before",\n    "data": {\n        "info": {\n            "uenc": "<value>",\n            "product": "23",\n            "selected_configurable_option": "",\n            "related_product": "",\n            "item": "23",\n            "form_key": "<value>",\n            "qty": "1"\n        },\n        "product": {\n            "store_id": "1",\n            "entity_id": "23",\n            "attribute_set_id": "4",\n            "type_id": "simple",\n            "sku": "Product 1",\n            "has_options": "0",\n            "required_options": "0",\n            "created_at": "2023-08-22 14:14:20",\n            "updated_at": "2023-08-22 14:54:44",\n            "row_id": "23",\n            "created_in": "1",\n            "updated_in": "2147483647",\n            "name": "Product test 22",\n            "meta_title": "Product 1",\n            "meta_description": "Product 1 ",\n            "page_layout": "product-full-width",\n            "options_container": "container2",\n            "country_of_manufacture": "AM",\n            "url_key": "product-1",\n            "msrp_display_actual_price_type": "0",\n            "gift_message_available": "2",\n            "gift_wrapping_available": "2",\n            "is_returnable": "2",\n            "status": "1",\n            "visibility": "4",\n            "tax_class_id": "2",\n            "price": "123.000000",\n            "weight": "12.000000",\n            "meta_keyword": "Product 1",\n            "options": [],\n            "media_gallery": {\n                "images": [],\n                "values": []\n            },\n            "extension_attributes": {\n                ...\n            },\n            "tier_price": [],\n            "tier_price_changed": 0,\n            "quantity_and_stock_status": {\n                "is_in_stock": true,\n                "qty": 1233\n            },\n            "category_ids": [\n                "4",\n                "5",\n                "2",\n                "3"\n            ],\n            "is_salable": 1,\n            "website_ids": [\n                "1"\n            ]\n        }\n    }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"webhook.xml configuration:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<method name="observer.checkout_cart_product_add_before" type="before">\n    <hooks>\n        <batch>\n            <hook name="validate_stock" url="{env:APP_BUILDER_URL}/product-validate-stock" timeout="5000"\nsoftTimeout="100" priority="100" required="true" fallbackErrorMessage="The product stock validation failed">\n                <headers>\n                    <header resolver="Magento\\WebhookModule\\Model\\AddProductToCartResolver" />\n                </headers>\n                <fields>\n                    <field name=\'product.name\' source=\'data.product.name\' />\n                    <field name=\'product.category_ids\' source=\'data.product.category_ids\' />\n                    <field name=\'product.sku\' source=\'data.product.sku\' />\n                </fields>\n            </hook>\n        </batch>\n    </hooks>\n</method>\n')),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Configured payload:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "product": {\n        "name": "string",\n        "category_ids": "string[]",\n        "sku": "string"\n    }\n}\n')),(0,o.mdx)("h2",{id:"overwrite-tax-calculation"},"Overwrite tax calculation"),(0,o.mdx)("p",null,"When a shopper goes to the checkout, a third-party system calculates taxes based on quote details and overwrites the default tax values."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"webhook.xml configuration:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<method name="plugin.magento.tax.api.tax_calculation.calculate_tax" type="after">\n    <hooks>\n        <batch>\n            <hook name="update_order" url="{env:APP_BUILDER_URL}/calculate-taxes" method="POST" timeout="5000" softTimeout="1000" priority="300" required="false" fallbackErrorMessage="The taxes can not be calculated">\n                <headers>\n                    <header name="x-gw-ims-org-id">{env:APP_BUILDER_IMS_ORG_ID}</header>\n                    <header name="Authorization">Bearer {env:APP_BUILDER_AUTH_TOKEN}</header>\n                </headers>\n                <fields>\n                    <field name="quoteDetails" />\n                </fields>\n            </hook>\n        </batch>\n    </hooks>\n</method>\n')),(0,o.mdx)("p",null,"The third-party endpoint receives the following payload, which is based on the configured list of fields:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "quoteDetails": {\n    "billing_address": {\n      "region": {\n        "region_code": null,\n        "region": null,\n        "region_id": 57\n      },\n      "country_id": "US",\n      "street": [\n        "123 Domain Dr"\n      ],\n      "postcode": "78768",\n      "city": "Austin"\n    },\n    "shipping_address": {\n      ...\n    },\n    "customer_tax_class_key": {\n      "type": "id",\n      "value": "3"\n    },\n    "items": [\n      {\n        "code": "sequence-1",\n        "quantity": 1,\n        "tax_class_key": {\n          "type": "id",\n          "value": "2"\n        },\n        "is_tax_included": false,\n        "type": "product",\n        "extension_attributes": {\n          "price_for_tax_calculation": 200\n        },\n        "unit_price": 200,\n        "discount_amount": 0,\n        "parent_code": null\n      },\n      {\n        "code": "sequence-2",\n        "quantity": 1,\n        "tax_class_key": {\n          "type": "id",\n          "value": "2"\n        },\n        "is_tax_included": false,\n        "type": "product",\n        "extension_attributes": {\n          "price_for_tax_calculation": 100\n        },\n        "unit_price": 100,\n        "discount_amount": 0,\n        "parent_code": null\n      },\n      {\n        "type": "shipping",\n        "code": "shipping",\n        "quantity": 1,\n        "unit_price": 10,\n        "tax_class_key": {\n          "type": "id",\n          "value": 0\n        },\n        "is_tax_included": false,\n        "extension_attributes": []\n      }\n    ],\n    "customer_id": null\n  }\n}\n')),(0,o.mdx)("p",null,"Based on the input arguments and third-party endpoint logic, the tax percentage should be ",(0,o.mdx)("inlineCode",{parentName:"p"},"19"),". The response operations list can look like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "op": "replace",\n        "path": "result/items/sequence-1",\n        "value": {\n            "row_tax": 38,\n            "price_incl_tax": 238,\n            "row_total_incl_tax": 238,\n            "tax_percent": 19\n        }\n    },\n    {\n        "op": "replace",\n        "path": "result/items/sequence-2",\n        "value": {\n            "row_tax": 19,\n            "price_incl_tax": 119,\n            "row_total_incl_tax": 119,\n            "tax_percent": 19\n        }\n    },\n    {\n        "op": "replace",\n        "path": "result/items/shipping",\n        "value": {\n            "row_tax": 1.9,\n            "price_incl_tax": 11.9,\n            "row_total_incl_tax": 11.9,\n            "tax_percent": 19\n        }\n    },\n    {\n        "op": "replace",\n        "path": "result/tax_amount",\n        "value": 58.9\n    },\n    {\n        "op": "replace",\n        "path": "result/applied_taxes/amount",\n        "value": 58.9\n    },\n    {\n        "op": "replace",\n        "path": "result/applied_taxes/percent",\n        "value": 19\n    }\n]\n')),(0,o.mdx)("p",null,"The result of ",(0,o.mdx)("inlineCode",{parentName:"p"},"plugin.magento.tax.api.tax_calculation.calculate_tax")," will be modified based on the provided operations."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Endpoint code example for the AppBuilder action:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const { Core } = require('@adobe/aio-sdk')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils')\n \n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n \n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n \n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n \n    //check for missing request input parameters and headers\n    const requiredParams = [/* add required params */]\n    const requiredHeaders = ['Authorization']\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n \n    const quoteDetails = params.quoteDetails;\n    console.log(JSON.stringify(quoteDetails, null, 4));\n    let total = 0;\n    let operations = [];\n \n    // Skip tax calculation if billing addres does not contain postcode\n    if (!quoteDetails.billing_address.postcode) {\n      return {\n        statusCode: 200,\n        body: JSON.stringify({\n          op: \"success\"\n        })\n      }\n    }\n \n    // Just for demo purposes, the taxPercent is equal to: last number in zip code + 10\n    const taxPercent = 10 + parseInt(quoteDetails.billing_address.postcode.slice(-1));\n \n    quoteDetails.items.forEach((item) => {\n      total += item.quantity * item.unit_price;\n      const itemTax = item.unit_price * taxPercent / 100;\n      operations.push({\n        op: 'replace',\n        path: 'result/items/' + item.code,\n        value: {\n          'row_tax': itemTax * item.quantity,\n          'price_incl_tax': item.unit_price + itemTax,\n          'row_total_incl_tax': item.unit_price + itemTax * item.quantity,\n          'tax_percent': taxPercent,\n        }\n      })\n    })\n    operations.push({\n      op: 'replace',\n      path: 'result/tax_amount',\n      value: total * taxPercent / 100\n    });\n    operations.push({\n      op: 'replace',\n      path: 'result/applied_taxes/amount',\n      value: total * taxPercent / 100\n    });\n    operations.push({\n      op: 'replace',\n      path: 'result/applied_taxes/percent',\n      value: taxPercent\n    });\n \n    return {\n      statusCode: 200,\n      body: JSON.stringify(operations)\n    }\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n \nexports.main = main\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-webhooks-use-cases-md-8cdac944c060f9148a1d.js.map