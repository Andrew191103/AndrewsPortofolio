const data = [
  {
    title: '[Artificial Intelligence, Distributed Systems, Research Methodology in Computer Science]AI-Powered Privacy Policy Analysis Tool SPOT: Spot the Risks, Spot the Permissions, Spot the Truth',
    subtitle: '[AI-Powered Privacy Policy Analysis]',
    link: 'https://github.com/Andrew191103/AIfinal',
    image: '/images/projects/spot1.png',
    date: '2024-12-18',
    desc: 'Developed SPOT, an AI-powered tool designed to simplify complex privacy policies. The project includes both desktop and web applications, enabling users to analyze policies in various formats (PDF, Markdown, text). Leveraged advanced NLP models (GPT, BERT, BART) to generate summaries, detect risks, and extract permissions with reasons. SPOT empowers users by making privacy policies more understandable and actionable. Tagline: "Spot the Risks, Spot the Permissions, Spot the Truth."',
  },
  {
    title: '[Network Forensics] Analyzing Network Traffic',
    subtitle: '[Network Forensics]',
    link: 'https://drive.google.com/file/d/1CGgTdjA8uuFlgKLyZhFPjr_SXtIRjDzp/view?usp=sharing',
    image: '/images/projects/pcap.png',
    date: '2024-12-12',
    desc: 'Analyzed a PCAP file to investigate exploitation attempts targeting CVE-2020-5902 on an F5 BIG-IP system. Used Wireshark to identify indicators of compromise (IOCs) and assess the attacker\'s techniques, including directory traversal and unauthorized access. Findings highlighted the critical need for timely patching, restricted access, and robust monitoring practices to mitigate such vulnerabilities.',
  },
  {
    title: '[Software Engineering] Mini Automated Greenhouse Using Arduino Uno',
    subtitle: '[Software Engineering]',
    link: 'https://drive.google.com/file/d/1muqQ9FX3H9sEVVkBUnj23lgE9JL9Ec9J/view?usp=sharing',
    image: '/images/projects/greenhouse.png',
    date: '2024-11-17',
    desc: 'Developed a mini automated greenhouse system using Arduino Uno to control and monitor temperature, humidity, and soil moisture for optimal plant growth. Incorporated sensors (DHT11, soil moisture) and actuators (servo motor, relay module) to automate irrigation, ventilation, and roof adjustments. Built a dashboard for real-time data visualization and integrated Microsoft Data Streamer for logging sensor data. The project enhances STEM education by providing hands-on experience with IoT and microcontroller-based solutions.',
  },
  {
    title: '[Web Application Development and Security] "MorAlm" The Moringa Leaf Supply Chain Management Project',
    subtitle: '[Web Application Development and Security]',
    link: 'https://github.com/WADSFinalProject',
    image: '/images/projects/ch1.png',
    date: '2024-06-28',
    desc: '"MorAlm" is a web application designed to optimize the supply chain management of Moringa leaves, replacing inefficient manual processes with a digital solution. It tracks and manages production, transportation, and inventory across sectors like Centra (processing), Harbor (logistics), and MorAlm office (monitoring and packaging). The app provides role-based access, real-time notifications, and a user-friendly interface for efficient operations. Built with MySQL, Vercel, and Firebase, "MorAlm" supports both web and mobile platforms to ensure accessibility and convenience for all users. XYZ Live Link (Desktop): https://xyz-moralm.vercel.app/ Harbor Live Link (Desktop): https://harbormoralm.vercel.app/ Centra Live Link (Desktop): https://centramoralm.vercel.app/',
  },
  {
    title: '[Ethical Hacking and Penetration Testing] Comprehensive Penetration Test of a Target System',
    subtitle: '[Ethical Hacking and Penetration Testing]',
    link: 'https://drive.google.com/file/d/1jVKyo28af3nLFfe3AwOY2BrsJLsnwSnl/view?usp=sharing',
    image: '/images/projects/scan.png',
    date: '2024-06-21',
    desc: 'Conducted a penetration test on a designated target system to identify vulnerabilities and recommend solutions. The project covered reconnaissance, vulnerability scanning, password cracking, and maintaining access using ethical techniques. Highlights include the use of tools like Nmap, Nikto, and WPScan to simulate real-world cyber threats and uncover security weaknesses.',
  },
  {
    title: '[Computational Physics] Simulation of Motion & Force',
    subtitle: '[computational Physics]',
    link: 'https://github.com/Andrew191103/Computational-Physics-FP',
    image: '/images/projects/cp1.png',
    date: '2024-06-09',
    desc: 'The "Simulation of Motion & Force" simulates the motion of a cart on an inclined plane to explore fundamental physics concepts like gravity, friction, and net force. Built with Python and Pygame, it features real-time user interaction, adjustable parameters (e.g., force, angle, and friction), and visual feedback on motion, velocity, and acceleration. The project provides an educational tool for students to experiment with and understand physics principles interactively and visually.',
  },
  {
    title: '[Web Application Development and Security] To-Do List Web Application',
    subtitle: '[Web Application Development and Security]',
    link: 'https://github.com/Andrew191103/todo-db',
    image: '/images/projects/td1.png',
    date: '2024-05-15',
    desc: 'The "To-Do List Web App" is a task management application built with React, Firebase, and Vite. It allows users to create, edit, delete, and manage tasks with customizable statuses (To Do, In Progress, Done). Enhanced with Tailwind CSS for styling and optional Docker support for deployment, the app provides a clean, responsive interface and efficient backend services for seamless task organization. Live Demo: https://to-do-list-web-app-pi.vercel.app/',
  },
  {
    title: '[Fundamentals of Data Science] Earthquake Detection System',
    subtitle: '[Fundamentals of Data Science]',
    link: 'https://github.com/Andrew191103/Earthquake-Detection',
    image: '/images/projects/ed1.png',
    date: '2024-01-14',
    desc: 'Developed a machine learning-based system to analyze seismic data and predict earthquake occurrences using algorithms like LightGBM, Random Forest, SVM, and K-Means Clustering. The system processes data attributes such as depth, magnitude, latitude, and longitude to classify and predict earthquake types. The project aims to enhance earthquake preparedness by providing insights into seismic patterns and identifying high-risk zones. Link to Paper: https://www.overleaf.com/read/gcgdtbqfhsft#612b79',
  },
  {
    title: '[Algorithm Design and Analysis] Warehouse Optimization Using Greedy and Genetic',
    subtitle: '[Algorithm Design and Analysis]',
    link: 'https://github.com/wallacelt25/ADAFinalProject',
    image: '/images/projects/wm1.png',
    date: '2024-01-12',
    desc: 'This project improves warehouse operations using two algorithms: Greedy (for quick decisions) and Genetic (for better overall solutions). A dataset from Kaggle was used to simulate real-world tasks like order processing and item placement.',
  },
  {
    title: '[Database Technology] Official Reseller Management System',
    subtitle: '[Database Technology]',
    link: 'https://github.com/Andrew191103/DatabaseFinal',
    image: '/images/projects/er1.png',
    date: '2023-01-15',
    desc: 'The "Reseller Management System" is a database solution to help businesses manage resellers, inventory, and transactions. It separates B2B and B2C transactions, tracks inventory in real-time, simplifies order processing, and ensures data security. The system includes organized tables, easy-to-use queries for managing users, products, and transactions, and secure interfaces for admins and resellers. With role-based access and strong authentication, it provides a simple, secure, and efficient way to run reseller operations.',
  },
  {
    title: '[Object Oriented Programming] Andrews Manga Paradise',
    subtitle: '[Object Oriented Programming]',
    link: 'https://github.com/Andrew191103/OOPFinal',
    image: '/images/projects/mp1.png',
    date: '2023-06-17',
    desc: 'Built an online manga store app where users can browse, search, and buy manga. Features include filtering by genre, searching by author, and viewing manga details. Designed using object-oriented programming.',
  },
  {
    title: '[Algorithm and Programming] 2048 Game Implementation in Python',
    subtitle: '[Algorithm and Programming]',
    link: 'https://github.com/Nthan008/HCI-Onoy-Aztects',
    image: '/images/projects/game1.png',
    date: '2023-01-23',
    desc: 'Created a Python-based version of the 2048 puzzle game with a user-friendly interface, background music, and interactive buttons for starting and exiting the game. Utilized Pygame for graphics and game logic.',
  },
  {
    title: '[Human and Computer Interaction] Onoy Aztects',
    subtitle: '[Human and Computer Interaction]',
    link: 'https://github.com/Nthan008/HCI-Onoy-Aztects',
    image: '/images/projects/oa1.png',
    date: '2023-01-20',
    desc: '"Onoy Aztects" is a simple, free fitness website that helps people explore workout programs and classes online. It works on all devices and includes features like class schedules, client reviews, and a sign-up form. The website was created using HTML, CSS, and JavaScript, with a focus on being easy to use and accessible to everyone, especially students',
  },
  {
    title: '[Scientific Computing] FSM - Automatic Recycling Vending Machine',
    subtitle: '[Scientific Computing]',
    link: 'https://github.com/Andrew191103/FSM_AndrewSibuea',
    image: '/images/projects/fsm1.png',
    date: '2023-01-24',
    desc: 'Developed a simulation of an automatic recycling vending machine using a Finite State Machine (FSM). The machine processes user inputs to decide whether to open the door, accept or reject items, and display the outcome. Demonstrated the use of FSMs in system design and user interaction modeling.',
  },
];

export default data;
