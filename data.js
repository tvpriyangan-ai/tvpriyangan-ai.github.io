
const CERTIFICATES = [
  {title:"Artificial Intelligence", issuer:"The Programming Hub", date:"", category:"AI", image:"certificates/Ai.jpeg", link:""},
  {title:"C++", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/C++.jpeg", link:""},
  {title:"C Advanced", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/cAdvanced.jpeg", link:""},
  {title:"SQL", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/theSql.jpeg", link:""},
  {title:"Python", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/python.jpeg", link:""},
  {title:"Python 3", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/python3.jpeg", link:""},
  {title:"Python Advanced", issuer:"The Programming Hub", date:"", category:"Programming", image:"certificates/pythonAdvanced.jpeg", link:""},
  {title:"Python Programming", issuer:"The Coding X", date:"Jun 2026", category:"Programming", image:"certificates/pythonProgramming.jpeg", link:""},
  {title:"JavaScript", issuer:"The Programming Hub", date:"", category:"Web", image:"certificates/JS.jpeg", link:""},
  {title:"Web Development", issuer:"The Coding X", date:"Apr 2026", category:"Web", image:"certificates/webDevelopment.jpeg", link:""},
  {title:"Web Development Fundamentals", issuer:"IBM SkillsBuild", date:"", category:"Web", image:"certificates/IBM2.jpeg", link:""},
  {title:"Enterprise Design Thinking Practitioner", issuer:"IBM SkillsBuild", date:"", category:"Design", image:"certificates/IBM1.jpeg", link:""},
  {title:"Hikvision IP CCTV and Access Control Training", issuer:"Hikvision", date:"Jan 2025", category:"Electronics", image:"certificates/HIK.jpeg", link:""},
  {title:"Gem Identification and Valuation", issuer:"Gem Ethics Academy", date:"Sep 2025", category:"Other", image:"certificates/gem.jpeg", link:""}
];


const ACHIEVEMENTS = [
  {year:"2026", title:"With my web development lecturers at Birmingham City University", image:"images/websir.jpeg", side:false},
  {year:"2026", title:"INNOVATE-X at the University Innovation Exhibition", image:"images/exhibition1.jpeg"},
  {year:"2026", title:"INNOVATE-X team at the University Innovation Exhibition", image:"images/group.jpeg", side:false},
  {year:"2026", title:"INNOVATE X5 prototype: Smart Adaptive Temperature Control System", image:"images/mac.jpeg", side:false},
  {year:"2026", title:"INNOVATE-X futuristic model concept", image:"images/futurestic.jpeg", side:false},
  {year:"2026", title:"Innovation Fest 2026 pass, Birmingham City University", image:"images/fest.jpeg", side:false},
  {year:"2026", title:"Innovation Fest 2026 group photo at BCU", image:"images/festgroup.jpeg", side:false},
  {year:"2026", title:"Birmingham City University post celebrating Innovation Fest 2026", image:"images/festpost.jpeg", side:false},
  {year:"2026", title:"BCU Racing open day, Birmingham City University", image:"images/exhibition2.jpeg", side:false},
  {year:"2026", title:"Smart Adaptive Temperature Control System poster", image:"images/exhi.jpeg"},
  {year:"2026", title:"Vinayagamoorthy Jothidam Software poster", image:"images/vjPoster.jpeg"},
  {year:"2026", title:"MR DOC Management Software poster", image:"images/mrdocPoster.png"},
  {year:"2026", title:"DC Stock Manager Inventory Software poster", image:"images/dcPoster.png"},
  {year:"2025", title:"Hikvision Co-Brand Recognition through DC Electricals", image:""},
  {year:"2023", title:"Completed an Advanced Diploma in Information Technology, AICT Campus", image:""},
  {year:"2019", title:"Ranked 9th in the district in the GCE Advanced Level examination (Physical Science) and selected to study Physiotherapy at the University of Peradeniya, Sri Lanka", image:""},
  {year:"2019", title:"4th place, Provincial Debate Competition", image:""},
  {year:"2015–2019", title:"1st place, District Tamil Speech and Tamil Poetry Competitions (every year)", image:""},
  {year:"2017", title:"Junior Inventor Award", image:""},
  {year:"2016", title:"4th place, Provincial General Knowledge Quiz", image:""}
];

const PROJECTS = [
  {title:"Vinayagamoorthy Jothidam ( Astrology Software)", desc:"Astrology platform with Jathagam calculation, 22 Porutham matching, Dasa/Bhukti, Panchangam and an AI agent that answers questions in natural language. Published on Google Play as a PWA and Android TWA.", tags:["React","FastAPI","MongoDB","JWT","Android TWA"], images:["images/vjlog.jpeg","images/vjm.jpeg","images/vj3.jpeg","images/vj2.jpeg","images/VJC.jpeg","images/vjPoster.jpeg"], play:"", live:"", code:"https://github.com/tvpriyangan-ai"},
  {title:"MR DOC ( Management Software)", desc:"Business management system with invoices, customers, transaction history and dashboards for income, expenses and net profit.", tags:["Node.js","Express","MongoDB Atlas"], images:["images/mrdoc1.jpeg","images/mrdoc2.jpeg","images/mrdocPoster.png"], live:"", code:"https://github.com/tvpriyangan-ai"},
  {title:"DC Stock Manager ( Inventory Software)", desc:"Inventory system for CCTV businesses: 150+ products, stock in and out, low-stock alerts, PDF invoices and role-based users.", tags:["Node.js","Express","MySQL"], images:["images/dcm.jpeg","images/dch.jpeg","images/dcsp.jpeg","images/dcPoster.png"], live:"", code:"https://github.com/tvpriyangan-ai"},
  {title:"Hardware Projects", desc:"Arduino prototype that heats, cools and runs a fan automatically from live temperature readings. Shown at the university Innovation Exhibition.", tags:["Arduino","IoT","Sensors"], images:["images/exhibition1.jpeg","images/exhi.jpeg","images/futurestic.jpeg","images/mac.jpeg","images/festgroup.jpeg","images/fest.jpeg","images/festpost.jpeg"], live:"", code:"https://github.com/tvpriyangan-ai"},
  {title:"Websites", desc:"A multi-page portfolio website exploring Demis Hassabis, his AI research, DeepMind and the impact of AlphaFold.", tags:["HTML5","CSS3","JavaScript"], images:["images/dhPoster.png"], live:"", code:"https://github.com/tvpriyangan-ai"},
  {title:"Hospital Management System", desc:"Python desktop app managing doctors, patients and hospital records with a database behind it.", tags:["Python","GUI","Database"], images:["images/HMSPoster.png"], code:"https://github.com/tvpriyangan-ai"},
  {title:"Employee Management System", desc:"Create, update, search and delete employee records, built with object-oriented Python and MySQL.", tags:["Python","MySQL","OOP"], images:["images/EMSPoster.png"], code:"https://github.com/tvpriyangan-ai"}
];


const INVENTIONS = [
  {title:"Bulb Fan", image:"images/bulbFan.jpeg"},
  {title:"Dual Light", image:"images/dualLight.jpeg"},
  {title:"Flash Light", image:"images/flashLight.jpeg"},
  {title:"Flex Fan", image:"images/flexFan.jpeg"},
  {title:"Hand Fan", image:"images/handFan.jpeg"},
  {title:"Hand Fan (Large)", image:"images/handFanBig.jpeg"},
  {title:"Owl Speaker", image:"images/owlSpeaker.jpeg"},
  {title:"Slim Focus Light", image:"images/slimFocus.jpeg"},
  {title:"Sound Box", image:"images/soundBox.jpeg"}
];
