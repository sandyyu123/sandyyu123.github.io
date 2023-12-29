import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "About",
    icon: "",
    children: [
      {text: "子菜单1", icon: "", link: "*"}, 
      {text: "子菜单2", icon: "", link: "*"}, 
      {text: "子菜单3", icon: "", link: "*"}, 
    ]

    
  },
  {
    text: "Projects",
    icon: "",
    children: [
      {text: "子菜单1", icon: "", link: "*"}, 
      {text: "子菜单2", icon: "", link: "*"}, 
      {text: "子菜单3", icon: "", link: "*"}, 
    ]

    
  },
  {
    text: "Articles",
    icon: "",
    children: [
      {text: "子菜单1", icon: "", link: "*"}, 
      {text: "子菜单2", icon: "", link: "*"}, 
      {text: "子菜单3", icon: "", link: "*"}, 
    ]

    
  },
]);
