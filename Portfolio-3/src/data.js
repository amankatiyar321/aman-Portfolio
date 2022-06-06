//  icons
import {
 
  FiDownload,
  FiGithub,
 FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/practo1.webp';
import Project2 from './assets/img/projects/practo5.webp';
import Project3 from './assets/img/projects/practo13.webp';
import Project4 from './assets/img/projects/practo9.webp';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  
  {
    icon: <FiGithub />,
    href: 'https://github.com/amankatiyar321',
  },
  {
    icon: <FiLinkedin/>,
    href: 'https://www.linkedin.com/in/aman-katiyar-428050233',
  },
  {
    icon: <FiDownload/>,
    href: 'https://docs.google.com/document/d/1QhHPyT7Q5lQJi9kcarlskw96HIA7N_6A/edit?usp=sharing&ouid=103174325408584291780&rtpof=true&sd=true',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Apple Tv+ Clone',
    category: 'HTML/JavaScript ',
    details:'Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids entertainment, comedies and more — with new Apple Originals added every month.',
    icon: < FiGithub/>,
    href: 'https://github.com/codewithritik/tvapple-Clone',
  },
  {
    id: '2',
    image: Project2,
    name: 'Uboric Clone',
    category: 'web development',
    details:'Kitchen Ware - Uboric : Grocery Delivery India | Online Electric Appliances. FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500. Men footwear.',
    icon: < FiGithub/>,
    href: 'https://github.com/amankatiyar321/UboricUboric',
  },
  {
    id: '3',
    image: Project3,
    name: 'SmallCase Clone',
    category: 'HTML/JavaScript',
    details:'Smallcases are a curated theme-based portfolios, developed by Smallcase Technologies, a fintech company launched in 2016 by three IIT Kharagpur graduates. It allows investors to park their funds according to their conviction and lately they have become the talk of the town.',
    icon: < FiGithub/>,
    href: 'https://github.com/atin-sahu/smallcase',
  },
  {
    id: '4',
    image: Project4,
    name: 'Fraazo Clone',
    category: 'React.js',
    details:'Fraazo was launched in 2016 as a fresh produce store in the posh locality of Powai with a clear vision of serving the customers with farm-fresh groceries delivered at the doorstep.',
    icon: < FiGithub/>,
    href: 'https://github.com/amankatiyar321/Farrroz-fro',
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'HTML/JavaScript',
  },
  {
    name: 'web development',
  },
  {
    name: 'React.js',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Being a web developer is always difficult. Its a creative job, but one where usually you aren t the primary stakeholder. ',
  },
  {
    icon: <FiPenTool />,
    name: 'Team Mangement',
    description:
      'Team management is the ability of an individual or an organization to administer and coordinate a group of individuals to perform a task. Team management involves teamwork, communication, objective setting and performance appraisals.',
  },
  {
    icon: <FiTag />,
    name: 'Enthusiastic',
    description:
      'I’m really passionate about driverless cars because I feel they can save lives immediately. It’s really exciting to me that so much of your effort goes into developing the software used in these cars.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at amankatiyar0002016.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Noida,Uttar Pradesh',
    description: 'Full Stack Web Devloper',
  },
];
