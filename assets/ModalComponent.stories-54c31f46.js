import{r as m}from"./index-61bf1805.js";import{j as e}from"./jsx-runtime-4ca860c5.js";import{P as t}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const o=({title:i,content:d})=>{const[r,p]=m.useState(!1),s=()=>{p(!r)};return e.jsxs("div",{children:[e.jsx("button",{className:"s-button",onClick:s,children:"Abrir Modal"}),r&&e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{className:"close-button",onClick:s,children:"X"}),e.jsx("h2",{className:"modal-title",children:i}),e.jsx("p",{className:"modal-content",children:d}),e.jsx("button",{className:"close-button",onClick:s,children:"Cerrar"})]})})]})};o.propTypes={title:t.string.isRequired,content:t.string.isRequired};o.defaultProps={title:"Diplomado USIP - Modulo de React",content:"ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.  Es importante señalar que ReactJS no es un framework de JavaScript. Esto porque sólo es responsable de renderizar los componentes de la capa de vista de una aplicación. React es una alternativa a frameworks como Angular y Vue, que permiten crear funciones complejas."};const u=o;o.__docgenInfo={description:"",methods:[],displayName:"ModalComponent",props:{title:{defaultValue:{value:"'Diplomado USIP - Modulo de React'",computed:!1},type:{name:"string"},required:!1,description:""},content:{defaultValue:{value:"'ReactJS es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.  Es importante señalar que ReactJS no es un framework de JavaScript. Esto porque sólo es responsable de renderizar los componentes de la capa de vista de una aplicación. React es una alternativa a frameworks como Angular y Vue, que permiten crear funciones complejas.'",computed:!1},type:{name:"string"},required:!1,description:""}}};const R={title:"ALFREDO_CALLIZAYA/Modal",component:u},a={};var n,l,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["Primary"];export{a as Primary,S as __namedExportsOrder,R as default};
//# sourceMappingURL=ModalComponent.stories-54c31f46.js.map
