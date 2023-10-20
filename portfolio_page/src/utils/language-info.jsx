import {SOFT_SKILLS_EN, SOFT_SKILLS_ES} from './soft-skills-info';
import {PROJECTS_LIST} from './projects-info';

export const PageInfo = {
    EN: {
        aside: {
            nav: [
                {key: 'hero_section', label: 'About me'},
                {key: 'skills_section', label: 'Skills'},
                {key: 'projects_section', label: 'Projects'},
            ]
        },
        hero_sect: {
            tittle: 'Hi! I\'m Haru Tejada,',
            subTittle: 'Web Developer',
            jobTittle: 'Full Stack Developer',
            button: 'Contact me'
        },
        contact_sect: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            personalData: [
                {
                    key: 'email', label: 'Email',
                    data: 'humtej1204@gmail.com', icon: 'envelope'
                }, {
                    key: 'cel', label: 'Cellphone',
                    data: '+51 940683605', icon: 'mobile-notch'
                }, {key: 'ubication', label: 'Ubication',
                    data: 'Lima - Peru', icon: 'earth-americas'
                }
            ],
            langData: {
                tittle: 'Languages',
                langs: [
                    {key: 'EN', label: 'English'},
                    {key: 'ES', label: 'Spanish'}
                ]
            },
            buttons: ['CV', 'Send Email']
        },
        skills_sect: {
            sections: {
                techSkills: {
                    tittle: "Technical Skills"
                },
                softSkills: {
                    tittle: "Soft Skills",
                    softSkills: SOFT_SKILLS_EN
                }
            }
        },
        projects_sect: {
            tittle: 'Projects',
            projects: PROJECTS_LIST
        },
        footer: {}
    },
    ES: {
        aside: {
            nav: [
                {key: 'hero_section', label: 'Sobre mi'},
                {key: 'skills_section', label: 'Habilidades'},
                {key: 'projects_section', label: 'Proyectos'},
            ]
        },
        hero_sect: {
            tittle: 'Hola! Soy Haru Tejada,',
            subTittle: 'Desarrollador Web',
            jobTittle: 'Desarrollador Full Stack',
            button: 'Contactame'
        },
        contact_sect: {
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            personalData: [
                {
                    key: 'email', label: 'Correo',
                    data: 'humtej1204@gmail.com', icon: 'envelope'
                }, {
                    key: 'cel', label: 'Celular',
                    data: '+51 940683605', icon: 'mobile-notch'
                }, {key: 'ubication', label: 'Ubicación',
                    data: 'Lima - Peru', icon: 'earth-americas'
                }
            ],
            langData: {
                tittle: 'Idiomas',
                langs: [
                    {key: 'EN', label: 'Ingles'},
                    {key: 'ES', label: 'Español'}
                ]
            },
            buttons: ['CV', 'Enviar Correo']
        },
        skills_sect: {
            sections: {
                techSkills: {
                    tittle: 'Habilidades Tecnicas'
                },
                softSkills: {
                    tittle: 'Habilidades blandas',
                    softSkills: SOFT_SKILLS_ES
                }
            }
        },
        projects_sect: {
            tittle: 'Proyectos',
            projects: PROJECTS_LIST
        },
        footer: {}
    }
}