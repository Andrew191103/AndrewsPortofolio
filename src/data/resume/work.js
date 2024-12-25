/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'RICS Paws the Hunt Event (WWF)',
    position: 'Liaison Officer',
    startDate: '2017-03-02',
    endDate: '2017-04-08',
    summary: 'Helped coordinate and organize a wildlife conservation event for WWF.',
    highlights: [
      'Coordinated communication between organizers, participants, and stakeholders.',
      'Helped manage event logistics and ensure smooth execution.',
    ],
  },
  {
    name: 'RICS Heart to Help Event',
    position: 'Liaison Officer',
    startDate: '2018-03-01',
    endDate: '2018-04-06',
    summary: 'Managed schedule and acted as a point of contact for a charity event.',
    highlights: [
      'Coordinated with team members and participants to maintain an organized event flow.',
      'Provided assistance to attendees and ensured the event ran on time.',
    ],
  },
  {
    name: 'RICS Morning Devotion Sessions',
    position: 'Guitarist',
    startDate: '2018-07-25',
    endDate: '2020-07-25',
    summary: 'Played guitar to support the Morning Devotion Sessions.',
    highlights: [
      'Performed guitar music to create a meaningful and spiritual atmosphere.',
      'Contributed to the success of the sessions through musical accompaniment.',
    ],
  },
  {
    name: 'Student Development Center',
    position: 'First Year Program B2026 Participant',
    startDate: '2022-07-25',
    endDate: '2022-09-17',
    summary: 'Engaged in orientation and development activities as part of the First Year Program.',
    highlights: [
      'Participated in team-building exercises to foster collaboration and adaptability.',
      'Developed a foundational understanding of applied management skills.',
    ],
  },
  {
    name: 'Communication Program Binus Senayan',
    position: 'BGA Session with NOICE Participant',
    startDate: '2022-09-22',
    endDate: '2022-09-22',
    summary: 'Attended a session with NOICE to enhance communication and networking skills.',
    highlights: [
      'Learned about effective communication strategies in professional settings.',
      'Interacted with industry experts to gain insights into media and broadcasting trends.',
    ],
  },
  {
    name: 'SSO Senayan Campus',
    position: 'FYP - Excellence Program B2026 Participant',
    startDate: '2022-09-26',
    endDate: '2023-06-26',
    summary: 'Participated in the First Year Program (FYP) to develop skills in applied management and leadership.',
    highlights: [
      'Engaged in workshops and activities designed to build collaboration and management skills.',
      'Worked on real-world projects under the mentorship of experienced facilitators.',
    ],
  },
  {
    name: 'PsycHelp',
    position: 'Co-founder and Designer',
    startDate: '2023-02-27',
    endDate: '2023-06-12',
    summary: 'PsycHelp is a conceptual app designed to assist users in managing their mental health by providing personalized care, privacy control, and daily task tracking to improve well-being.',
    highlights: [
      'Proposed the idea and designed the app concept, including the name "PsycHelp" and its primary features.',
      'Conducted user research by interviewing individuals with mental health struggles to understand their needs and pain points.',
      'Developed unique features like daily tasks for patient progress tracking and discounts for therapy sessions, addressing gaps in existing apps like Riliv and Bicarakan.',
      'Focused on a target market of Indonesian youth (ages 17-25), ensuring inclusivity across genders and mental health issues.',
      'Planned features for secure doctor-patient interactions, including detailed doctor profiles, appointment scheduling, and multiple payment methods.',
      'Outlined future development goals, such as face-to-face sessions, free online seminars, and improved user engagement strategies.',
    ],
  },
  {
    name: 'GuacaRasa',
    position: 'Co-founder',
    url: 'https://www.instagram.com/guacarasa?igsh=OWZhejBpbXN1cGp0',
    startDate: '2023-10-05',
    endDate: '2024-01-01',
    summary: 'GuacaRasa combines the freshness of guacamole with authentic Indonesian flavors, creating a unique blend of tradition and modernity.',
    highlights: [
      'Conceived the idea for the business and developed the name "GuacaRasa."',
      'Designed and created the business model canvas to establish a strong foundation for the business.',
      'Refined guacamole recipes inspired by Indonesian spices, such as rendang and sambal, to create unique and flavorful offerings.',
      'Launched innovative products like rendang-flavored guacamole, catering to health-conscious consumers, food enthusiasts, and Indonesian cuisine lovers.',
      'Built a sustainable business model emphasizing cultural appreciation, health, and fresh ingredients, while providing customizable and convenient snack options.',
    ],
  },
  {
    name: 'BINUS University',
    position: 'Rector Cup 2023 Cabang Mobile Legends Organizer',
    startDate: '2023-12-11',
    endDate: '2023-12-18',
    summary: 'Organized and facilitated the Rector Cup competition for Mobile Legends, fostering teamwork and showcasing student talents in e-sports.',
    highlights: [
      'Coordinated with team captains and participants to ensure smooth event execution.',
      'Gathered and formed a team to participate in the competition.',
      'Participated in the competition itself, representing and promoting the event.',
      'Promoted the event to increase participation and audience engagement.',
    ],
  },
  {
    name: 'HKBP Badminton Tournament (Senandung)',
    position: 'Liaison Officer',
    startDate: '2024-09-21',
    endDate: '2024-09-22',
    summary: 'Served as the primary connection between participants and event organizers, ensuring effective communication, coordination, and smooth execution of the tournament schedule.',
    highlights: [
      'Acted as a communication bridge between participants and the event organizers.',
      'Ensured participants adhered to the match schedule and were ready at the designated locations.',
      'Directed participants to match areas and coordinated with officials to sign match results.',
      'Provided essential items, such as bottled water, to participants during matches.',
      'Facilitated pre-match activities, including player introductions and documentation sessions.',
      'Maintained communication with the Liaison Officer Coordinator (PIC LO) for updates and troubleshooting.',
    ],
  },
  {
    name: 'BINUS University',
    position: 'Mid Exam Assistant Proctor Odd Semester 2024/2025',
    startDate: '2024-10-31',
    endDate: '2024-11-07',
    summary: 'Assisted in the smooth execution of mid-term exams by overseeing procedures, ensuring rules were followed, and providing support to students and faculty during examinations.',
    highlights: [
      'Supervised examination sessions to ensure integrity and compliance.',
      'Provided assistance to students with any queries during the examination process.',
      'Collaborated with the Student Support Office to resolve logistical challenges effectively.',
    ],
  },
];

export default work;
