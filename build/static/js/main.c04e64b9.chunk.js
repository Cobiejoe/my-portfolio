(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),s=(a(11),a(5));function o(){var e=Object(n.useRef)();return Object(n.useEffect)(function(){Object(s.a)(e.current,{showCursor:!0,strings:["Software Developer."],backDelay:2e3})},[]),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"},l.a.createElement("div",{className:"lg: flex-grow md: w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center"},l.a.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white"},"Hi, I'm Joe!",l.a.createElement("br",{className:"hidden lg:inline-block"}),l.a.createElement("span",{ref:e,className:"text-blue-400"})),l.a.createElement("p",{className:"mb-8 leading-relaxed"},"After completing my undergrad in Business Administration, I spent 4 years in the service industry, bartending and waiting tables. After a conversation with a mentor about switching career industries, I decided to give programming a shot. What started as a curiosity and a passive, fun activity to help build some technical skills, ended as a full-fledged passion and borderline obession with the world of information technology. I fell in love with creating projects, solving dynamic problems, and spent countless hours reading documentation, following tutorials, and grinding out algorithms. I found myself enrolling in a bootcamp where I was able to strengthen my expertise and learn industry demanding skills and technologies. After a year and a half of building credentials and facilitating my title as a developer, I'm ready to take my abilities into the professional world. Check out the rest of my site!"),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"},"See my past work!"))),l.a.createElement("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6"},l.a.createElement("img",{className:"object-cover object-center h-96 w-96 rounded-full",alt:"hero",src:"./profile_img.jpg"}))))}var m=a(2),c=a(1);function d(){var e=l.a.useState(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),i=Object(m.a)(r,2),s=i[0],o=i[1],d=l.a.useState(""),g=Object(m.a)(d,2),u=g[0],f=g[1];return l.a.createElement("section",{id:"contact",className:"relative"},l.a.createElement("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"},l.a.createElement("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"},l.a.createElement("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed/v1/place?q=Eugene+Or&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}),l.a.createElement("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"},l.a.createElement("div",{className:"lg:w-1/2 px-6"},l.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs"},"LINKEDIN"),l.a.createElement("p",{className:"mt-1"},l.a.createElement("a",{className:"leading-relaxed hover:text-indigo-400 hover:underline",href:"https://www.linkedin.com/in/josephcobarrubias/"},l.a.createElement(c.f,{className:"mx-auto inline-block w-5 mr-1 mb-1"}),"Joe Cobarrubias"))),l.a.createElement("div",{className:"g:w-1/2 px-6 mt-4 lg:mt-0"},l.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4"},"EMAIL"),l.a.createElement("a",{className:"text-indigo-400 leading-relaxed"},"josephcobarrubias@gmail.com"),l.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4"},"PHONE"),l.a.createElement("p",{className:"leading-relaxed"},"(559)301-1598")))),l.a.createElement("form",{netlify:!0,name:"contact",onSubmit:function(e){var t;e.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"contact",name:a,email:s,message:u},Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){return alert("Message sent!")}).catch(function(e){return alert(e)})},className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},l.a.createElement("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font"},"Contact Me!"),l.a.createElement("p",{className:"leading-relaxed mb-5"},"Interested in getting to know me further? I currently reside in Eugene, OR - but relocation is always an option! Send me a message and I'll get back to you ASAP."),l.a.createElement("div",{className:"relative mb-4"},l.a.createElement("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400"},"Name/Organization"),l.a.createElement("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return n(e.target.value)}})),l.a.createElement("div",{className:"relative mb-4"},l.a.createElement("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400"},"Email"),l.a.createElement("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"relative mb-4"},l.a.createElement("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400"},"Message"),l.a.createElement("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return f(e.target.value)}})),l.a.createElement("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Submit"))))}function g(){return l.a.createElement("header",{className:"bg-gray-800 md:sticky top-0 z-10"},l.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},l.a.createElement("a",{className:"title-font font-medium text-white mb-4 md:mb-0"},l.a.createElement("a",{href:"#about",className:"ml-3 text-xl"},"Joseph Cobarrubias")),l.a.createElement("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center"},l.a.createElement("a",{href:"#projects",className:"mr-5 hover:text-white"},"Past Work"),l.a.createElement("a",{href:"#skills",className:"mr-5 hover:text-white"},"Skills")),l.a.createElement("a",{href:"#contact",className:"inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"},"Contact Me!",l.a.createElement(c.a,{className:"w-4 h-4 ml-1"}))))}var u=[{title:"Apollo Music Share",subtitle:"React, Apollo, GraphQL",description:"Music sharing app created with advanced React hooks, styled with MaterialUI, and managed with Apollo and GraphQL. Works with any valid Youtube or SoundCloud link",image:"./music-share-gif.gif",link:"https://cobiejoe-music-share.herokuapp.com/"},{title:"Friend Ships",subtitle:"Lightning Data Service, Lightning Web Components, Javascript",description:"Boat-leasing service application that allows users and sellers to browse boats for sale in their area",image:"./friend-ships-gif.gif",link:"https://github.com/Cobiejoe/Friend-Ships"},{title:"2D RPG",subtitle:"Java, Piskel",description:"2d RPG video game using advanced java classes and my own (very crude) pixel art. Work in progress!",image:"./game_gif.gif",link:"https://github.com/Cobiejoe/2D-RPG"},{title:"Instagram Clone",subtitle:"React Hooks, Apollo, Hasura, GraphQL",description:"Complete instagram Clone utilizing React hooks. (WORK IN PROGRESS)",image:"./instagram_gif.gif",link:"https://github.com/Cobiejoe/instagram-clone"}],f=["Java","Spring Boot","Javascript","MySQL","Node","GraphQL","Material UI","React","Apollo","Firebase","Three.js","HTML/CSS"];function p(){return l.a.createElement("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font"},l.a.createElement("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40"},l.a.createElement("div",{className:"flex flex-col w-full mb-20"},l.a.createElement(c.d,{className:"mx-auto inline-block w-10 mb-4"}),l.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white"},"Apps I've Built"),l.a.createElement("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base"},"Below is a collection of my personal projects, each focusing on different technologies that I've learned over time. From building back-end API's to designing front-end user interfaces, these applications were constructed by yours truly.")),l.a.createElement("div",{className:"flex flex-wrap -m-4"},u.map(function(e){return l.a.createElement("a",{href:e.link,key:e.image,className:"sm:w-1/2 w-100 p-4"},l.a.createElement("div",{className:"flex relative"},l.a.createElement("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),l.a.createElement("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"},l.a.createElement("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1"},e.subtitle),l.a.createElement("h1",{className:"title-font text-lg font-medium text-white mb-3"},e.title),l.a.createElement("p",{className:"leading-relxed"},e.description))))})),l.a.createElement("div",{className:"p-10"},l.a.createElement("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base p-10 border-dotted border-2 border-gray-400"},"If you're interested in any other apps I've created and/or am working on, as well as assignments and projects I completed at Promineo Tech, here's a link to my github!",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(c.e,{className:"mx-auto inline-block w-5 mr-2"}),l.a.createElement("a",{className:"underline hover:no-underline",href:"https://github.com/Cobiejoe"},"https://github.com/Cobiejoe")))))}function b(){return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"container px-5 py-10 mx-auto"},l.a.createElement("div",{className:"text-center mb-20"},l.a.createElement(c.c,{className:"w-10 inline-block mb-4"}),l.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4"},"Skills & Technologies"),l.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"List of my applicable qualifications pertaining to software development. Don't worry, I also have some other, non-technical skills :)")),l.a.createElement("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},f.map(function(e){return l.a.createElement("div",{key:e,className:"p-2 sm:w-1/2 w-full"},l.a.createElement("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center"},l.a.createElement(c.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),l.a.createElement("span",{className:"title-font font-medium text-white"},e)))}))))}function x(){return l.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},l.a.createElement(g,null),l.a.createElement(o,null),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(d,null))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.c04e64b9.chunk.js.map