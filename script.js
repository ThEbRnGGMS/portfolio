'use strict';

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const i18n = {
  fr: {
    navHome: 'Accueil',
    navAbout: 'À propos',
    navSkills: 'Compétences',
    navProjects: 'Projets',
    navExperience: 'Parcours',
    navContact: 'Contact',
    available: 'En alternance chez Evariste · 2026–2028',
    hello: "Salut, moi c'est",
    iAm: 'Je suis passionné par',
    heroText: "Technicien assistance informatique en alternance chez Evariste et étudiant en BTS SIO SISR à Ensitech. J’interviens sur le support utilisateurs, la préparation des postes, la gestion du parc et les environnements Windows, Linux et Microsoft 365.",
    seeProjects: 'Explorer mes projets',
    downloadCV: 'Télécharger mon CV',
    contactMe: 'Me contacter ↗',
    scroll: 'Défiler pour découvrir',
    aboutTitle: "L'infrastructure, ma passion.",
    aboutIntro: "Une approche pratique, une envie constante d'apprendre.",
    aboutCardTitle: 'Un profil orienté terrain',
    aboutBody: "En BTS SIO option SISR à Ensitech, je développe mes compétences en alternance chez Evariste : diagnostic des incidents via Jira Service Desk, assistance aux utilisateurs, gestion des comptes Active Directory et Microsoft 365, préparation du matériel et suivi du parc informatique. Mes stages chez Orness et Carrier Transicold m’ont également permis de pratiquer Linux, les réseaux, Python et l’IoT.",
    recruiterTitle: 'Vous recrutez ?',
    recruiterBody: 'Découvrez mon parcours en 60 secondes avec une visite guidée des sections clés du portfolio.',
    startTour: 'Lancer la visite guidée →',
    rhythm: 'alternance chez Evariste',
    certificateTitle: 'Certification Cisco Networking Academy',
    certificateIntro: 'Networking Devices and Basic Configuration · Certificat de fin de formation obtenu le 26 octobre 2026.',
    certificateView: 'Voir le certificat PDF ↗',
    skillsTitle: 'Ma boîte à outils.',
    skillsIntro: "Des technologies que j'utilise ou que j'ai pratiquées en formation et en stage.",
    projectsTitle: 'Du concret, pas du blabla.',
    projectsIntro: 'Des réalisations et missions techniques issues de mon expérience. Détails disponibles en cliquant sur chaque carte.',
    projectNote: 'Ces fiches présentent des travaux décrits dans mon CV ; les captures et résultats chiffrés pourront être ajoutés après validation.',
    networkTitle: 'Explore une architecture réseau.',
    networkIntro: "Schéma pédagogique interactif : sélectionne un équipement pour comprendre son rôle. Ce n'est pas une reproduction d'une infrastructure réelle.",
    experienceTitle: 'Mon parcours en action.',
    experienceIntro: 'Stages, apprentissages et formation.',
    labTitle: 'Un petit Linux dans ton navigateur.',
    labIntro: "Explore mon espace de travail interactif : terminal avec historique, explorateur de projets et raccourcis. Tout fonctionne en simulation dans ton navigateur.",
    contactTitle: 'On construit quelque chose ?',
    contactIntro: 'Une question, un projet ou une opportunité professionnelle : échangeons.',
    contactDirect: 'Me contacter directement',
    phone: 'Téléphone',
    sendMessage: 'Envoyer un message',
    yourName: 'Votre nom',
    yourEmail: 'Votre e-mail',
    yourMessage: 'Votre message',
    send: "Préparer l'e-mail ↗",
    formNote: "Ce formulaire ouvre votre application e-mail : aucun message n'est envoyé automatiquement.",
    madeWith: 'Créé avec curiosité et quelques lignes de code.'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Journey',
    navContact: 'Contact',
    available: 'IT support apprentice at Evariste · 2026–2028',
    hello: "Hi there, I'm",
    iAm: "I'm passionate about",
    heroText: 'IT support apprentice at Evariste and BTS SIO SISR student at Ensitech. I work on user support, workstation deployment, IT asset management and Windows, Linux and Microsoft 365 environments.',
    seeProjects: 'Explore my projects',
    downloadCV: 'Download my CV',
    contactMe: 'Get in touch ↗',
    scroll: 'Scroll to explore',
    aboutTitle: 'Infrastructure is my passion.',
    aboutIntro: 'Hands-on learning and endless curiosity.',
    aboutCardTitle: 'A hands-on mindset',
    aboutBody: 'As a BTS SIO SISR student at Ensitech, I am gaining hands-on experience at Evariste: incident handling through Jira Service Desk, user support, Active Directory and Microsoft 365 accounts, device setup and IT asset tracking. Previous internships at Orness and Carrier Transicold also gave me experience with Linux, networking, Python and IoT.',
    recruiterTitle: 'Hiring?',
    recruiterBody: 'Discover my background in a short guided tour of this portfolio.',
    startTour: 'Start guided tour →',
    rhythm: 'apprenticeship at Evariste',
    certificateTitle: 'Cisco Networking Academy Certificate',
    certificateIntro: 'Networking Devices and Basic Configuration · Course completion certificate issued October 26, 2026.',
    certificateView: 'View PDF certificate ↗',
    skillsTitle: 'My toolkit.',
    skillsIntro: 'Technologies I have used in training or internships.',
    projectsTitle: 'Real work, real learning.',
    projectsIntro: 'Technical assignments from my experience. Click any card for more details.',
    projectNote: 'These case studies reflect tasks documented in my CV; screenshots and quantified outcomes can be added once verified.',
    networkTitle: 'Explore a network architecture.',
    networkIntro: 'Interactive educational diagram: select a device to see its role. This is not a real deployed network.',
    experienceTitle: 'My journey so far.',
    experienceIntro: 'Internships, learning and education.',
    labTitle: 'A little Linux in your browser.',
    labIntro: 'A simulated desktop with no access to your computer. Open the terminal and try the secret game!',
    contactTitle: "Let's build something.",
    contactIntro: 'Questions, projects or professional opportunities: get in touch.',
    contactDirect: 'Direct contact',
    phone: 'Phone',
    sendMessage: 'Send a message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourMessage: 'Your message',
    send: 'Compose email ↗',
    formNote: 'This form opens your email application; nothing is sent automatically.',
    madeWith: 'Built with curiosity and a few lines of code.'
  }
};

const skills = [
  ['🛠️', 'Support IT / Jira', 'Incidents · Help desk'],
  ['🔐', 'Active Directory', 'Comptes · Accès · Identity'],
  ['☁️', 'Microsoft 365', 'Comptes · Bureautique'],
  ['💻', 'Parc informatique', 'Windows · macOS · Matériel'],
  ['🐧', 'Linux / Ubuntu', 'Systèmes · Systems'],
  ['🌐', 'DHCP / DNS', 'Services réseau · Networking'],
  ['⌨️', 'Bash', 'Scripts shell'],
  ['🐍', 'Python', 'Automatisation · Automation'],
  ['🔁', 'Ansible', 'Configuration'],
  ['🔀', 'Cisco / LAN', 'Commutation · Switching'],
  ['🖥️', 'Windows', 'Diagnostic système · Diagnostics'],
  ['☁️', 'IoT / Flespi', 'Télématique · Telematics']
];

const projects = [
  {
    id: 'support', category: ['security', 'network'], icon: '🛠️', art: '#315de9',
    title: { fr: 'Support utilisateurs & gestion des incidents', en: 'User support & incident management' },
    desc: { fr: 'Diagnostic et résolution des incidents via Jira Service Desk, support matériel, logiciel et bureautique chez Evariste.', en: 'Incident diagnosis and resolution through Jira Service Desk, hardware, software and office support at Evariste.' },
    goal: { fr: 'Accompagner les utilisateurs et assurer le suivi des demandes informatiques.', en: 'Help users and track IT service requests.' },
    steps: { fr: 'Prise en charge des tickets, diagnostic, dépannage de proximité, suivi des SAV constructeurs et escalade vers la DSI si nécessaire.', en: 'Handle tickets, troubleshoot on site, coordinate manufacturer support and escalate to IT teams when needed.' },
    result: { fr: 'Missions décrites dans le cadre de l’alternance Evariste (septembre 2026 – Août 2028) ; aucun indicateur chiffré communiqué.', en: 'Responsibilities listed for the Evariste apprenticeship (September 2026 – August 2028); no quantified results provided.' },
    tags: ['Jira Service Desk', 'Support IT', 'Windows', 'Hardware']
  },
  {
    id: 'identity', category: ['security', 'network'], icon: '🔐', art: '#596bc1',
    title: { fr: 'Comptes, habilitations & postes de travail', en: 'Accounts, access rights & workstations' },
    desc: { fr: 'Gestion des arrivées et départs, comptes Active Directory et Office 365, droits d’accès et préparation des postes.', en: 'Onboarding and offboarding, Active Directory and Office 365 accounts, access rights and workstation setup.' },
    goal: { fr: 'Préparer les équipements et attribuer les accès adaptés aux utilisateurs.', en: 'Prepare devices and assign appropriate user access.' },
    steps: { fr: 'Gestion des groupes de sécurité, listes de distribution et accès métiers ; configuration de postes Windows, Ubuntu, Mac et tablettes.', en: 'Manage security groups, distribution lists and business application access; configure Windows, Ubuntu, Mac and tablet devices.' },
    result: { fr: 'Activités de l’alternance chez Evariste ; données sensibles et détails internes non publiés.', en: 'Evariste apprenticeship responsibilities; internal and sensitive details are not published.' },
    tags: ['Active Directory', 'Office 365', 'Windows', 'Ubuntu']
  },
  {
    id: 'assets', category: ['network'], icon: '📦', art: '#438bba',
    title: { fr: 'Gestion et renouvellement du parc IT', en: 'IT asset management & refresh' },
    desc: { fr: 'Inventaire, réception, configuration et expédition des équipements ; participation au renouvellement des postes.', en: 'Inventory, receipt, configuration and shipment of equipment; participation in workstation refreshes.' },
    goal: { fr: 'Assurer le suivi des équipements et préparer leur mise à disposition.', en: 'Track equipment and prepare devices for deployment.' },
    steps: { fr: 'Suivi des PC, téléphones, tablettes et terminaux RFID ; planification, transfert de données et réinstallation lors des renouvellements.', en: 'Track PCs, phones, tablets and RFID devices; plan migrations, transfer data and reinstall systems during refreshes.' },
    result: { fr: 'Missions prévues et décrites dans le CV pour l’alternance Evariste.', en: 'Responsibilities documented in the CV for the Evariste apprenticeship.' },
    tags: ['Inventaire', 'Déploiement', 'Matériel', 'RFID']
  },
  {
    id: 'linux',
    category: ['linux', 'network'],
    icon: '🐧',
    art: '#4267d5',
    title: { fr: 'Serveurs Ubuntu & services réseau', en: 'Ubuntu servers & network services' },
    desc: { fr: 'Installation de serveurs, configuration DHCP/DNS et administration de switch Cisco chez Orness.', en: 'Server setup, DHCP/DNS configuration and Cisco switch administration at Orness.' },
    goal: { fr: 'Mettre en pratique le déploiement et la configuration de services système et réseau.', en: 'Practice deploying and configuring system and network services.' },
    steps: { fr: 'Installation et configuration de serveurs Ubuntu ; configuration de services DHCP et DNS ; administration de switch Cisco.', en: 'Install and configure Ubuntu servers; set up DHCP and DNS; administer a Cisco switch.' },
    result: { fr: 'Missions réalisées pendant le stage chez Orness (mai–juin 2025). Aucun indicateur de performance chiffré communiqué.', en: 'Tasks performed during an internship at Orness (May–June 2025). No quantified performance results available.' },
    tags: ['Ubuntu', 'DHCP', 'DNS', 'Cisco']
  },
  {
    id: 'automation',
    category: ['linux', 'python'],
    icon: '⚙️',
    art: '#438bba',
    title: { fr: 'Automatisation Bash & Ansible', en: 'Bash & Ansible automation' },
    desc: { fr: 'Automatisation de tâches système avec des scripts shell et Ansible pendant un stage.', en: 'Automating system tasks with shell scripts and Ansible during an internship.' },
    goal: { fr: 'Réduire les interventions répétitives en automatisant certaines tâches.', en: 'Reduce repetitive manual work by automating selected tasks.' },
    steps: { fr: 'Écriture de scripts shell et utilisation d’Ansible dans un contexte Linux.', en: 'Write shell scripts and use Ansible in a Linux environment.' },
    result: { fr: 'Pratique de l’automatisation lors du stage Orness ; détails de déploiement à documenter.', en: 'Automation practice during the Orness internship; deployment details to be documented.' },
    tags: ['Bash', 'Ansible', 'Linux']
  },
  {
    id: 'python',
    category: ['python'],
    icon: '📊',
    art: '#596bc1',
    title: { fr: 'Rapport système Windows → Excel', en: 'Windows system report → Excel' },
    desc: { fr: 'Script Python générant un rapport Excel à partir de données système d’un PC Windows.', en: 'Python script generating an Excel report from Windows PC system data.' },
    goal: { fr: 'Rassembler des informations système dans un document exploitable.', en: 'Collect system information into a usable document.' },
    steps: { fr: 'Développement d’un script Python produisant un rapport au format Excel.', en: 'Develop a Python script producing an Excel-format report.' },
    result: { fr: 'Script créé lors du stage Carrier Transicold (nov.–déc. 2025) ; dépôt public non indiqué.', en: 'Script created during Carrier Transicold internship (Nov–Dec 2025); no public repository specified.' },
    tags: ['Python', 'Windows', 'Excel']
  },
  {
    id: 'iot',
    category: ['network'],
    icon: '📡',
    art: '#437ea8',
    title: { fr: 'Configuration de dispositifs IoT', en: 'IoT device configuration' },
    desc: { fr: 'Paramétrage, vérification et mise en ligne de dispositifs avec Lynx et Flespi.', en: 'Configuring, checking and onboarding devices with Lynx and Flespi.' },
    goal: { fr: 'Participer à la mise en service et au suivi d’équipements télématiques.', en: 'Help commission and monitor telematics devices.' },
    steps: { fr: 'Paramétrage et vérification de dispositifs IoT ; utilisation des plateformes Lynx et Flespi.', en: 'Configure and verify IoT devices; work with Lynx and Flespi platforms.' },
    result: { fr: 'Missions réalisées chez Carrier Transicold (nov.–déc. 2025).', en: 'Tasks carried out at Carrier Transicold (Nov–Dec 2025).' },
    tags: ['IoT', 'Lynx', 'Flespi']
  }
];

const journey = [
  { date: 'SEPT 2026 — AOÛT 2028', title: 'Technicien assistance informatique · Alternance', org: 'Evariste · Maurepas', desc: { fr: 'Jira Service Desk, support utilisateurs, gestion du parc, Active Directory, Office 365, préparation et renouvellement des postes.', en: 'Jira Service Desk, user support, IT asset management, Active Directory, Office 365, workstation setup and refresh.' } },
  { date: '2026 — 2028', title: 'BTS SIO · option SISR', org: 'Ensitech · Montigny-le-Bretonneux', desc: { fr: 'Formation en alternance orientée systèmes, infrastructures et réseaux.', en: 'Work-study program focused on systems, infrastructure and networks.' } },
  { date: 'NOV — DÉC 2025', title: 'Assistant technicien télématique', org: 'Carrier Transicold · Rueil-Malmaison', desc: { fr: 'IoT, plateformes Lynx/Flespi, Salesforce et rapport Excel automatisé en Python.', en: 'IoT, Lynx/Flespi, Salesforce and Python-based Excel reporting.' } },
  { date: 'MAI — JUIN 2025', title: 'Assistant technicien Linux', org: 'Orness · Paris', desc: { fr: 'Ubuntu, DHCP/DNS, scripts shell, Ansible et switch Cisco.', en: 'Ubuntu, DHCP/DNS, shell scripting, Ansible and Cisco switching.' } },
  { date: 'JAN — FÉV 2025', title: 'Assistant technicien télématique', org: 'Carrier Transicold Europe · Rueil-Malmaison', desc: { fr: 'Analyse et suivi des données télématiques, gestion client Salesforce.', en: 'Telematics data analysis and monitoring, Salesforce customer management.' } },
  { date: 'FÉV — AVR 2024', title: 'Assistant développeur informatique', org: 'Holberton · La Défense', desc: { fr: 'Mini-jeux Python, ateliers Python/HTML/JavaScript et support technique.', en: 'Python mini-games, Python/HTML/JavaScript workshops and technical support.' } },
  { date: '2023 — 2026', title: 'Bac professionnel CIEL', org: 'Lycée Saint-Erembert · Saint-Germain-en-Laye', desc: { fr: 'Cybersécurité, informatique, réseaux et électronique.', en: 'Cybersecurity, IT, networks and electronics.' } }
];

let lang = localStorage.getItem('tb-lang') === 'en' ? 'en' : 'fr';
let currentFilter = 'all';

function tr(k) {
  return i18n[lang][k] || k;
}

function setLanguage(next) {
  lang = next;
  localStorage.setItem('tb-lang', lang);
  document.documentElement.lang = lang;
  $$('[data-t]').forEach(el => {
    el.textContent = tr(el.dataset.t);
  });
  $('#lang').textContent = lang === 'fr' ? 'EN' : 'FR';
  renderSkills();
  renderProjects();
  renderJourney();
  selectNode(activeNode);
}

function renderSkills() {
  $('#skillsGrid').innerHTML = skills.map(([icon, name, sub]) => `
    <article class="glass skill-card spotlight reveal visible">
      <span class="skill-icon">${icon}</span>
      <h3>${name}</h3>
      <p>${sub}</p>
    </article>
  `).join('');
}

function renderProjects() {
  let arr = projects.filter(p => currentFilter === 'all' || p.category.includes(currentFilter));
  $('#projectsGrid').innerHTML = arr.length ? arr.map(p => `
    <button class="glass project-card tilt spotlight reveal visible" data-project="${p.id}" aria-label="${p.title[lang]}">
      <div class="project-art" style="--art:${p.art}">
        <span class="art-icon">${p.icon}</span>
      </div>
      <div class="project-body">
        <h3>${p.title[lang]}</h3>
        <p>${p.desc[lang]}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <span class="project-more">${lang === 'fr' ? 'Voir l’étude de cas' : 'View case study'} ↗</span>
      </div>
    </button>
  `).join('') : `<p>${lang === 'fr' ? 'Aucun projet documenté dans cette catégorie pour le moment.' : 'No documented projects in this category yet.'}</p>`;
  
  $$('[data-project]').forEach(b => b.addEventListener('click', () => openProject(b.dataset.project)));
  activateTilt();
}

function renderJourney() {
  $('#timeline').innerHTML = journey.map(j => `
    <article class="glass timeline-item reveal">
      <span class="date">${j.date}</span>
      <h3>${j.title}</h3>
      <strong>${j.org}</strong>
      <p>${j.desc[lang]}</p>
    </article>
  `).join('');
  observeReveals();
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  $('#modalBody').innerHTML = `
    <span class="kicker">CASE STUDY / ${p.tags.join(' · ')}</span>
    <h2 id="modalTitle">${p.icon} ${p.title[lang]}</h2>
    <p>${p.desc[lang]}</p>
    <div class="modal-detail">
      <h4>${lang === 'fr' ? 'Objectif' : 'Goal'}</h4>
      <p>${p.goal[lang]}</p>
    </div>
    <div class="modal-detail">
      <h4>${lang === 'fr' ? 'Étapes & outils' : 'Steps & tools'}</h4>
      <p>${p.steps[lang]}</p>
    </div>
    <div class="modal-detail">
      <h4>${lang === 'fr' ? 'Résultat documenté' : 'Documented outcome'}</h4>
      <p>${p.result[lang]}</p>
    </div>
    <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  $('#projectDialog').showModal();
}

$('#modalClose').onclick = () => $('#projectDialog').close();

$$('.filter').forEach(b => b.addEventListener('click', () => {
  currentFilter = b.dataset.filter;
  $$('.filter').forEach(x => x.classList.toggle('active', x === b));
  renderProjects();
}));

let activeNode = 'router';
const nodes = {
  internet: ['Internet', 'Point d’accès aux réseaux externes.'],
  router: ['Routeur', 'Assure la circulation du trafic entre différents réseaux.'],
  linux: ['Serveur Linux', 'Peut héberger des services comme DNS, DHCP ou des applications.'],
  switch: ['Switch', 'Relie plusieurs appareils d’un même réseau local.'],
  client: ['Poste client', 'Machine utilisatrice qui accède aux services réseau.']
};
const nodesEn = {
  internet: ['Internet', 'Connectivity to external networks.'],
  router: ['Router', 'Routes traffic between separate networks.'],
  linux: ['Linux server', 'Can host services such as DNS, DHCP or applications.'],
  switch: ['Switch', 'Connects multiple devices on a local network.'],
  client: ['Client computer', 'Endpoint that accesses network services.']
};

function selectNode(id) {
  activeNode = id;
  const n = (lang === 'fr' ? nodes : nodesEn)[id];
  $('#nodeTitle').textContent = n[0];
  $('#nodeDesc').textContent = n[1];
  $$('.network-node').forEach(b => b.classList.toggle('selected', b.dataset.node === id));
}

$$('.network-node').forEach(b => b.onclick = () => selectNode(b.dataset.node));

const tourFr = [
  ['Bienvenue chez Théo', 'Technicien assistance informatique en alternance chez Evariste et étudiant en BTS SIO SISR à Ensitech.'],
  ['Compétences techniques', 'Support IT, Jira Service Desk, Active Directory, Microsoft 365, Linux, réseaux et Python.'],
  ['Expériences concrètes', 'Alternance chez Evariste et stages chez Orness, Carrier Transicold et Holberton.'],
  ['Échangeons !', 'Vous souhaitez discuter d’une opportunité ? Mon CV et mes coordonnées sont disponibles sur ce site.']
];
const tourEn = [
  ['Meet Théo', 'IT support apprentice at Evariste and BTS SIO SISR student at Ensitech.'],
  ['Technical skills', 'IT support, Jira Service Desk, Active Directory, Microsoft 365, Linux, networking and Python.'],
  ['Real experience', 'Apprenticeship at Evariste and internships at Orness, Carrier Transicold and Holberton.'],
  ["Let's connect", 'My CV and contact details are available on this website.']
];
let tourStep = 0;

function renderTour() {
  const a = (lang === 'fr' ? tourFr : tourEn)[tourStep];
  $('#tourCount').textContent = `0${tourStep + 1} / 04`;
  $('#tourTitle').textContent = a[0];
  $('#tourBody').textContent = a[1];
  $('#tourPrev').disabled = tourStep === 0;
  $('#tourNext').textContent = tourStep === 3 ? (lang === 'fr' ? 'Terminer ✓' : 'Finish ✓') : (lang === 'fr' ? 'Suivant →' : 'Next →');
}

$('#tourStart').onclick = () => {
  tourStep = 0;
  renderTour();
  $('#tourDialog').showModal();
};

$('#tourPrev').onclick = () => {
  tourStep = Math.max(0, tourStep - 1);
  renderTour();
};

$('#tourNext').onclick = () => {
  if (tourStep === 3) {
    $('#tourDialog').close();
    $('#contact').scrollIntoView({ behavior: 'smooth' });
  } else {
    tourStep++;
    renderTour();
  }
};

$('#tourClose').onclick = () => $('#tourDialog').close();

const termState = { history: [], game: false, number: 0, attempts: 0 };
const commands = ['help', 'whoami', 'skills', 'projects', 'experience', 'contact', 'date', 'clear', 'ls', 'cat readme.txt', 'sudo hire-me', 'game'];

function response(cmd) {
  const c = cmd.toLowerCase().trim();
  if (termState.game) {
    if (c === 'exit') {
      termState.game = false;
      return 'Game exited.';
    }
    const guess = Number(c);
    if (!Number.isInteger(guess) || guess < 1 || guess > 10) return 'Enter a number from 1 to 10 (or exit).';
    termState.attempts++;
    if (guess === termState.number) {
      termState.game = false;
      return `🎉 Correct in ${termState.attempts} attempt(s)! Type game to play again.`;
    }
    return guess < termState.number ? 'Higher ↑' : 'Lower ↓';
  }
  switch (c) {
    case 'help': return 'Commands: ' + commands.join(', ');
    case 'whoami': return 'Théo Béranger — Technicien support IT en alternance · BTS SIO SISR';
    case 'skills': return skills.map(s => s[1]).join(' · ');
    case 'projects': return projects.map((p, i) => `${i + 1}. ${p.title[lang]}`).join('\n');
    case 'experience': return 'Evariste · Orness · Carrier Transicold · Holberton';
    case 'contact': return 'theo.beranger78@gmail.com';
    case 'date': return new Date().toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB');
    case 'ls': return 'readme.txt  projects/  skills/  easter-egg.sh';
    case 'cat readme.txt': return 'Welcome to Théo OS. This is a safe browser simulation.';
    case 'sudo hire-me': return 'Permission granted. Contact Théo at theo.beranger78@gmail.com 🚀';
    case 'game':
      termState.game = true;
      termState.number = 1 + Math.floor(Math.random() * 10);
      termState.attempts = 0;
      return '🎮 Guess a number between 1 and 10. Type exit to quit.';
    case 'clear': return '__CLEAR__';
    case '': return '';
    default: return `Command not found: ${cmd}. Type help.`;
  }
}

function terminalHTML() {
  return `<div class="os-terminal-intro"><span class="os-terminal-symbol">⌘</span><div><strong>THEO OS / TERMINAL</strong><small>Session locale · Bash simulé · v4.0</small></div></div><div class="os-quick-commands"><span>${lang === 'fr' ? 'Essayer :' : 'Try:'}</span>${['help','whoami','skills','projects','game','sudo hire-me'].map(x=>`<button type="button" data-command="${x}">${x}</button>`).join('')}</div><div class="terminal-output" id="termOut" role="log" aria-live="polite">TheoOS v4.0 — ${lang === 'fr' ? 'Bienvenue ! Lance help pour explorer.' : 'Welcome! Run help to explore.'}\n\n</div><form class="terminal-input-line" id="termForm" autocomplete="off"><label for="termInput">theo@portfolio:~$</label><input id="termInput" aria-label="Terminal command" spellcheck="false" placeholder="help"/><button type="submit" aria-label="Exécuter la commande">↵</button></form>`;
}
let terminalHistoryIndex = 0;
function runTerminal(cmd) {
  const out = $('#termOut'); if (!out) return;
  const res = response(cmd);
  if (cmd) { termState.history.push(cmd); terminalHistoryIndex = termState.history.length; }
  if (res === '__CLEAR__') out.textContent = '';
  else out.textContent += `theo@portfolio:~$ ${cmd}\n${res}\n\n`;
  out.scrollTop = out.scrollHeight;
  $('#termInput').value = ''; $('#termInput').focus();
}
function openWindow(type) {
  const titles = { terminal: 'terminal — bash', files: 'projects / explorer', about: 'system / about' };
  if (!titles[type]) return;
  $('#windowTitle').textContent = titles[type];
  $('#desktopWindow').hidden = false;
  $$('.os-app').forEach(b => b.classList.toggle('active', b.dataset.window === type));
  if (type === 'terminal') {
    $('#windowContent').innerHTML = terminalHTML();
    $('#termForm').onsubmit = e => { e.preventDefault(); runTerminal($('#termInput').value.trim()); };
    $$('#windowContent [data-command]').forEach(b => b.onclick = () => runTerminal(b.dataset.command));
    $('#termInput').onkeydown = e => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); terminalHistoryIndex = Math.max(0, Math.min(termState.history.length, terminalHistoryIndex + (e.key === 'ArrowUp' ? -1 : 1)));
        e.target.value = termState.history[terminalHistoryIndex] || '';
      } else if (e.key === 'Tab') {
        e.preventDefault(); const matches = commands.filter(x => x.startsWith(e.target.value.toLowerCase()));
        if (matches.length === 1) e.target.value = matches[0];
      }
    };
    $('#termInput').focus();
  } else if (type === 'files') {
    $('#windowContent').innerHTML = `<div class="os-explorer"><div class="os-path">⌂ / home / theo / <strong>projects</strong></div><div class="os-file-head"><span>${lang === 'fr' ? 'Nom du projet' : 'Project name'}</span><span>TYPE</span></div>${projects.map(p=>`<button class="os-file" data-os-project="${p.id}"><span class="os-file-icon">${p.icon}</span><span>${p.title[lang]}<small>${p.tags.join(' · ')}</small></span><span class="os-file-arrow">↗</span></button>`).join('')}</div>`;
    $$('[data-os-project]').forEach(b => b.onclick = () => openProject(b.dataset.osProject));
  } else {
    $('#windowContent').innerHTML = `<div class="os-profile"><div class="os-profile-avatar">TB<span>.</span></div><div><span class="os-profile-label">SYSTEM PROFILE</span><h3>Théo Béranger</h3><p>${lang === 'fr' ? 'Technicien assistance informatique en alternance chez Evariste · BTS SIO SISR à Ensitech.' : 'IT support technician apprentice at Evariste · BTS SIO SISR at Ensitech.'}</p><div class="os-profile-tags"><span>Linux</span><span>Support IT</span><span>Réseaux</span><span>Python</span></div><a class="os-profile-link" href="mailto:theo.beranger78@gmail.com">theo.beranger78@gmail.com ↗</a></div></div>`;
  }
}
$$('[data-window]').forEach(b => b.onclick = () => openWindow(b.dataset.window));
$('#windowClose').onclick = () => { $('#desktopWindow').hidden = true; $$('.os-app').forEach(b => b.classList.remove('active')); };
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#desktopWindow').hidden && !$('#projectDialog').open) $('#windowClose').click(); });

$('#contactForm').onsubmit = e => {
  e.preventDefault();
  const f = e.currentTarget;
  if (!f.reportValidity()) return;
  const name = $('#name').value.trim(),
        email = $('#email').value.trim(),
        message = $('#message').value.trim();
  if (name.length < 2 || message.length < 10) return;
  const subject = encodeURIComponent(`Contact portfolio — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  location.href = `mailto:theo.beranger78@gmail.com?subject=${subject}&body=${body}`;
  toast(lang === 'fr' ? 'Votre application e-mail va s’ouvrir.' : 'Your email app will open.');
};

let toastTimer;
function toast(msg) {
  $('#toast').textContent = msg;
  $('#toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('#toast').classList.remove('show'), 2600);
}

$$('[data-copy]').forEach(b => b.onclick = async () => {
  try {
    await navigator.clipboard.writeText(b.dataset.copy);
    toast(lang === 'fr' ? 'Copié !' : 'Copied!');
  } catch {
    toast(lang === 'fr' ? 'Copie indisponible dans ce navigateur.' : 'Copy unavailable in this browser.');
  }
});

$('#theme').onclick = () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('tb-theme', next);
  $('#theme').textContent = next === 'dark' ? '☀' : '☾';
};

const savedTheme = localStorage.getItem('tb-theme');
document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';
$('#theme').textContent = savedTheme === 'dark' ? '☀' : '☾';

$('#lang').onclick = () => setLanguage(lang === 'fr' ? 'en' : 'fr');

$('#menu').onclick = () => {
  const open = $('#nav').classList.toggle('open');
  $('#menu').setAttribute('aria-expanded', String(open));
};

$$('nav a').forEach(a => a.onclick = () => {
  $('#nav').classList.remove('open');
  $('#menu').setAttribute('aria-expanded', 'false');
});

let revealObserver;
function observeReveals() {
  if (!revealObserver) return;
  $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

if ('IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }), { threshold: .09 });
} else {
  $$('.reveal').forEach(x => x.classList.add('visible'));
}

function activateTilt() {
  if (matchMedia('(pointer:coarse)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  $$('.tilt').forEach(el => {
    if (el.dataset.tiltReady) return;
    el.dataset.tiltReady = '1';
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width - .5,
            y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(950px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-3px)`;
    });
    el.addEventListener('pointerleave', () => el.style.transform = '');
  });
}

function spotlights() {
  if (matchMedia('(pointer:coarse)').matches) return;
  document.addEventListener('pointermove', e => {
    const target = e.target.closest('.spotlight');
    if (!target) return;
    const r = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - r.left}px`);
    target.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

const phrases = {
  fr: ['le support informatique', 'Linux & Réseaux', 'Active Directory & Microsoft 365', 'Python & l’automatisation'],
  en: ['IT support', 'Linux & Networking', 'Active Directory & Microsoft 365', 'Python & automation']
};
let phraseIndex = 0, charIndex = 0, erasing = false;

function typeLoop() {
  const phrase = phrases[lang][phraseIndex % phrases[lang].length];
  $('#typewriter').textContent = phrase.slice(0, charIndex);
  if (!erasing) {
    charIndex++;
    if (charIndex > phrase.length) {
      erasing = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      charIndex = 0;
      erasing = false;
      phraseIndex++;
    }
  }
  setTimeout(typeLoop, erasing ? 45 : 80);
}

function initParticles() {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const c = $('#particles'), ctx = c.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, pts = [], mouse = { x: -9999, y: -9999 }, raf = 0, visible = true;

  function resize() {
    const d = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    c.width = Math.round(w * d);
    c.height = Math.round(h * d);
    ctx.setTransform(d, 0, 0, d, 0, 0);
    pts = Array.from({ length: Math.min(85, Math.max(26, Math.floor(w * h / 19000))) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .42,
      vy: (Math.random() - .5) * .42,
      r: Math.random() * 1.4 + .6
    }));
  }

  function draw() {
    if (!visible) return;
    ctx.clearRect(0, 0, w, h);
    const dark = document.documentElement.dataset.theme === 'dark',
          rgb = dark ? '144,169,255' : '67,96,148';
          
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.hypot(dx, dy);
      if (dist < 110 && dist > 0) {
        p.x += dx / dist * .9;
        p.y += dy / dist * .9;
      }
      ctx.fillStyle = `rgba(${rgb},.53)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 125) {
          ctx.strokeStyle = `rgba(${rgb},${(1 - d / 125) * .21})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(draw);
  }

  addEventListener('resize', resize, { passive: true });
  addEventListener('pointermove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
  
  addEventListener('pointerdown', e => {
    for (const p of pts) {
      const d = Math.hypot(p.x - e.clientX, p.y - e.clientY);
      if (d < 170) {
        p.vx += (p.x - e.clientX) / Math.max(20, d) * 1.5;
        p.vy += (p.y - e.clientY) / Math.max(20, d) * 1.5;
        p.vx = Math.max(-2, Math.min(2, p.vx));
        p.vy = Math.max(-2, Math.min(2, p.vy));
      }
    }
  });

  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
    if (visible) draw();
    else cancelAnimationFrame(raf);
  });
  
  resize();
  draw();
}

function initPointer() {
  if (!matchMedia('(pointer:fine)').matches) return;
  const dot = $('#cursor'), ring = $('#cursor-ring');
  let x = -100, y = -100, rx = -100, ry = -100;
  
  addEventListener('pointermove', e => {
    x = e.clientX;
    y = e.clientY;
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.classList.toggle('hovering', !!e.target.closest('a,button,input,textarea'));
  }, { passive: true });
  
  function frame() {
    rx += (x - rx) * .18;
    ry += (y - ry) * .18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(frame);
  }
  frame();
}

function initAvatar() {
  if (matchMedia('(pointer:coarse)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const av = $('#avatar');
  av.addEventListener('pointermove', e => {
    const r = av.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - .5,
          y = (e.clientY - r.top) / r.height - .5;
    av.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  });
  av.addEventListener('pointerleave', () => av.style.transform = '');
}

function scrollUI() {
  const top = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  $('#progress').style.width = `${max > 0 ? top / max * 100 : 0}%`;
  $('#backTop').classList.toggle('visible', top > 550);
  let active = 'home';
  for (const s of $$('main section[id]')) {
    if (s.getBoundingClientRect().top < 170) active = s.id;
  }
  $$('nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
}

addEventListener('scroll', scrollUI, { passive: true });
$('#backTop').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
$('#year').textContent = new Date().getFullYear();
$('#desktopClock').textContent = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

setLanguage(lang);
observeReveals();
activateTilt();
spotlights();
initParticles();
initPointer();
initAvatar();
scrollUI();

if (!matchMedia('(prefers-reduced-motion:reduce)').matches) typeLoop();
else $('#typewriter').textContent = phrases[lang][0];

addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 550));
setTimeout(() => $('#loader').classList.add('done'), 2000);
