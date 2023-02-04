import { RiCompasses2Line, RiLightbulbLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
interface projectTypes {
  imgUrl: string;
  projectYear: number;
  projectName: string;
  projectDesc: string;
  projectLocation: string;
  creativeDirector: string;
  viszualization: string;
  projectImages: string[];
  projectDescOne: string;
  projectDescTwo: string;
  madeFor: string;
}
//Overall Information - these values cannot be null
export const companyName = "Prague"; //the name of the company
export const logo = "/assests/images/logo.png"; //logo of the company

//Contact-Info
interface infoTypes {
  inf: string;
  number: number;
  email: string;
  address: string;
}
export const infs: infoTypes[] = [
  {
    inf: "The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shared knowledge and enthusiasm.", //short info for footer
    number: 1234567899, //phone number
    email: "prague-architects@info.com", //mail
    address: "SRMIST,Ramapuram,Chennai,India", //address of company - locatable on google maps
  },
];

//socials
export const insta = "https://www.instagram.com/anime/"; //instagram link
export const facebook = "https://www.facebook.com/anime/"; //facebook link
export const linkedIn = "https://www.linkedin.com/feed/"; //linkedIn link

//Home
//Home Page -First Portion
export const place = "Chennai,India"; //place where the company is based
export const main = "Awesome Design for the Vorokhta Hub"; //name or tag of the company on the first portion of home page
export const objective =
  "The main objective of the project - transformation of Vorokhta City in innovative SMART CITY (village) and tourist center."; //objective of the company on the home page
export const mainButton = "Explore it"; //fist button on the main page

//Home Page - Second Portion
export const years_of_Experience = "14"; //years of experience of the company
export const yearsOfExpBackground = "/assests/images/main.jpg"; //background of the experience image in about section of home page
export const abHead = "Break out of your routine with a global perspective"; //About us heading
export const abContent =
  "Based on collective work and shared knowledge, Architecture-Studio aims to favour dialogue and debate, to transform individual knowledge into increased creative potential.Our Studio is a architecture practice based in Prague, Chech and Venice. Today, it includes 150 architects, urban planners, landscape and interior designers of 25 different nationalities. The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shred knowledge.  ";
//about us content

//projects for home/project page - the first 6 projects will be reflected on home page
export const projects: projectTypes[] = [
  {
    imgUrl: "/assests/images/main.jpg", //main project image - will be shown on projects page
    projectYear: 2010, // year of the project
    projectName: "poolscape villa", //project name
    projectDesc:
      "The project’s architecture expresses complementary features of a villa, made up of calm, quiet areas designed for family life, well as reception areas, which are open and welcoming.",
    //description of the project
    projectLocation: "poolscape villa", //location of the praject
    creativeDirector: "Andrus' Bezden", // creative Director
    viszualization: "Sasha Hamolin", // vizualized by
    projectImages: [
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
    ], //this array can have 6 pictures only not more than that
    //the below description is first para of the project's description
    projectDescOne:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    //the below description the second para of the project's description
    projectDescTwo:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    madeFor: "Aishwarya Tewari", // the client's name
  },
  {
    imgUrl: "/assests/images/projects/1.jpg",
    projectYear: 2013,
    projectName: "def",
    projectDesc: "abcdefghijklmnopqrstuvwxyz",
    projectLocation: "abc",
    creativeDirector: "Andrus' Bezden",
    viszualization: "Sasha Hamolin",
    projectImages: [
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
    ],
    projectDescOne:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    projectDescTwo:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    madeFor: "Aishwarya Tewari",
  },
  {
    imgUrl: "/assests/images/projects/2.jpg",
    projectYear: 2019,
    projectName: "hij",
    projectDesc: "abcdefghijklmnopqrstuvwxyz",
    projectLocation: "abc",
    creativeDirector: "Andrus' Bezden",
    viszualization: "Sasha Hamolin",
    projectImages: [
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
    ],
    projectDescOne:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    projectDescTwo:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    madeFor: "Aishwarya Tewari",
  },

  {
    imgUrl: "/assests/images/projects/4.jpg",
    projectYear: 2010,
    projectName: "abc",
    projectDesc: "abcdefghijklmnopqrstuvwxyz",
    projectLocation: "abc",
    creativeDirector: "Andrus' Bezden",
    viszualization: "Sasha Hamolin",
    projectImages: [
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
      "/assests/images/main.jpg",
    ],
    projectDescOne:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    projectDescTwo:
      "We propose creating a multifunctional space where you can make a choice: either to retire or be together with everybody. The space, clear of all unnecessary items, will take you to another dimension and help you to get tuned to a calm repose. Lot’s of light and air.In the center of the room there is a functional zoning volume, a white cube, dividing the entire living room into 5 zones: active pastime area, TV area, dressing area, secluded relaxation area and the central area – relaxation area, located inside the white volume.",
    madeFor: "Aishwarya Tewari",
  },
];
export const projectSubHead = "Make it with Passion"; //heading for the projects on home page

//testimonails for the home page
export const testimonialHeading = "They love us"; //heading for testimonials
export const testimonials = [
  {
    name: "Aishwarya", //name of client giving the testimonial
    message: "very good", //testimonial by the client
  },
  {
    name: "GS",
    message: "nicee",
  },
  {
    name: "Sai",
    message: "yooo",
  },
];

//About Page
//First Portion
export const aboutBackground = "/assests/images/about.jpg"; //the first image in about page
export const aboutMain = "I'm focus on creative work and shared knowledge"; //a short about statement in about us page aboout the company
export const About_company_backgr = "/assests/images/main.jpg"; //the bacground image for about us section in about us
export const descHead = "Make with love all what i do."; //about us second section heading
export const descContent =
  "I am final year Creative Computing student at Napier University in Edinburgh, working part time as a graphic designer. I also have a passion for 3D, especially environment art and hard surface modelling. I am proficient with many different tools, but my personal favourite is 3ds Max. I consider myself real-time rendering connoisseur. I also have great appreciation for digital sculpting. Selection of my most up to date works can be seen in the portfolio section.";
//About us content
export const about_array = "MY Skills";
export const skills = [
  "3ds Max",
  "Unreal Engine 4",
  "Substance Suite",
  "Marmoset Toolbag",
]; //it is an array which will be under description and about_array

//services section on about page
export const servicePic = "/assests/images/side.jpg"; //services bacground on about page
export const serHead = "This is what I do."; //heading under services section
export const services = [
  {
    serviceIcon: RiCompasses2Line, //icon for service provided - has to be taken from react-icons
    serviceName: "Planning", //the service to be provided
    serviceDesc:
      "Our master plans provide a comprehensive look at where an organization is today.", //service description
  },
  {
    serviceIcon: RiLightbulbLine,
    serviceName: "Interior",
    serviceDesc:
      " You may engage your architect to provide an interior design service, advising on loose furniture.",
  },
  {
    serviceIcon: FiLayers,
    serviceName: "Exterior",
    serviceDesc:
      "Working together with your architect, you will share your project needs, dreams and goals.",
  },
]; //array of services provided - 3 services only

//Time line on about page
export const timeline = "Awards that I have."; //timeline heading
export const timlineCon = [
  {
    year: "2010", //time
    name: "abbbbb", //name of award/achievement
    desc: "Shortlist (3 Finalist among 400 entries)", //description of award
  },
  {
    year: "2010",
    name: "abbbbb",
    desc: "Shortlist (3 Finalist among 400 entries)",
  },
  {
    year: "2010",
    name: "abbbbb",
    desc: "Shortlist (3 Finalist among 400 entries)",
  },
  {
    year: "2010",
    name: "abbbbb",
    desc: "Shortlist (3 Finalist among 400 entries)",
  },
  {
    year: "2010",
    name: "abbbbb",
    desc: "Shortlist (3 Finalist among 400 entries)",
  },
  {
    year: "2010",
    name: "abbbbb",
    desc: "Shortlist (3 Finalist among 400 entries)",
  },
];

//footer information
export const footer = "/assests/images/footer.jpg"; //image for footer
export const copyright = "copyright of aishwarya tewari 😁"; //copyright details
