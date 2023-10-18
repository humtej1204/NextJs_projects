import './Sidebar.scss';

export default function Sidebar() {
    return (
        <aside className='flex flex-col justify-between items-center'>
            <div className='logo_sect justify-center'>
                <img src={`/assets/LOGO.svg`} />
                <span>Haru Dev</span>
            </div>

            <ul>
                <a href="#hero_section">
                    <li>About me</li>
                </a>
                <a href="#skills_section">
                    <li>Skills</li>
                </a>
                <a href="#projects_section">
                    <li>Projects</li>
                </a>
            </ul>

            <div className='social_sect flex-col justify-between gap-6'>
                <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target='_blank'>
                    <i className="fi fi-brands-linkedin"></i>
                </a>
                <a href="https://github.com/humtej1204" target='_blank'>
                    <i className="fi fi-brands-github"></i>
                    </a>
                <a href="https://medium.com/@humtej1204" target='_blank'>
                    <i className="fi fi-brands-medium"></i>
                </a>
            </div>
        </aside>
    );
  }
  