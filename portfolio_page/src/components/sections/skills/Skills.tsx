"use client"
import Image from 'next/image';
import './Skills.scss';
import React, { useState } from 'react';
import {TEC_LANGS} from '@/utils/tec-langs-info';
import {SOFT_SKILLS} from '@/utils/soft-skills-info';

export default function SkillsSection() {
    return (
        <div className='skills_section container_sect' id="skills_section">
            <div className='skills_container section_container'>
                <section className='tecSkills_sect'>
                    <h1>Habilidades Tecnicas:</h1>

                    <div className='tecnologies_section'>
                        {TEC_LANGS.map((elem) => (
                            <div className='lbl_tag'
                            key={`pLang_${elem.key}`}>
                                <div className='img_container'>
                                    <Image
                                    src={`/assets/programming_lang/${elem.key}.svg`}
                                    alt={`pLang_${elem.label}`}
                                    width={0}
                                    height={0}
                                    />
                                </div>
                                <span>{elem.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='softSkills_sect'>
                    <h1>Habilidades blandas:</h1>

                    <SoftSkillsSection />
                </section>
            </div>
        </div>
    );
}

function SoftSkillsSection() {
    const [isOpen, setIsOpen] = useState(new Array(SOFT_SKILLS.length).fill(false));
  
    const toggleOpenState = (index: number) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };

    return (
        <ul className='softSkills_container'>
            {SOFT_SKILLS.map((elem, index) => (
                <li key={`softSkill_${elem.key}`}
                onClick={() => toggleOpenState(index)}>
                    <h2>
                        {elem.title}
                        <i className={`fi ${isOpen[index] ? 'fi-br-angle-small-up' : 'fi-br-angle-small-down'}`}></i>
                    </h2>
                    {isOpen[index] && <p>{elem.content}</p>}
                </li>
            ))}
        </ul>
    );
}