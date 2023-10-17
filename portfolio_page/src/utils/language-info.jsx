import {SOFT_SKILLS_EN, SOFT_SKILLS_ES} from './soft-skills-info';

export default class PageInfo {
    static en = {
        aside: {
            nav: ['About me', 'Skills', 'Projects']
        },
        hero_sect: {
            tittle: 'Hi! I\'m Haru Tejada,',
            button: 'Contact me'
        },
        contact_sect: {},
        skills_sect: {
            sections: [
                {
                    "title": "Technical Skills:"
                },
                {
                    "title": "Soft Skills:",
                    "softSkills": SOFT_SKILLS_EN
                }
            ]
        },
        projects_sect: {},
        footer: {}
    };
    static es = {
        aside: {
            nav: ['Sobre mi', 'Conocimientos', 'Proyectos']
        },
        hero_sect: {
            tittle: 'Hola! Soy Haru Tejada,',
            button: 'Contactame'
        },
        contact_sect: {},
        skills_sect: {
            sections: [
                {
                    tittle: 'Habilidades Tecnicas:'
                },
                {
                    tittle: 'Habilidades blandas:',
                    softSkills: SOFT_SKILLS_ES
                }
            ]
        },
        projects_sect: {},
        footer: {}
    };
}