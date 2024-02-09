import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItemDivider, IonLabel, IonItem, IonCardContent, IonCardHeader, IonButtons, IonBackButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonItemGroup, IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonList, IonAccordionGroup, IonAccordion, IonItemGroup, CommonModule, IonItemDivider, IonLabel, IonItem, IonCardContent, IonCardHeader, IonButtons, IonBackButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {
  public faculties = [
    {
      image: 'https://media.licdn.com/dms/image/D5603AQHlArqe_2rzNQ/profile-displayphoto-shrink_100_100/0/1642960802562?e=1712188800&v=beta&t=bdij6quZjuuoFAt-myO5CjShBR6RlZuZjte2buSDAyg',
      name: 'Prof. Harshil Kanakia',
      skills: [
        { name: 'DevOps' },
        { name: 'C++' },
        { name: 'SQL'},
        { name: 'Java'},
        { name: 'Linux'},
        { name: 'MySQL'},
        { name: 'PHP'},
        { name: 'JSP'},
        { name: 'Oracle'},
        { name: 'Unix'}
      ],
      experience: '14',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.',
    },
    {
      image: 'https://media.licdn.com/dms/image/C5603AQHurObRBeKfnQ/profile-displayphoto-shrink_800_800/0/1622806174140?e=1712188800&v=beta&t=RjSZwwl0ytF06le4F8nKey33MqyGxEhLptuosuTgEPk',
      name: 'Dr. Pooja Raundale',
      skills: [
        { name: 'Algorithms' },
        { name: 'Artificial Intelligence' },
        { name: 'C++'},
        { name: 'Machine Learning'},
        { name: 'Data Science'},
        { name: 'Deep Learning'},
        { name: 'Design Thinking'},
      ],
      experience: '24',
      description: 'Understanding the importance of human-centric design, I embrace Design Thinking methodologies to create solutions that not only meet technical requirements but also resonate with end-users. I believe in marrying functionality with user experience.    In each facet of my skill set, I embody a holistic approach to problem-solving, blending technical prowess with creativity and a user-centric mindset. With a track record of successful projects and a passion for staying at the forefront of technological advancements, I am poised to contribute meaningfully to any innovative venture.   Lets embark on a journey to push the boundaries of whats possible in technology and bring visionary ideas to life! 🌐💡👨‍💻',
    },
    {
      image: 'https://media.licdn.com/dms/image/C5603AQGQhuWZSQ4OQg/profile-displayphoto-shrink_400_400/0/1591097772607?e=1712188800&v=beta&t=fQN-7kip_fKwyQZHNKSjmcaNk2-vqsEz9HeP1SI4QrM',
      name: 'Dr. Aarti Karande',
      skills: [
        { name: 'DevOps' },
        { name: 'C++' },
        { name: 'SQL'},
        { name: 'Java'},
        { name: 'Linux'},
        { name: 'MySQL'},
        { name: 'PHP'},
        { name: 'JSP'},
        { name: 'Oracle'},
        { name: 'Unix'}
      ],
      experience: '22',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    {
      image: 'https://media.licdn.com/dms/image/C4D03AQEkOlTWhMoLCg/profile-displayphoto-shrink_800_800/0/1651421409565?e=1712188800&v=beta&t=MfIVi5LVDdCuzmsVFXW--MOWfBdTS8miv43ZCwTUqPo',
      name: 'Prof. Sakina Shaikh',
      skills: [
        { name: 'Cyber and Network Security' },
        { name: 'Data mining' },
        { name: 'Animation and design'},
        { name: 'Programming'},
      ],
      experience: '22',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    {
      image: 'https://media.licdn.com/dms/image/C4E03AQEbrZCjMmRPNw/profile-displayphoto-shrink_800_800/0/1604383315102?e=1712188800&v=beta&t=c-pzb4belfvHv3LZ8p0axzkoJZ3vV392yBl9oUS68W0',
      name: 'Prof. Pallavi Thakur',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Data Science' },
        { name: 'Computer Networks'},
        { name: 'Network security'},
        { name: 'Web Technology'}
      ],
      experience: '8',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    {
      image: 'https://media.licdn.com/dms/image/C4D03AQHxnt4tzp5Waw/profile-displayphoto-shrink_800_800/0/1633000968107?e=1712188800&v=beta&t=lhSgImMqgTW0kg5v9irvgu2-ns0f5raGTm0_u968FX0',
      name: 'Prof. Nikhita Mangaonkar',
      skills: [
        { name: 'Networking' },
        { name: 'Distributed and Cloud Computing' },
        { name: 'Software Engineering'},
        { name: 'Software Testing'},
        { name: 'Quality Assurance'},
        { name: 'Data Warehousing'},
        { name: 'Data Mining'}
      ],
      experience: '14',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    {
      image: 'https://media.licdn.com/dms/image/C4E03AQGF71FOIUQuHg/profile-displayphoto-shrink_800_800/0/1618855047500?e=2147483647&v=beta&t=RxCegvehpBxIME3vBpwpNcapLOE2NHubwWKvF2H7du8',
      name: 'Prof. Suman Majee',
      skills: [
        { name: 'Communication' },
        { name: 'English Speaking' },
        { name: 'Speaker'}
      ],
      experience: '1',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    {
      image: 'https://media.licdn.com/dms/image/C5603AQETSUOE2_uUSQ/profile-displayphoto-shrink_800_800/0/1643795504417?e=1712188800&v=beta&t=AiIaRK0iHWFUPIV_acR8umCXsN2L1m4nx02dOlaRJ2c',
      name: 'Prof. R.M. Raghunath',
      skills: [
        { name: 'Applied Maths' },
        { name: 'Acturial Science' },
      ],
      experience: '1',
      description: 'I have recently completed Executive PG in Data Science from IIIT Bangalore with Data Generalist Specialization. The technologies which I have worked on are C, C++, Python, SQL, PL/SQL, Tableau, HTML, CSS, JavaScript, Automation Anywhere and UI Path.'
    },
    
    // Add more departments and faculty members as needed
  ];

  constructor() { }
}
