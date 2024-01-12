import{M as t}from"./app-kzsgt4Wu.js";var a={provider:"Waline",dark:"auto",serverURL:"https://comment.thesandbin.com",reaction:["/emojis/angry.jpg","/emojis/neutral.jpg","/emojis/happy.jpg"],comment:!0,pageview:!0,copyright:!1};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-kzsgt4Wu.js").then(r=>r.N),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
