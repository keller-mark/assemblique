import{k as u,d as x,j as a,c as j,L as $}from"./Layout.jVDcG4V_.js";import{r as P,g as c}from"./index.DzPFc1qU.js";function b(){return b=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},b.apply(this,arguments)}function z(n,r){if(n==null)return{};var t=L(n,r),e,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}function L(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,i;for(i=0;i<e.length;i++)o=e[i],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}var C=P.forwardRef(function(n,r){var t=n.color,e=t===void 0?"currentColor":t,o=n.size,i=o===void 0?24:o,s=z(n,["color","size"]);return c.createElement("svg",b({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),c.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),c.createElement("polyline",{points:"12 19 5 12 12 5"}))});C.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};C.displayName="ArrowLeft";function w(){return w=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},w.apply(this,arguments)}function A(n,r){if(n==null)return{};var t=E(n,r),e,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}function E(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,i;for(i=0;i<e.length;i++)o=e[i],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}var v=P.forwardRef(function(n,r){var t=n.color,e=t===void 0?"currentColor":t,o=n.size,i=o===void 0?24:o,s=A(n,["color","size"]);return c.createElement("svg",w({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),c.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.createElement("polyline",{points:"12 5 19 12 12 19"}))});v.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};v.displayName="ArrowRight";function I(n,r){if(n==null)return{};var t=D(n,r),e,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}function D(n,r){if(n==null)return{};var t={},e=Object.keys(n),o,i;for(i=0;i<e.length;i++)o=e[i],!(r.indexOf(o)>=0)&&(t[o]=n[o]);return t}function g(){return g=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},g.apply(this,arguments)}function O(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,e)}return t}function m(n){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?O(Object(t),!0).forEach(function(e){_(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function _(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}const S={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},h=2;class k extends c.Component{constructor(r){super(r),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this);let t;this.props.breakpointCols&&this.props.breakpointCols.default?t=this.props.breakpointCols.default:t=parseInt(this.props.breakpointCols)||h,this.state={columnCount:t}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){const r=window&&window.innerWidth||1/0;let t=this.props.breakpointCols;typeof t!="object"&&(t={default:parseInt(t)||h});let e=1/0,o=t.default||h;for(let i in t){const s=parseInt(i);s>0&&r<=s&&s<e&&(e=s,o=t[i])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}itemsInColumns(){const r=this.state.columnCount,t=new Array(r),e=c.Children.toArray(this.props.children);for(let o=0;o<e.length;o++){const i=o%r;t[i]||(t[i]=[]),t[i].push(e[o])}return t}renderColumns(){const{column:r,columnAttrs:t={},columnClassName:e}=this.props,o=this.itemsInColumns(),i=`${100/o.length}%`;let s=e;s&&typeof s!="string"&&(this.logDeprecated('The property "columnClassName" requires a string'),typeof s>"u"&&(s="my-masonry-grid_column"));const l=m(m(m({},r),t),{},{style:m(m({},t.style),{},{width:i}),className:s});return o.map((p,f)=>c.createElement("div",g({},l,{key:f}),p))}logDeprecated(r){console.error("[Masonry]",r)}render(){const r=this.props,{children:t,breakpointCols:e,columnClassName:o,columnAttrs:i,column:s,className:l}=r,p=I(r,["children","breakpointCols","columnClassName","columnAttrs","column","className"]);let f=l;return typeof l!="string"&&(this.logDeprecated('The property "className" requires a string'),typeof l>"u"&&(f="my-masonry-grid")),c.createElement("div",g({},p,{className:f}),this.renderColumns())}}k.defaultProps=S;function y(n){return a.jsx("a",{...n})}function W(n){var r=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],t=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if((n=n.toString()).length>9)return"overflow";let e=("000000000"+n).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(e){var o="";return o+=e[1]!=0?(r[Number(e[1])]||t[e[1][0]]+" "+r[e[1][1]])+"crore ":"",o+=e[2]!=0?(r[Number(e[2])]||t[e[2][0]]+" "+r[e[2][1]])+"lakh ":"",o+=e[3]!=0?(r[Number(e[3])]||t[e[3][0]]+" "+r[e[3][1]])+"thousand ":"",o+=e[4]!=0?(r[Number(e[4])]||t[e[4][0]]+" "+r[e[4][1]])+"hundred ":"",o+=e[5]!=0?(o!=""?"and ":"")+(r[Number(e[5])]||t[e[5][0]]+" "+r[e[5][1]])+" ":"",o}}const T=x("div")`
    text-align: center;
    margin-bottom: 50px;

    a {
        font-weight: 400;
        color: #333;
        text-decoration: none;

        &.disabled {
            pointer-events: none;
            opacity: 0.3;
        }
    }

    .pagination-arrow > a {
        font-size: 60px;
    }

    .pagination-current, .pagination-total {
        font-family: 'Libre Baskerville', serif;
    }

    .pagination-current {
        font-size: 60px;
        z-index: 9;
        margin-left: 16px;
    }

    .pagination-total {
        z-index: 11;
        position: relative;
        top: 34px;
        left: 6px;
        display: inline-block;
        width: 50px;
        margin-right: 30px;
    }

    .pagination-line {
        position: absolute;
        margin-top: 40px;
        margin-left: -30px;
        display: inline-block;
        width: 70px;
        height: 50px;
        transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        background-color: #f1efe9;
        border-top: 2px solid gray;
        z-index: 10;
    }
`;function B(n){const{page:r,currPageNum:t,totalPages:e}=n;return a.jsxs(T,{children:[a.jsx("span",{className:"pagination-arrow",children:a.jsx(y,{className:j({disabled:t===1}),disabled:t<=1,href:`/${r}/${t-1}/`,children:a.jsx(C,{})})}),a.jsx("span",{className:"pagination-current",children:a.jsx(y,{href:`/${r}/${t}/`,children:t})}),a.jsx("span",{className:"pagination-line"}),a.jsx("span",{className:"pagination-total",children:W(e).toUpperCase()+"PAGE"+(e>1?"S":"")}),a.jsx("span",{className:"pagination-arrow",children:a.jsx(y,{className:j({disabled:t===e}),disabled:t>=e,href:`/${r}/${t+1}/`,children:a.jsx(v,{})})})]})}function F(n){return a.jsx("a",{...n})}const M=x.h2`
    text-align: center;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    font-size: 32px;
`,R=x(k)`
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  
    .masonry-grid-column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }
    
    .masonry-grid-column > div {
        margin-bottom: 40px;
        a {
            color: #333;
            text-decoration: none;
            text-align: center;
            &:hover {
                text-decoration: underline;
            }
        }
        .image, p {
            width: 80%;
            margin-left: 10%;
            overflow-x: hidden;
            text-overflow: ellipsis;
        }
    }
`;function H(n){const{title:r,page:t,items:e,currentPage:o,currentPageNum:i}=n;console.log(e);const l=parseInt({page:i}.page,10)||1,p=10,f=Math.ceil(e.length/p);console.assert(1<=l&&l<=f);const N=e.slice((l-1)*p,l*p).map(d=>a.jsx("div",{children:a.jsxs(F,{passHref:!0,href:`/${t}/${d.slug}/`,children:[a.jsx("img",{className:"image",src:d.img}),a.jsx("p",{children:d.title})]})},d.slug));return a.jsxs($,{currentPage:o,children:[a.jsx(M,{children:r}),a.jsx(R,{breakpointCols:{default:2,700:1},className:"masonry-grid",columnClassName:"masonry-grid-column",children:N}),a.jsx(B,{page:t,currPageNum:l,totalPages:f})]})}export{H as default};
