(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{20640:function(e,t,a){"use strict";var r=a(11742),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,n,i,o,l,c,d=!1;t||(t={}),a=t.debug||!1;try{if(i=r(),o=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=s[t.format]||s.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),o.selectNodeContents(c),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),n=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}},58673:function(e,t,a){"use strict";var r=a(83789),s=a(4254),n=a(5116),i=a(64330),o=a.n(i),l=a(85893),c=function(e){var t=e.data,a=e.direction,i=e.hideLegend,c=t.categories,d=t.series,u=c.map((function(e){return{title:e.title,background:e.background}})),h=Math.max.apply(Math,(0,r.Z)(d.map((function(e){return e.values.map((function(e){return e.value}))})).flat()));return(0,l.jsxs)("div",{className:o().ChartBar,"data-direction":a,children:["vertical"===a&&!i&&(0,l.jsx)(n.Z,{legend:u}),(0,l.jsx)("div",{className:o().ChartBar_series,children:d.map((function(e,r){return(0,l.jsxs)("div",{className:o().ChartBar_series_item,children:[(0,l.jsx)("div",{className:o().ChartBar_series_item_chartsWrapper,children:e.values.map((function(e,r){var n=e.value/h*100,d=c.find((function(t){return t.id===e.categoryId})),u=d.title,m=d.background,g="".concat(Math.max(1,n).toFixed(),"%"),p="horizontal"===a?{width:g,background:m}:{height:g,background:m};return(0,l.jsxs)("div",{className:o().ChartBar_series_item_chart,children:[!i&&(0,l.jsx)("div",{className:o().ChartBar_series_item_chart_legend,children:u}),(0,l.jsx)("div",{className:o().ChartBar_series_item_chart_wrapper,children:(0,l.jsx)("span",{className:o().ChartBar_series_item_chart_bar,style:p,children:(0,l.jsx)("span",{className:o().ChartBar_series_item_chart_value,children:0===e.value?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"font-blimone text-lg",children:"\u2245"}),"0"]}):"".concat((0,s.G)(e.value),"\n                            ").concat(t.units?t.units:"")})})})]},r)}))}),(0,l.jsx)("div",{className:o().ChartBar_series_item_label,children:(0,l.jsx)("strong",{children:e.title})})]},r)}))})]})};c.defaultProps={direction:"horizontal",hideLegend:!1},t.Z=c},98471:function(e,t,a){"use strict";var r=a(4254),s=a(5116),n=a(47207),i=a.n(n),o=a(85893),l=function(e){var t=e.data,a=e.showValues,n=e.showPercentages,l=e.inlineLegend,c=t.categories,d=t.series,u=t.units,h=c.map((function(e){return{title:e.title,background:e.background}}));return(0,o.jsxs)("div",{className:i().CharBarSegmented,children:[!l&&(0,o.jsx)(s.Z,{legend:h}),(0,o.jsx)("div",{className:i().CharBarSegmented_series,children:d.map((function(e,t){var s=e.title,d=e.values,h=d.reduce((function(e,t){return e+t.value}),0);return(0,o.jsxs)("div",{className:i().CharBarSegmented_series_item,children:[s&&(0,o.jsx)("div",{className:i().CharBarSegmented_series_item_label,children:s}),(0,o.jsx)("div",{className:i().CharBarSegmented_series_item_chartsWrapper,children:d.map((function(e,t){var s=e.value,d=e.categoryId,m=c.filter((function(e){return e.id===d}))[0],g=m.background,p=m.title,f=s/h*100;return(0,o.jsxs)("div",{className:i().CharBarSegmented_series_item_chart,style:{width:"".concat(f.toFixed(),"%")},children:[(0,o.jsxs)("div",{className:i().CharBarSegmented_series_item_chartLabel,children:[n&&(0,o.jsxs)("strong",{children:[(0,r.G)(f),"%"]}),a&&(0,o.jsxs)(o.Fragment,{children:[!n&&(0,o.jsxs)("strong",{children:[(0,r.G)(s),u]}),n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),"(",(0,r.G)(s),u,")"]})]}),l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("br",{}),p]})]}),(0,o.jsx)("div",{className:i().CharBarSegmented_series_item_chartBar,style:{background:g}})]},t)}))})]},t)}))})]})};l.defaultProps={showValues:!0,showPercentages:!0,inlineLegend:!1},t.Z=l},52897:function(e,t,a){"use strict";var r=a(67294),s=a(47134),n=a(57397),i=a(77722),o=a(33531),l=a(90689),c=a.n(l),d=a(85893);t.Z=function(e){var t=e.title,a=e.shape,l=e.children,u=(0,r.useContext)(s.Z);if(!u)throw new Error("colorScheme is not defined");return(0,d.jsxs)("div",{className:c().PageHero,"data-color-scheme":u,children:[(0,d.jsxs)("div",{className:c().PageHero_content,children:[(0,d.jsx)("div",{className:c().PageHero_backgroundEffect,children:(0,d.jsx)(n.Z,{shape:a,colorScheme:u,rowHeight:50,itemsDensity:30})}),(0,d.jsx)("div",{className:c().PageHero_bottomGradient}),(0,d.jsx)("div",{className:c().PageHero_heading,children:(0,d.jsx)(o.Z,{children:(0,d.jsx)("div",{className:c().PageHero_headingText,children:(0,d.jsx)(i.Z.H1,{children:t})})})})]}),(0,d.jsx)(o.Z,{children:l})]})}},97945:function(e,t,a){"use strict";var r=a(67294),s=a(47134),n=a(55578),i=a(75081),o=a(42485),l=a(33531),c=a(64635),d=a.n(c),u=a(85893);t.Z=function(){var e=(0,r.useContext)(o.ZP),t=e.items,a=e.scrollTo,c=(0,r.useContext)(s.Z);return(0,u.jsx)("div",{className:d().ScrollToTableOfContents,"data-color-scheme":c,children:(0,u.jsx)(l.Z,{children:(0,u.jsx)("nav",{className:d().ScrollToTableOfContents_container,children:(0,u.jsx)("ol",{children:t.map((function(e){return(0,u.jsx)("li",{className:d().ScrollToTableOfContents_item,children:(0,u.jsx)(i.Z,{href:"#".concat(e.data.itemId),onClick:function(t){t.preventDefault(),a(e.data.itemId)},className:d().ScrollToTableOfContents_item_link,analyticsContext:{text:e.data.itemTitle,target:"#".concat(e.data.itemId)},children:(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("span",{children:(0,u.jsx)(n.Z,{number:e.data.itemOrder})})," ",(0,u.jsx)("span",{className:d().ScrollToTableOfContents_item_text,children:e.data.itemTitle})]})})},e.data.itemId)}))})})})})}},45890:function(e,t,a){"use strict";var r=a(98471),s=a(85893),n={categories:[{id:0,title:"No README",background:"linear-gradient(270deg, #0E3789 0%, #072254 103.38%)"},{id:1,title:"With README",background:"linear-gradient(270deg, #57CBE4 25.52%, #3AA0EB 100%)"}],series:[{title:"Open Source",values:[{categoryId:0,value:33544},{categoryId:1,value:204373}]},{title:"Open source at work",values:[{categoryId:0,value:6e3},{categoryId:1,value:42954}]},{title:"Work",values:[{categoryId:0,value:796235},{categoryId:1,value:147975}]}]};t.Z=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{data:n})})}},31139:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return ee},default:function(){return te}});var r,s,n=a(13629),i=a(52897),o=a(97945),l=a(77417),c=a(44978),d=a(77722),u=a(80273),h=a(85893),m=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Z.H2,{className:"lg:w-6/12 mb-8",children:"No matter the format, documentation is important"}),(0,h.jsxs)("div",{className:"flex flex-col gap-8 lg:flex-row lg:gap-24",children:[(0,h.jsxs)("div",{className:"lg:w-1/2 flex flex-col gap-8 lg:pb-8",children:[(0,h.jsx)(c.Z,{size:"big",children:(0,h.jsx)("p",{children:"Building on top of others\u2019 work in a community-like way can be an accelerator, both in open source and in companies. Documentation often signals if a repository is reliable to reuse code from, or if it\u2019s an active project to contribute to. What signs do developers look for?"})}),(0,h.jsxs)("div",{className:"w-2/3 lg:w-1/2",children:[(0,h.jsx)(c.Z,{size:"small",highlight:!0,children:(0,h.jsx)("p",{children:"In both open source projects and enterprises, developers see about"})}),(0,h.jsx)(u.Z,{number:50,units:"%"}),(0,h.jsx)(c.Z,{size:"small",highlight:!0,children:(0,h.jsx)("p",{children:"productivity boost with easy-to-source documentation"})})]})]}),(0,h.jsx)("div",{className:"lg:w-1/2",children:(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows:"})," At work, developers consider documentation trustworthy when it is up-to-date (e.g., looking at time-stamps) and has a high number of upvotes from others. Open source projects use READMEs, contribution guidelines, and GitHub Issues, to elevate the quality of any project, and to share information that makes them more attractive to new contributors. Enterprises can adopt the same best practices to achieve similar success."]}),(0,h.jsx)("p",{children:"In both environments, developers see about a 50% productivity boost when documentation is up-to-date, detailed, reliable, and comes in different formats (e.g. articles, videos, forums)."}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data:"})," Review the documentation your team consumes: When was the last time it was updated? Can everyone on your team improve the documentation? Check this frequently to stay on track."]})]})})]})]})},g=a(85362),p=a(87261),f=a(81870),_=a(67294),x=a(27264),y=a(23965),v=a(47757),b=[{label:"Work",value:"work"},{label:"Open source",value:"oss"}],j={desktop:{work:(0,y.$)("/content-images/SectionCD01Chart01/work-graph-desktop.svg"),oss:(0,y.$)("/content-images/SectionCD01Chart01/oss-graph-desktop.svg")},mobile:{work:(0,y.$)("/content-images/SectionCD01Chart01/work-graph-mobile.svg"),oss:(0,y.$)("/content-images/SectionCD01Chart01/oss-graph-mobile.svg")}},w=function(){var e=(0,_.useState)("work"),t=e[0],a=e[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"lg:w-1/2 lg:mx-auto",children:(0,h.jsx)(v.Z,{currentValue:t,options:b,setValue:function(e){return a(e)}})}),(0,h.jsx)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:(0,h.jsxs)("div",{className:"flex justify-center pt-8",children:[(0,h.jsx)("img",{className:"hidden lg:block",src:j.desktop[t],alt:"Graph about developer productivity in ".concat(b.find((function(e){return e.value===t})).label)}),(0,h.jsx)("img",{className:"lg:hidden",src:j.mobile[t],alt:"Graph about developer productivity in ".concat(b.find((function(e){return e.value===t})).label)})]})})]})},C=function(){return(0,h.jsx)(p.Z,{itemOrder:1,itemTitle:"Critical documentation",children:(0,h.jsxs)(g.Z,{children:[(0,h.jsxs)("div",{className:"lg:w-1/2 lg:mx-auto",children:[(0,h.jsx)(d.Z.H2,{number:1,styledAs:"h3",children:"Documentation is critical but often under-invested"}),(0,h.jsx)(c.Z,{className:"mb-8 lg:mb-16",children:(0,h.jsx)("p",{children:"Documentation is often an under-resourced area of projects, despite being critical to onboarding new contributors, improving the quality of work, and creating shared understanding."})}),(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows:"})," Sharing and sourcing knowledge through different forms of documentation improves productivity both in open source projects and at work. Internal documentation covered onboarding, governance, tutorials, structure/dependencies, and best coding practices."]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data: "})," Use these charts to identify one thing you can work on to improve your work! Pick something on the bottom (at the end of an arrow), then work backwards to see what has a significant effect. For more details about each construct, head to the companion repository for the survey items we used."]})]}),(0,h.jsx)(f.Z,{title:"Improving productivity with documentation",subtitle:"Each box in the model is a construct (either a practice of development work, documentation, or healthy communities; or outcome of doing these things well). Each line is a predictive relationship between constructs. When you see a line, you can generally read it as \u201cpredicts\u201d or \u201caffects\u201d. Colored lines are positive relationships, and gray lines are negative. For this particular section the model did not show any negative relationships (hence, no gray lines).",dataSourceType:"survey",className:"mt-8 lg:mt-16"})]}),(0,h.jsx)(w,{})]})})},E=a(98471),k={categories:[{id:0,title:"No contributor guidelines",background:"linear-gradient(270deg, #0E3789 0%, #072254 103.38%)"},{id:1,title:"With contributor guidelines",background:"linear-gradient(270deg, #57CBE4 25.52%, #3AA0EB 100%)"}],series:[{title:"Open Source",values:[{categoryId:0,value:1101035},{categoryId:1,value:67115}]},{title:"Open source at work",values:[{categoryId:0,value:78752},{categoryId:1,value:25203}]},{title:"Work",values:[{categoryId:0,value:2543399},{categoryId:1,value:149873}]}]},N=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(E.Z,{data:k})})},B=function(){return(0,h.jsx)(p.Z,{itemOrder:2,itemTitle:"Contribution guidelines",children:(0,h.jsxs)(g.Z,{evenBackground:!0,children:[(0,h.jsxs)("div",{className:"lg:w-7/12 mb-8 lg:mb-16",children:[(0,h.jsx)(d.Z.H2,{number:2,styledAs:"h3",children:"Rules of engagement remove ambiguity and friction"}),(0,h.jsx)(c.Z,{children:(0,h.jsx)("p",{children:"When companies work closely with open source communities, making the conventions of a project clearly understood facilitates building on each others\u2019 work."})})]}),(0,h.jsxs)("div",{className:"lg:flex lg:gap-16 lg:mb-16",children:[(0,h.jsx)("div",{className:"lg:w-6/12",children:(0,h.jsx)(c.Z,{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows:"})," Contribution guidelines have gained traction as \u201crules of engagement\u201d when creating enterprise-level open source software. Repositories that are used for both open source and work are 4.4x more likely to have contribution guidelines than other repositories."]})})}),(0,h.jsx)("div",{className:"lg:w-6/12",children:(0,h.jsx)(c.Z,{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data:"})," Add contribution guidelines to your repository if you don\u2019t have some already. These have the added benefit of making code frictionless and easy to use."]})})})]}),(0,h.jsxs)("div",{className:"lg:flex lg:justify-between lg:mt-28",children:[(0,h.jsxs)("div",{className:"lg:w-5/12 lg:flex lg:flex-col lg:justify-between",children:[(0,h.jsxs)("div",{className:"w-1/2 my-8 lg:my-0",children:[(0,h.jsx)(c.Z,{size:"small",children:(0,h.jsx)("p",{children:"Repositories used in both work and open source are"})}),(0,h.jsx)(u.Z,{number:4.3,units:"X"}),(0,h.jsx)(c.Z,{size:"small",children:(0,h.jsx)("p",{children:"more likely to have contribution guidelines as other repositories"})})]}),(0,h.jsx)(c.Z,{children:(0,h.jsx)("p",{children:"Why would a company want to add contribution guidelines to its repository? When developers know how to contribute to a repository that belongs to a different team or community, it removes ambiguity and friction, and they are 17% more productive."})})]}),(0,h.jsxs)("div",{className:"lg:w-6/12 pb-4",children:[(0,h.jsx)(f.Z,{title:"Number of repositories with and without contributor guidelines by repository type",dataSourceType:"telemetry"}),(0,h.jsx)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:(0,h.jsx)(N,{})})]})]})]})})},Z=a(45890),S=function(){return(0,h.jsx)(p.Z,{itemOrder:3,itemTitle:"README-- or not?",children:(0,h.jsxs)(g.Z,{children:[(0,h.jsxs)("div",{className:"lg:w-6/12",children:[(0,h.jsx)(d.Z.H2,{number:3,styledAs:"h3",children:"README-- or not?"}),(0,h.jsx)(c.Z,{children:(0,h.jsx)("p",{children:"Open source repositories often use READMEs to share information and to signal that a community is active."})})]}),(0,h.jsxs)("div",{className:"mt-8 lg:mt-28",children:[(0,h.jsx)(f.Z,{title:"Number of repositories with and without README, by repository type",dataSourceType:"telemetry"}),(0,h.jsxs)("div",{className:"lg:flex lg:justify-between items-end",children:[(0,h.jsx)("div",{className:"lg:w-8/12 pb-4",children:(0,h.jsx)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:(0,h.jsx)(Z.Z,{})})}),(0,h.jsx)("div",{className:"lg:w-3/12 mt-8 lg:mt-0",children:(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows:"})," Our analysis found that work repositories use READMEs considerably less than open source projects, but this could be because they share documentation and information in other internal forums or methods, as well as using pairing or onboarding buddies for knowledge transfer."]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data:"})," Try incorporating a README to your repository to keep essential information close to the code."]})]})})]})]})]})})};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function I(e,t){return _.createElement("svg",T({width:1609,height:1107,viewBox:"0 0 1649 1147",xmlns:"http://www.w3.org/2000/svg",ref:t},e),r||(r=_.createElement("defs",null,_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-1"},_.createElement("stop",{stopColor:"#0E3789",offset:"0%"}),_.createElement("stop",{stopColor:"#072254",offset:"100%"})),_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-2"},_.createElement("stop",{stopColor:"#2369DB",offset:"0%"}),_.createElement("stop",{stopColor:"#133888",offset:"100%"})),_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-3"},_.createElement("stop",{stopColor:"#57CBE4",offset:"25.5%"}),_.createElement("stop",{stopColor:"#3AA0EB",offset:"100%"})),_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-4"},_.createElement("stop",{stopColor:"#65AEFF",offset:"0%"}),_.createElement("stop",{stopColor:"#1A58C3",offset:"100%"})),_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-5"},_.createElement("stop",{stopColor:"#53DDDD",offset:"0%"}),_.createElement("stop",{stopColor:"#3CC7E5",offset:"100%"})),_.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"chart-desktop_svg__linearGradient-6"},_.createElement("stop",{stopColor:"#B3F3EF",offset:"0%"}),_.createElement("stop",{stopColor:"#7DDADA",offset:"100%"})))),s||(s=_.createElement("g",{id:"chart-desktop_svg__SectionCD04Chart01",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},_.createElement("g",{id:"chart-desktop_svg__balls"},_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-1",d:"M405.357 810.713C181.471 810.713 0 629.219 0 405.357 0 181.494 181.471 0 405.357 0c223.885 0 405.356 181.471 405.356 405.357 0 223.885-181.471 405.356-405.356 405.356z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-1)",fillRule:"nonzero"}),_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-2",d:"M1380.77 703.449c-125.76.023-227.75-101.922-227.77-227.679-.02-125.757 101.92-227.747 227.68-227.77h.09c125.76-.023 227.75 101.922 227.77 227.679.02 125.757-101.92 227.747-227.68 227.77h-.09z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-2)",fillRule:"nonzero"}),_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-3",d:"M862.199 1030.4C782.558 1030.4 718 965.84 718 886.199 718 806.558 782.558 742 862.199 742S1006.4 806.558 1006.4 886.199 941.84 1030.4 862.199 1030.4z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-3)",fillRule:"nonzero"}),_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-4",d:"M986.164 548.283c-64.695 0-117.141-52.423-117.164-117.119 0-64.695 52.424-117.141 117.119-117.164h.045c64.696 0 117.146 52.424 117.166 117.119.02 64.695-52.42 117.141-117.12 117.164h-.046z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-4)",fillRule:"nonzero"}),_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-5",d:"M1141.18 782.695c-25.87 0-46.85-20.979-46.85-46.847 0-25.869 20.98-46.848 46.85-46.848s46.85 20.979 46.85 46.848c0 25.868-20.98 46.847-46.85 46.847z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-5)",fillRule:"nonzero"}),_.createElement("path",{className:"animate-floating-balls animate-floating-balls-delay-6",d:"M1298.55 946.919c-16.54 0-29.96-13.414-29.96-29.959 0-16.546 13.42-29.96 29.96-29.96 16.55 0 29.96 13.414 29.96 29.96 0 16.545-13.41 29.959-29.96 29.959z",id:"chart-desktop_svg__Path",fill:"url(#chart-desktop_svg__linearGradient-6)",fillRule:"nonzero"})),_.createElement("g",{id:"chart-desktop_svg__texts",fontFamily:"Alliance No.2, Helvetica Neue, Inter, sans-serif",fontSize:16,fontWeight:300,fill:"#000"},_.createElement("text",null,_.createElement("tspan",{x:369.509,y:864,fontWeight:"bold"},"192,830"),_.createElement("tspan",{x:344.011,y:890},"Create an issue")),_.createElement("text",null,_.createElement("tspan",{x:951.886,y:584,fontWeight:"bold"},"16,102"),_.createElement("tspan",{x:899.25,y:610},"Create a pull request")),_.createElement("text",null,_.createElement("tspan",{x:832.994,y:1071,fontWeight:"bold"},"24,404"),_.createElement("tspan",{x:843.614,y:1097},"Push")),_.createElement("text",null,_.createElement("tspan",{x:1277.27,y:982,fontWeight:"bold"},"1,053"),_.createElement("tspan",{x:1250.148,y:1008},"Review a pull "),_.createElement("tspan",{x:1270.621,y:1034},"request")),_.createElement("text",null,_.createElement("tspan",{x:1118.591,y:819,fontWeight:"bold"},"2,575"),_.createElement("tspan",{x:1086.276,y:845},"Comment on a "),_.createElement("tspan",{x:1113.371,y:871},"commit")),_.createElement("text",null,_.createElement("tspan",{x:1351.898,y:745,fontWeight:"bold"},"60,854"),_.createElement("tspan",{x:1321.14,y:771},"Comment on an "),_.createElement("tspan",{x:1361.182,y:797},"issue"))))))}var D,A,O=_.forwardRef(I);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function R(e,t){return _.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 517 1169",ref:t},e),D||(D=_.createElement("defs",null,_.createElement("linearGradient",{id:"chart-mobile_svg__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"0%",stopColor:"#0E3789"}),_.createElement("stop",{offset:"100%",stopColor:"#072254"})),_.createElement("linearGradient",{id:"chart-mobile_svg__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"0%",stopColor:"#65AEFF"}),_.createElement("stop",{offset:"100%",stopColor:"#1A58C3"})),_.createElement("linearGradient",{id:"chart-mobile_svg__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"25.5%",stopColor:"#57CBE4"}),_.createElement("stop",{offset:"100%",stopColor:"#3AA0EB"})),_.createElement("linearGradient",{id:"chart-mobile_svg__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"0%",stopColor:"#B3F3EF"}),_.createElement("stop",{offset:"100%",stopColor:"#7DDADA"})),_.createElement("linearGradient",{id:"chart-mobile_svg__e",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"0%",stopColor:"#53DDDD"}),_.createElement("stop",{offset:"100%",stopColor:"#3CC7E5"})),_.createElement("linearGradient",{id:"chart-mobile_svg__f",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},_.createElement("stop",{offset:"0%",stopColor:"#2369DB"}),_.createElement("stop",{offset:"100%",stopColor:"#133888"})))),A||(A=_.createElement("g",{fill:"none",fillRule:"evenodd",fontFamily:"Alliance No.2, Helvetica Neue, Inter, sans-serif",fontSize:16,fontWeight:300},_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:170.509,y:441,fontWeight:600},"192,830"),_.createElement("tspan",{x:168.016,y:467},"Create an "),_.createElement("tspan",{x:184.27,y:493},"issue")),_.createElement("path",{fill:"url(#chart-mobile_svg__a)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-1",d:"M202.678 405.355C90.735 405.355 0 314.608 0 202.678 0 90.747 90.735 0 202.678 0 314.62 0 405.355 90.735 405.355 202.678c0 111.942-90.735 202.677-202.677 202.677z"}),_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:352.886,y:578,fontWeight:600},"16,102"),_.createElement("tspan",{x:300.25,y:604},"Create a pull request")),_.createElement("path",{fill:"url(#chart-mobile_svg__b)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-2",d:"M377.582 542.141c-32.348 0-58.57-26.211-58.582-58.559 0-32.348 26.212-58.57 58.56-58.582h.022c32.348 0 58.573 26.212 58.583 58.56.01 32.347-26.21 58.57-58.56 58.581h-.023z"}),_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:186.994,y:749,fontWeight:600},"24,404"),_.createElement("tspan",{x:197.614,y:775},"Push")),_.createElement("path",{fill:"url(#chart-mobile_svg__c)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-3",d:"M216.1 713.2c-39.821 0-72.1-32.28-72.1-72.1 0-39.821 32.279-72.1 72.1-72.1 39.82 0 72.1 32.279 72.1 72.1 0 39.82-32.28 72.1-72.1 72.1z"}),_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:281.77,y:1107,fontWeight:600},"1,053"),_.createElement("tspan",{x:254.648,y:1133},"Review a pull "),_.createElement("tspan",{x:275.121,y:1159},"request")),_.createElement("path",{fill:"url(#chart-mobile_svg__d)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-4",d:"M303.98 1070.96c-8.27 0-14.98-6.707-14.98-14.98s6.71-14.98 14.98-14.98c8.275 0 14.98 6.707 14.98 14.98s-6.705 14.98-14.98 14.98z"}),_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:180.591,y:951,fontWeight:600},"2,575"),_.createElement("tspan",{x:148.276,y:977},"Comment on a "),_.createElement("tspan",{x:175.371,y:1003},"commit")),_.createElement("path",{fill:"url(#chart-mobile_svg__e)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-5",d:"M202.755 914.847c-12.935 0-23.425-10.489-23.425-23.423 0-12.934 10.49-23.424 23.425-23.424s23.425 10.49 23.425 23.424-10.49 23.423-23.425 23.423z"}),_.createElement("text",{fill:"#000"},_.createElement("tspan",{x:373.898,y:938,fontWeight:600},"60,854"),_.createElement("tspan",{x:343.14,y:964},"Comment on an "),_.createElement("tspan",{x:383.182,y:990},"issue")),_.createElement("path",{fill:"url(#chart-mobile_svg__f)",fillRule:"nonzero",className:"animate-floating-balls animate-floating-balls-delay-6",d:"M402.885 901.725c-62.88.011-113.875-50.962-113.885-113.84-.01-62.879 50.96-113.874 113.84-113.885h.045c62.88-.012 113.875 50.961 113.885 113.84.01 62.878-50.96 113.873-113.84 113.885h-.045z"}))))}var W=_.forwardRef(R),P=function(){return(0,h.jsxs)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:[(0,h.jsx)("div",{className:"lg:hidden ml-[-40%] sm:ml-[-20%]",children:(0,h.jsx)(W,{className:"h-auto w-[110%] sm:w-[517px] sm:mx-auto"})}),(0,h.jsx)("div",{className:"hidden lg:block lg:ml-[-20%] lg:mt-[-10%]",children:(0,h.jsx)(O,{className:"w-[110%] h-auto"})})]})},z=function(){return(0,h.jsx)(p.Z,{itemOrder:4,itemTitle:"Issues as documentation",children:(0,h.jsxs)(g.Z,{evenBackground:!0,children:[(0,h.jsxs)("div",{className:"lg:flex lg:justify-between items-end",children:[(0,h.jsxs)("div",{className:"lg:w-6/12 lg:order-2",children:[(0,h.jsx)(d.Z.H2,{number:4,styledAs:"h3",children:"GitHub Issues are documentation too"}),(0,h.jsx)(c.Z,{className:"mb-8 lg:mb-16",children:(0,h.jsx)("p",{children:"Another way to share information about a project is through GitHub Issues."})}),(0,h.jsxs)(c.Z,{className:"mb-8 lg:mb-16",children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows: "})," Creating issues is the most common first contribution, and invites non-code contributors. This provides a great way for people to join GitHub and help manage projects."]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data:"})," Think about your own projects and new team members: Can folks jump in to projects by creating issues easily?"]})]})]}),(0,h.jsx)("div",{className:"lg:w-6/12 lg:order-1 lg:mb-[150px] mb-16",children:(0,h.jsx)(f.Z,{title:"What people do on their first hour on GitHub",dataSourceType:"telemetry"})})]}),(0,h.jsx)(P,{})]})})},H=a(58673),F={categories:[{id:0,title:"Median",background:"linear-gradient(180deg, #0E3789 0%, #072254 103.38%)"},{id:1,title:"Average",background:"linear-gradient(180deg, #57CBE4 25.52%, #3AA0EB 100%)"}],series:[{title:"Has no Good First Issues",values:[{categoryId:0,value:0},{categoryId:1,value:13}]},{title:"Has Good First Issues",values:[{categoryId:0,value:4.5},{categoryId:1,value:12.3}]}]},M=function(){return(0,h.jsx)("div",{className:"h-[280px]",children:(0,h.jsx)(H.Z,{data:F,direction:"vertical"})})},L={categories:[{id:0,title:"Median",background:"linear-gradient(180deg, #0E3789 0%, #072254 103.38%)"},{id:1,title:"Average",background:"linear-gradient(180deg, #57CBE4 25.52%, #3AA0EB 100%)"}],series:[{title:"Less than 10% of issues",values:[{categoryId:0,value:211.91},{categoryId:1,value:63}]},{title:"Between 10% and 20% of issues",values:[{categoryId:0,value:98.55},{categoryId:1,value:37}]},{title:"Between 21% and 30% of issues",values:[{categoryId:0,value:54.7},{categoryId:1,value:32}]},{title:"Between 31% and 40% of issues",values:[{categoryId:0,value:51.65},{categoryId:1,value:34}]},{title:"Between 41% and 20% of issues",values:[{categoryId:0,value:68.34},{categoryId:1,value:34}]}]},U={categories:[{id:0,title:"Median",background:"linear-gradient(180deg, #0E3789 0%, #072254 103.38%)"},{id:1,title:"Average",background:"linear-gradient(180deg, #57CBE4 25.52%, #3AA0EB 100%)"}],series:[{title:"Less than 10% of issues",values:[{categoryId:0,value:7.94},{categoryId:1,value:11.37}]},{title:"Between 10% and 20% of issues",values:[{categoryId:0,value:7.12},{categoryId:1,value:11.12}]},{title:"Between 21% and 30% of issues",values:[{categoryId:0,value:8.42},{categoryId:1,value:13.27}]},{title:"Between 31% and 40% of issues",values:[{categoryId:0,value:9.46},{categoryId:1,value:17.2}]},{title:"Between 41% and 20% of issues",values:[{categoryId:0,value:14.45},{categoryId:1,value:21.39}]}]},q=function(){var e=(0,_.useState)("numberOfTotal"),t=e[0],a=e[1],r="numberOfTotal"===t?L:U;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{title:"Percent of issues with \u201cGood First Issue\u201d label",subtitle:"Accounts < 2 years old",dataSourceType:"telemetry"}),(0,h.jsx)(v.Z,{currentValue:t,options:[{label:"Number of total contributors",value:"numberOfTotal"},{label:"Percent of new contributors",value:"percentOfNew"}],setValue:function(e){return a(e)}}),(0,h.jsxs)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:[(0,h.jsx)("div",{className:"lg:hidden",children:(0,h.jsx)(H.Z,{data:r,direction:"horizontal"})}),(0,h.jsx)("div",{className:"hidden lg:block lg:h-[500px]",children:(0,h.jsx)(H.Z,{data:r,direction:"vertical"})})]})]})},V=function(){return(0,h.jsx)(p.Z,{itemOrder:5,itemTitle:"Good first issues",children:(0,h.jsxs)(g.Z,{children:[(0,h.jsx)(d.Z.H2,{number:5,styledAs:"h3",className:"lg:w-6/12",children:"Good First Issues guide new member contributions"}),(0,h.jsxs)("div",{className:"lg:flex lg:justify-between my-8 lg:my-16",children:[(0,h.jsx)("div",{className:"lg:w-6/12",children:(0,h.jsxs)(c.Z,{children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"What the data shows:"})," Marking issues as Good First Issues is a great way to guide new members to their first contribution. Large repositories are generally more likely to use Good First Issue labels, and it\u2019s an effective practice. Repositories where 21% to 30% of issues are marked as Good First Issues average 13% new contributors. Having more than 40% Good First Issues can help a project attract 21% more new contributors."]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Using the data:"})," Think about your projects again. Are there more ways to get involved beyond issues? What tasks do you typically give new team members to start with? Start curating a set of tasks/issues that are appropriate for new folks to start with when joining your project, team, or community."]})]})}),(0,h.jsxs)("div",{className:"lg:w-5/12 mt-8 lg:mt-0",children:[(0,h.jsx)(f.Z,{title:"Percentage of new contributors by whether repository has any \u201cGood First Issues\u201d",subtitle:"Accounts < 2 years old",dataSourceType:"telemetry"}),(0,h.jsx)(x.pT,{fraction:.2,delay:200,duration:600,triggerOnce:!0,children:(0,h.jsx)(M,{})})]})]}),(0,h.jsxs)("div",{className:"lg:flex lg:justify-between items-end",children:[(0,h.jsx)("div",{className:"lg:w-8/12 pb-2",children:(0,h.jsx)(q,{})}),(0,h.jsxs)("div",{className:"lg:w-3/12 mt-8 lg:mt-16",children:[(0,h.jsx)(u.Z,{number:15,units:"%"}),(0,h.jsx)(c.Z,{size:"small",children:(0,h.jsxs)("p",{children:["Is the average of new contributors for repositories where 21% to 30% of issues are marked as Good First Issues"," "]})})]})]})]})})},X=a(72995),J=a(75081),K=a(94169),$=a(50445),Q=function(){return(0,h.jsx)(p.Z,{itemOrder:6,itemTitle:"Docs for productivity and culture",children:(0,h.jsxs)(g.Z,{highlight:!0,children:[(0,h.jsx)(d.Z.H2,{number:6,numberInvertedColors:!0,bigType:!0,children:"Documentation is good for productivity and culture -- it\u2019s a win-win"}),(0,h.jsxs)("div",{className:"lg:flex gap-16 lg:mt-10",children:[(0,h.jsx)(c.Z,{size:"bigger",className:"text-white lg:w-7/12",children:(0,h.jsxs)("p",{children:["Strong cultures built on trust are supported by good information flow, and recent"," ",(0,h.jsx)(J.Z,{target:"_blank",rel:"nofollow noreferrer",href:"https://services.google.com/fh/files/misc/state-of-devops-2021.pdf",children:"research by DORA"})," ","shows that quality documentation improves performance."]})}),(0,h.jsx)(c.Z,{className:"text-white lg:w-4/12",highlight:!0,children:(0,h.jsxs)("p",{children:["So it shouldn\u2019t be a surprise that good documentation practices"," ",(0,h.jsx)(J.Z,{target:"_blank",rel:"nofollow noreferrer",href:"https://guides.lib.berkeley.edu/how-to-write-good-documentation",children:"some examples here"})," ","support not only better cultures where developers feel fulfilled but also help them do their work."," ",(0,h.jsx)(K.Z,{content:$.Z,children:(0,h.jsx)(X.Z,{icon:"survey"})})]})})]})]})})},Y=a(43241),ee=!0,te=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.Z,{title:"Creating documentation to support developers",shape:n.C.Rectangle,children:(0,h.jsx)(m,{})}),(0,h.jsx)(o.Z,{}),(0,h.jsx)(C,{}),(0,h.jsx)(B,{}),(0,h.jsx)(S,{}),(0,h.jsx)(z,{}),(0,h.jsx)(V,{}),(0,h.jsx)(Q,{}),(0,h.jsx)(Y.Z,{currentContentId:l.c.CreatingDocumentation})]})}},29390:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creating-documentation",function(){return a(31139)}])},64330:function(e){e.exports={ChartBar:"styles_ChartBar__1PLyd",ChartBar_series:"styles_ChartBar_series__K2qxn",ChartBar_series_item:"styles_ChartBar_series_item__o4Nq4",ChartBar_series_item_chartsWrapper:"styles_ChartBar_series_item_chartsWrapper__1dO9F",ChartBar_series_item_chart:"styles_ChartBar_series_item_chart__1swg9",ChartBar_series_item_chart_legend:"styles_ChartBar_series_item_chart_legend__1WTEv",ChartBar_series_item_chart_wrapper:"styles_ChartBar_series_item_chart_wrapper__3RUE8",ChartBar_series_item_chart_bar:"styles_ChartBar_series_item_chart_bar__jWhJc",ChartBar_series_item_chart_value:"styles_ChartBar_series_item_chart_value__zbnR_",ChartBar_series_item_chart_value_percentage:"styles_ChartBar_series_item_chart_value_percentage__1DlKn",ChartBar_series_item_label:"styles_ChartBar_series_item_label__3kMoz"}},47207:function(e){e.exports={CharBarSegmented:"styles_CharBarSegmented__3C5Fb",CharBarSegmented_series:"styles_CharBarSegmented_series__2IBrN",CharBarSegmented_series_item:"styles_CharBarSegmented_series_item__1c1oe",CharBarSegmented_series_item_label:"styles_CharBarSegmented_series_item_label__2OmAu",CharBarSegmented_series_item_chartsWrapper:"styles_CharBarSegmented_series_item_chartsWrapper__5Jxr7",CharBarSegmented_series_item_chart:"styles_CharBarSegmented_series_item_chart__24B9a",CharBarSegmented_series_item_chartBar:"styles_CharBarSegmented_series_item_chartBar__3mQXz",CharBarSegmented_series_item_chartLabel:"styles_CharBarSegmented_series_item_chartLabel__12VYS"}},90689:function(e){e.exports={PageHero:"styles_PageHero__3S02G",PageHero_content:"styles_PageHero_content__1svMI",PageHero_backgroundEffect:"styles_PageHero_backgroundEffect__J3DK4",PageHero_heading:"styles_PageHero_heading__1KW1D",PageHero_headingText:"styles_PageHero_headingText__2WAtg",PageHero_bottomGradient:"styles_PageHero_bottomGradient__NbhOx"}},64635:function(e){e.exports={ScrollToTableOfContents:"styles_ScrollToTableOfContents__2WLSz",ScrollToTableOfContents_container:"styles_ScrollToTableOfContents_container__3Tp96",ScrollToTableOfContents_item_link:"styles_ScrollToTableOfContents_item_link__qJLJh",ScrollToTableOfContents_item:"styles_ScrollToTableOfContents_item__17FMh",ScrollToTableOfContents_item_text:"styles_ScrollToTableOfContents_item_text__287Xu"}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},68216:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,{Z:function(){return r}})},25997:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}a.d(t,{Z:function(){return s}})}},function(e){e.O(0,[465,185,774,888,179],(function(){return t=29390,e(e.s=t);var t}));var t=e.O();_N_E=t}]);