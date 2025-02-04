import ProjectImg from "/src/assets/devconnect .png"
import One from "/src/assets/ONE.png"
import Shop from "/src/assets/shopingCart.png"
import todo from "/src/assets/todo.png"

export type Cards = {
    name:string
    img:string
    about:string
    href:string
    skills?:string[]
}
export const ProjectCards:Cards[] =[
    {
        name:"invideo ai",
        img:One,
        about:"DevConnect a platform which let devs to find and connect with one another",
        href:"https://github.com/HenryGozy/invideo-ai",
        skills:['html',"css",'javascript']
    },
    {
        name:"devconnect",
        img:ProjectImg,
        about:"DevConnect a platform which let devs to find and connect with one another",
        href:"https://github.com/HenryGozy/invideo-ai",
        skills:['html',"css",'javascript' ,'typescript','React' ]
    },

    {
        name:"simple todo app",
        img:todo,
        about:"DevConnect a platform which let devs to find and connect with one another",
        href:"https://github.com/HenryGozy/invideo-ai",
        skills:['html',"css",'javascript',"typescript",'react']
    },

    {
        name:"ecommerce platform ",
        img:Shop,
        about:"DevConnect a platform which let devs to find and connect with one another ",
        href:"https://github.com/HenryGozy/invideo-ai",
        skills:['html',"css",'javascript']
    },
]