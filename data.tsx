import { CodeSquare, HomeIcon, UserRound, Linkedin, Github, Download, Contact } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={35} strokeWidth={1.5}/>,
        src: "https://www.linkedin.com/in/yohan-garcia/",
    },
    {
        id: 3,
        logo: <Github size={35} strokeWidth={1.5} />,
        src: "https://github.com/Yohaan2",
    },
    {
        id: 3,
        logo: <Download size={35} strokeWidth={1.5} />,
        src: "/CV-Yohan.pdf",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={30} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={30} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={30} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    {
        id: 4,
        title: "Contact",
        icon: <Contact size={30} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Software Developer",
        subtitle: "Rhinolabs",
        description: "Desempeñe en muchas areas de desarrollo tanto frontend, backend como testing de las dos areas, traje con microservicion de AI, migracion de endpoints, script para migrar data.",
        date: "Jul 2023",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        subtitle: "Rhinolabs",
        description: "Trabaje en un proyecto para la empresa como pasante, donde desarrolle diversos endpoints entre los que destacan para la recupercacion de contraseña.",
        date: "Jun 2023",
    },
    {
        id: 3,
        title: "Full Stack Developer",
        subtitle: "Bootcamp Henry",
        description: "Como desarrollador full stack cree una landing page para poder de recetas de comida que formaba parte de una de la evaluaciones que pide el bootcamp para graduarse.",
        date: "Mar 2023",
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];
