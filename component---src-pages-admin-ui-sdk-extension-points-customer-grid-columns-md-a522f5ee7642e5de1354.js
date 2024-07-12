"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[4615],{32258:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return s}});var a=t(87462),m=t(45987),r=(t(35776),t(3905)),l=t(91515);const d=["components"],i={},o={_frontmatter:i},p=l.Z;function s(e){let{components:n}=e,t=(0,m.Z)(e,d);return(0,r.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"customer-grid-columns"},"customer grid columns"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"customer grid columns")," extension point enables you to add columns to the grid on the ",(0,r.mdx)("strong",{parentName:"p"},"Customers")," > ",(0,r.mdx)("strong",{parentName:"p"},"All Customers")," page in the Adobe Commerce Admin. This extension point requires an ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/graphql-mesh-gateway/gateway"},"API Mesh")," for Adobe Developer App Builder instance to retrieve the data to be added to the custom columns."),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/graphql-mesh-gateway/gateway/command-reference/#aio-api-meshdescribe"},(0,r.mdx)("inlineCode",{parentName:"a"},"aio api-mesh:describe")," command")," to retrieve the values of the API key and mesh ID. The key is appended to the mesh endpoint URL."),(0,r.mdx)("h2",{id:"example-customization"},"Example customization"),(0,r.mdx)("p",null,"​The following example creates custom columns labeled ",(0,r.mdx)("inlineCode",{parentName:"p"},"First App Column")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"Second App Column"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"customer: {\n    getGridColumns() {\n        return {\n            data:{\n                meshId:'MESH_ID',\n                apiKey: 'API_KEY'\n            },\n            properties:[\n                {\n                    label: 'First App Column',\n                    columnId: 'first_column',\n                    type: 'string',\n                    align: 'left'\n                },\n                {\n                    label: 'Second App Column',\n                    columnId: 'second_column',\n                    type: 'integer',\n                    align: 'left'\n                }\n            ]\n        }\n    }\n}\n")),(0,r.mdx)("h3",{id:"sample-api-mesh-configuration-file"},"Sample API Mesh configuration file"),(0,r.mdx)("p",null,"The following sample mesh configuration file defines the external source that contains the data to populate in the custom columns."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "meshConfig": {\n        "sources": [\n            {\n                "name": "customers",\n                "handler": {\n                    "JsonSchema": {\n                        "baseUrl": "https://www.example.com",\n                        "operations": [\n                            {\n                                "type": "Query",\n                                "field": "customers",\n                                "path": "/graphql",\n                                "method": "GET",\n                                "responseSchema": "./schema.json"\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n} \n')),(0,r.mdx)("h3",{id:"sample-schema-file"},"Sample schema file"),(0,r.mdx)("p",null,"This sample ",(0,r.mdx)("inlineCode",{parentName:"p"},"schema.json")," file is referenced in the mesh configuration file. It defines the response of the external ",(0,r.mdx)("inlineCode",{parentName:"p"},"customerGridColumns")," query that fetches column data."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "http://json-schema.org/draft-04/schema#",\n    "type": "object",\n    "properties": {\n      "customerGridColumns": {\n        "type": "object",\n        "patternProperties": {\n          "^0": {\n            "type": "object",\n            "properties": {\n              "first_column": {\n                "type": "string"\n              },\n              "second_column": {\n                "type": "integer"\n              },\n              "third_column": {\n                "type": "integer"\n              }\n            }\n          }\n        }\n      }\n    },\n    "required": [\n      "customerGridColumns"\n    ]\n}\n')),(0,r.mdx)("h2",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"data.apiKey")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The API key assigned to the GraphQL mesh.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"data.meshId")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID of the mesh used to retrieve the column data.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"properties.align")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The alignment of the values in the column. One of ",(0,r.mdx)("inlineCode",{parentName:"td"},"left"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"right"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"center"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"properties.columnId")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The identifier used in the external dataset to identify the column.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"properties.label")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The label of the column to display.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"properties.type")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The data type of the values in the column. Supported values: ",(0,r.mdx)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"date"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"float"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"integer"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"string"),". Date values must be ISO 8601-compliant.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-ui-sdk-extension-points-customer-grid-columns-md-a522f5ee7642e5de1354.js.map