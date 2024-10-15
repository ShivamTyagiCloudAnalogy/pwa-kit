"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[875],{50828:(e,t,r)=>{r.d(t,{A:()=>f});var a=r(35906),n=r(37679),o=r(98778),i=r(12250),l=r.n(i),d=r(67555),c=r(70252),s=r(73352),u=r(21822),p=r(60386),m=r(72850),g=r(35490),y=r(84479);const v=["categories"],E=e=>{let{categories:t}=e,r=(0,n.A)(e,v);const i=(0,c.A)(),l=(0,s.Vl)("Breadcrumb");return o.createElement(u.Q,(0,a.A)({className:"sf-breadcrumb"},l.container,{separator:o.createElement(g.vK,(0,a.A)({},l.icon,{"aria-hidden":"true"}))},r),t.map((e=>o.createElement(p.J,{key:e.id,"data-testid":"sf-crumb-item"},o.createElement(m.w,(0,a.A)({as:d.Link,to:(0,y.XX)(e,i.locale)},l.link),e.name)))))};E.displayName="Breadcrumb",E.propTypes={categories:l().array};const f=E},34302:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(35906),n=r(37679),o=r(98778),i=r(12250),l=r.n(i),d=r(93122),c=r(44940),s=r(36287),u=r(14774);const p=["src","widths","imageProps","as"],m=e=>{let{src:t,widths:r,imageProps:i,as:l}=e,m=(0,n.A)(e,p);const g=l||d.E,y=(0,c.D)(),v=(0,o.useMemo)((()=>(0,u.N)({src:t,widths:r,breakpoints:y.breakpoints})),[t,r,y.breakpoints]);return o.createElement(s.az,m,o.createElement(g,(0,a.A)({},v,i)))};m.propTypes={src:l().string,widths:l().oneOfType([l().array,l().object]),imageProps:l().object,as:l().elementType};const g=m},93661:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var a=r(8805),n=r(49534),o=r(98778),i=r(12250),l=r.n(i),d=r(36008),c=r(70252),s=r(20751),u=r(74941),p=r(14893),m=r(36287),g=r(86400),y=r(54007),v=r(84319),E=r(79060),f=r(7711),h=r(65376),b=r(93080),P=r(98265),A=r(99906),_=r(63157),w=r(89408),I=r(66569),O=r(79162),T=r(87287),k=r(48593);const S=({product:e})=>{const{formatMessage:t}=(0,c.A)();return o.createElement(g.B,{direction:"row",spacing:[0,0,0,16]},o.createElement(w.n,{allowMultiple:!0,maxWidth:"896px",flex:[1,1,1,5]},o.createElement(I.A,null,o.createElement("h2",null,o.createElement(O.J,{height:"64px"},o.createElement(m.az,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Product Detail"}],id:"product_detail.accordion.button.product_detail"})),o.createElement(T.Q,null))),o.createElement(k.v,{mb:6,mt:4},o.createElement("div",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.longDescription}}))),o.createElement(I.A,null,o.createElement("h2",null,o.createElement(O.J,{height:"64px"},o.createElement(m.az,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Size & Fit"}],id:"product_detail.accordion.button.size_fit"})),o.createElement(T.Q,null))),o.createElement(k.v,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"}))),o.createElement(I.A,null,o.createElement("h2",null,o.createElement(O.J,{height:"64px"},o.createElement(m.az,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Reviews"}],id:"product_detail.accordion.button.reviews"})),o.createElement(T.Q,null))),o.createElement(k.v,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"}))),o.createElement(I.A,null,o.createElement("h2",null,o.createElement(O.J,{height:"64px"},o.createElement(m.az,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Questions"}],id:"product_detail.accordion.button.questions"})),o.createElement(T.Q,null))),o.createElement(k.v,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"})))),o.createElement(m.az,{display:["none","none","none","block"],flex:4}))};S.propTypes={product:l().object};const C=S;var D=r(62563),L=r(6834),x=r(32105),j=r(84479),M=r(25149),B=r(34638),z=r(54851);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const H=()=>{var e,t;const{formatMessage:r}=(0,c.A)(),n=(0,M.W6)(),i=(0,M.zy)(),l=(0,h.A)(),w=(0,b.A)(),I=(0,B.d)(),O=(0,f.A)(),T=(0,y.useCustomerId)(),{isLoading:k}=(0,v.X)(),{addItemToNewOrExistingBasket:S}=(0,y.useShopperBasketsMutationHelper)(),N=(0,y.useShopperBasketsMutation)("updateItemsInBasket"),{res:H}=(0,P.useServerContext)();H&&H.set("Cache-Control",`s-maxage=${x.kB}, stale-while-revalidate=${x.Yw}`);const{productId:W}=(0,M.g)(),q=new URLSearchParams(i.search),{data:F,isLoading:$,isError:Q,error:J}=(0,y.useProduct)({parameters:{id:q.get("pid")||W,perPricebook:!0,expand:["availability","promotions","options","images","prices","variations","set_products","bundled_products"],allImages:!0}},{keepPreviousData:!0}),{data:R,isError:K,error:U}=(0,y.useCategory)({parameters:{id:null==F?void 0:F.primaryCategoryId,levels:1}}),[X,Y]=(0,o.useState)({}),[G,Z]=(0,o.useState)({}),[ee,te]=(0,o.useState)(1),re=o.useRef({}),ae=null==F?void 0:F.type.set,ne=null==F?void 0:F.type.bundle;let oe="";ne&&(oe=null===(e=Object.keys(X))||void 0===e?void 0:e.map((e=>X[e].variant.productId)).join(","));const{data:ie}=(0,y.useProducts)({parameters:{ids:oe,allImages:!1,expand:["availability","variations"],select:"(data.(id,inventory,master))"}},{enabled:(null===(t=oe)||void 0===t?void 0:t.length)>0,keepPreviousData:!0});ne&&ie&&F.bundledProducts.forEach((({product:e},t)=>{const r=ie.data.find((t=>t.master.masterId===e.id));r&&(F.bundledProducts[t].product=V(V({},e),{},{inventory:r.inventory}))}));const le=ae||ne?(0,u.hh)(F):{};if(Q){var de;const e=null==J||null===(de=J.response)||void 0===de?void 0:de.status;if(404===e)throw new D.HTTPNotFound("Product Not Found.");throw new D.HTTPError(e,`HTTP Error ${e} occurred.`)}if(K){var ce;const e=null==U||null===(ce=U.response)||void 0===ce?void 0:ce.status;if(404===e)throw new D.HTTPNotFound("Category Not Found.");throw new D.HTTPError(e,`HTTP Error ${e} occurred.`)}const[se,ue]=(0,o.useState)(R),pe=(0,E.rn)(F);(0,o.useEffect)((()=>{R&&ue(R)}),[R]),(0,o.useEffect)((()=>{if(!pe)return;const e=(0,j.tE)(`${i.pathname}${i.search}`,{pid:null==pe?void 0:pe.productId});n.replace(e)}),[pe]);const{data:me,isLoading:ge}=(0,z.T)(),ye=(0,y.useShopperCustomersMutation)("createCustomerProductListItem"),ve=(e,t,a)=>{var n;(null==me||null===(n=me.customerProductListItems)||void 0===n?void 0:n.find((r=>r.productId===(null==t?void 0:t.productId)||r.productId===(null==e?void 0:e.id))))?I({title:r(x.p7),status:"info",action:o.createElement(p.$,{variant:"link",onClick:()=>O("/account/wishlist")},r(x.D$))}):ye.mutate({parameters:{listId:me.id,customerId:T},body:{quantity:a,productId:(null==t?void 0:t.productId)||(null==e?void 0:e.id),public:!1,priority:1,type:"product"}},{onSuccess:()=>{I({title:r(x.FD,{quantity:1}),status:"success",action:o.createElement(p.$,{variant:"link",onClick:()=>O("/account/wishlist")},r(x.D$))})},onError:()=>{fe()}})},Ee=(0,B.d)(),fe=()=>{Ee({title:r(x.gS),status:"error"})},he=function(){var e=(0,a.A)((function*(e){try{const t=e.map((({variant:e,quantity:t})=>({productId:e.productId,price:e.price,quantity:t})));return yield S(t),l.sendAddToCart(t),e}catch(e){console.log("error",e),fe(e)}}));return function(t){return e.apply(this,arguments)}}(),be=(0,o.useCallback)((()=>{var e;Object.values(re.current).forEach((({validateOrderability:e})=>{e({scrollErrorIntoView:!1})}));const t=Object.keys(X),r=null===(e=le.childProducts.find((({product:e})=>!t.includes(e.id))))||void 0===e?void 0:e.product;if(r){const{ref:e}=re.current[r.id];return e.scrollIntoView&&e.scrollIntoView({behavior:"smooth",block:"end"}),!1}return!0}),[F,X]),Pe=function(){var e=(0,a.A)((function*(e,t){try{const e=Object.values(X),r=[{productId:F.id,price:F.price,quantity:t,bundledProductItems:e.map((e=>({productId:e.variant.productId,quantity:e.quantity})))}],a=yield S(r),n=e.map((e=>e.product.id)),o=a.productItems.find((e=>{var t,r;if(null!==(t=e.bundledProductItems)&&void 0!==t&&t.length)return(null===(r=e.bundledProductItems)||void 0===r?void 0:r.map((e=>e.productId))).every((e=>n.includes(e)))})),i=(0,u.NM)(o,e);return i.length&&(yield N.mutateAsync({method:"PATCH",parameters:{basketId:a.basketId},body:i})),l.sendAddToCart(r),e}catch(e){fe(e)}}));return function(t,r){return e.apply(this,arguments)}}();return(0,o.useEffect)((()=>{if(F&&F.type.set)l.sendViewProduct(F),F.setProducts.map((e=>{try{l.sendViewProduct(e)}catch(t){L.A.error("Einstein sendViewProduct error",{namespace:"ProductDetail.useEffect",additionalProperties:{error:t,child:e}})}w.sendViewProduct(R,e,"detail")}));else if(F){try{l.sendViewProduct(F)}catch(e){L.A.error("Einstein sendViewProduct error",{namespace:"ProductDetail.useEffect",additionalProperties:{error:e,product:F}})}w.sendViewProduct(R,F,"detail")}}),[F]),o.createElement(m.az,{className:"sf-product-detail-page",layerStyle:"page","data-testid":"product-details-page"},o.createElement(d.Helmet,null,o.createElement("title",null,null==F?void 0:F.pageTitle),o.createElement("meta",{name:"description",content:null==F?void 0:F.pageDescription})),o.createElement(g.B,{spacing:16},ae||ne?o.createElement(o.Fragment,null,o.createElement(_.A,{product:F,category:(null==se?void 0:se.parentCategoryTree)||[],addToCart:ae?()=>{const e=Object.values(X);return he(e)}:Pe,addToWishlist:ve,isProductLoading:$,isBasketLoading:k,isWishlistLoading:ge,validateOrderability:be,childProductOrderability:G,setSelectedBundleQuantity:te}),o.createElement("hr",null),le.childProducts.map((({product:e,quantity:t})=>o.createElement(m.az,{key:e.id,"data-testid":"child-product"},o.createElement(_.A,{ref:function(t){re.current[e.id]={ref:t,validateOrderability:this.validateOrderability}},product:e,isProductPartOfSet:ae,isProductPartOfBundle:ne,childOfBundleQuantity:t,selectedBundleParentQuantity:ee,addToCart:ae?(t,r)=>he([{product:e,variant:t,quantity:r}]):null,addToWishlist:ae?ve:null,onVariantSelected:(e,r,a)=>{if(a)Y((n=>V(V({},n),{},{[e.id]:{product:e,variant:r,quantity:ne?t:a}})));else{const t=V({},X);delete t[e.id],Y(t)}},isProductLoading:$,isBasketLoading:k,isWishlistLoading:ge,setChildProductOrderability:Z}),o.createElement(C,{product:e}),o.createElement(m.az,{display:["none","none","none","block"]},o.createElement("hr",null)))))):o.createElement(o.Fragment,null,o.createElement(_.A,{product:F,category:(null==se?void 0:se.parentCategoryTree)||[],addToCart:(e,t)=>he([{product:F,variant:e,quantity:t}]),addToWishlist:ve,isProductLoading:$,isBasketLoading:k,isWishlistLoading:ge}),o.createElement(C,{product:F})),o.createElement(g.B,{spacing:16},!ae&&o.createElement(A.A,{title:o.createElement(s.A,{defaultMessage:[{type:0,value:"Complete the Set"}],id:"product_detail.recommended_products.title.complete_set"}),recommender:x.tD.PDP_COMPLETE_SET,products:[F],mx:{base:-4,md:-8,lg:0},shouldFetch:()=>null==F?void 0:F.id}),o.createElement(A.A,{title:o.createElement(s.A,{defaultMessage:[{type:0,value:"You might also like"}],id:"product_detail.recommended_products.title.might_also_like"}),recommender:x.tD.PDP_MIGHT_ALSO_LIKE,products:[F],mx:{base:-4,md:-8,lg:0},shouldFetch:()=>null==F?void 0:F.id}),o.createElement(A.A,{key:i.key,title:o.createElement(s.A,{defaultMessage:[{type:0,value:"Recently Viewed"}],id:"product_detail.recommended_products.title.recently_viewed"}),recommender:x.tD.PDP_RECENTLY_VIEWED,mx:{base:-4,md:-8,lg:0}}))))};H.getTemplateName=()=>"product-detail",H.propTypes={match:l().object};const W=H}}]);