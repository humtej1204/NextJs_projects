"use client"
import Image from 'next/image';
import './Proyects.scss';
import { useEffect, useRef, useState } from 'react';
import { PROJECTS_LIST } from '@/utils/projects-info';

export default function ProyectsSection() {
    return (
        <div className='projects_section container_sect' id="projects_section">
            <section className='projects_container section_container'>
                <h1>Proyectos</h1>

                <div className='projects_content'>
                    {PROJECTS_LIST.map((elem, index) => (
                        <ProyectCard
                        key={index}
                        data={elem} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function ProyectCard({data}: any) {
    return (
        <div className='project_card'>
            <div className='pCard_header'>
                <h2>{data.name}</h2>

                <ProyectMenu />
            </div>
            <img src={`/assets/projects/${data.key}.webp`} alt="test" />
            <div className='pCard_cont'>
                <p>{data.description}</p>

                <div className='tech_cont'>
                    {data.tecnologies.map((elem: string, index: number) => (
                        <div className='tech_item'
                        key={index}>
                            <Image
                            src={`/assets/programming_lang/${elem}.svg`}
                            alt={elem}
                            width={25}
                            height={25} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProyectMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleShowMenu = () => {
        setShowMenu(true);
    }

    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='pMenu_container'>
            <button className='pMenu_btn'
            onClick={handleShowMenu}>
                <i className="fi fi-bs-menu-dots-vertical"></i>
            </button>
            {showMenu && <div ref={menuRef} className='pMenu_cont'>
                <a href="">
                    Ver Código
                </a>
                <a href="">
                    Ir a la Página
                </a>
            </div>}
        </div>
    );
}