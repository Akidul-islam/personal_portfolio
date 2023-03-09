import {
  faCode,
  faShapes,
  faPager,
  faBookAtlas,
  faServer,
  faBookOpenReader,
} from '@fortawesome/free-solid-svg-icons';
// navber Data
const navList = [
  {
    id: 1,
    link: 'Home',
    href: '#home',
    link_active: true,
  },
  {
    id: 2,
    link: 'About',
    href: '#about',
    link_active: false,
  },
  {
    id: 3,
    link: 'Service',
    href: '#service',
    link_active: false,
  },
  {
    id: 4,
    link: 'Project',
    href: '#project',
    link_active: false,
  },
  {
    id: 5,
    link: 'Contack',
    href: '#contack',
    link_active: false,
  },
];

// skills percent Data
const barComponent = [
  { id: 1, title: 'Frontend', width: 50 },
  { id: 2, title: 'UI/UX', width: 70 },
  { id: 3, title: 'WEB DESIGN', width: 60 },
  { id: 4, title: 'GRAPHICE', width: 80 },
  { id: 5, title: 'VIDEO EDITING', width: 70 },
];

// css style
const styleWidth = (width) => {
  return {
    position: 'relative',
    width: `${width}%`,
    height: '100%',
    borderRadius: '0.2em',
    background: 'rgba(182, 63, 136, 0.749)',
    animation: 'width 0.5s linear',
    // transition: "0.2s linear",
  };
};

// project Component DATA
import Img1 from './Pages/Home/Images/img1.svg';
import Img2 from './Pages/Home/Images/img2.svg';
import Img3 from './Pages/Home/Images/img3.svg';
import Img4 from './Pages/Home/Images/img4.svg';
import Img5 from './Pages/Home/Images/img5.svg';

const data = [
  {
    id: 0,
    category: 'Portfolio',
    title: 'HTML/CSS/javascript',
    subtitle: 'Modern Design & Modern thought',
    img: Img1,
    cls: 'opacity-50',
  },

  {
    id: 1,
    category: 'E-commerc',
    title: 'javascript Project',
    subtitle: 'I have three year experiencs',
    img: Img2,
    cls: 'opacity-0',
  },
  {
    id: 2,
    category: 'blog',
    title: 'javascript Project',
    subtitle: 'I have three year experiencs',
    img: Img3,
    cls: 'opacity-100',
  },
  {
    id: 3,
    category: 'ui',
    title: 'javascript Project',
    subtitle: 'I have three year experiencs',
    img: Img4,
    cls: 'opacity-20',
  },
  {
    id: 4,
    category: 'react',
    title: 'javascript Project',
    subtitle: 'I have three year experiencs',
    img: Img5,
    cls: 'scale-50',
  },
];

// SERVICE SECTION DATA
const service = [
  {
    id: 1,
    title: 'Basic',
    price: 50,
    p1: 'high-quality Standard code,',
    p2: 'Pixel-Perfect Design,',
    p3: 'Fully Responsive Design,',
    p4: 'W3C Validated,',
    p5: 'On-Page SEO optimized Markup,',
    p6: 'Build pipleline & Development Setup',
  },
  {
    id: 2,
    title: 'Standard',
    price: 50,
    p1: 'Full Website Creation,',
    p2: 'Landing Page,',
    p3: 'Fully Responsive Design,',
    p4: 'Integrate custom forms,',
    p5: 'Mobile App Design,',
    p6: 'Cross-browser compatibility,',
  },

  {
    id: 3,
    title: 'premiume',
    price: 50,
    p1: 'high-quality Srabdart code,',
    p2: 'Pixel-Perfect Design,',
    p3: 'Fully Responsive Design,',
    p4: 'W3C Validated,',
    p5: 'On-Page SEO optimized Markup,',
    p6: 'Build pipleline & Development Setup',
  },
];

const featuresInfo = [
  {
    id: 1,
    label: 'Responsive Design',
    hover: false,
    desc: '  The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faCode,
  },
  {
    id: 2,
    label: 'Product Design',
    hover: false,
    desc: '  The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faShapes,
  },
  {
    id: 3,
    label: 'Landing Page',
    hover: true,
    desc: '  The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faPager,
  },
  {
    id: 4,
    label: 'UI/UX',
    hover: false,
    desc: '  The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faBookOpenReader,
  },
  {
    id: 5,
    label: 'REST API',
    hover: false,
    desc: '  The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faServer,
  },
  {
    id: 6,
    label: 'Libary/ Framework',
    hover: false,
    desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by  walk and near to Naviglio where you can enjoy the main night life inBarcelona.',
    Icon: faBookAtlas,
  },
];

// contack data
const categories = [
  {
    category: 'App Design',
  },
  {
    category: 'Web Design',
  },
  {
    category: 'UI/UX Design',
  },
  {
    category: 'Product Design',
  },
  {
    category: 'Content Upload',
  },
  {
    category: 'Customize Web',
  },
];
export {
  navList,
  data,
  service,
  barComponent,
  categories,
  styleWidth,
  featuresInfo,
};
