import './PersonalInfo.scss';

export default function PersonalInfo() {
    const personal_data = [
        {key: 'email', label: 'Correo', data: 'humtej1204@gmail.com', icon: 'envelope'},
        {key: 'cel', label: 'Celular', data: '+51 940683605', icon: 'mobile-notch'},
        {key: 'ubication', label: 'Ubicación', data: 'Lima - Peru', icon: 'earth-americas'},
    ]

    return (
        <div className='personal_info_card'>
            <div className='img_container'>
                <img src="https://as1.ftcdn.net/v2/jpg/05/74/26/68/1000_F_574266873_vhv00QksxhRPgy0cEeWTE15ImuhTEu7e.jpg" alt="" />
            </div>
            <div className='info_container'>
                <section className='description_sect'>
                    <div className='header_sect'>
                        <h1>Haru Tejada</h1>
                        <h2>Humberto Tejada Espinoza</h2>
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div className='social_sect'>
                        <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target='_blank'>
                            <i className="fi fi-brands-linkedin"></i>
                        </a>
                        <a href="https://github.com/humtej1204" target='_blank'>
                            <i className="fi fi-brands-github"></i>
                            </a>
                        <a href="https://api.whatsapp.com/send?phone=940683605" target='_blank'>
                            <i className="fi fi-brands-whatsapp"></i>
                        </a>
                    </div>
                </section>
                <section className='contact_sect'>
                    <div className='contact_data'>
                        {personal_data.map((elem) => (
                            <div key={elem.key} className='contact_item'>
                                <h3>{elem.label}:</h3>
                                <i className={`fi fi-rr-${elem.icon}`}></i>
                                <span>{elem.data}</span>
                            </div>
                        ))}
                    </div>

                    <div className='langs_data'>
                        <h3>Idiomas:</h3>
                        <i className="fi fi-rr-language"></i>

                        <div className='langs_items'>
                            <div className='langs_item'>
                                <img src={`/assets/EN.png`} alt="" />
                                <span>Ingles</span>
                            </div>
                            <div className='langs_item'>
                                <img src={`/assets/ES.png`} alt="" />
                                <span>Español</span>
                            </div>
                        </div>
                    </div>

                    <div className='action_btns'>
                            <button>CV</button>
                            <button>Send Email</button>
                    </div>
                </section>
            </div>
        </div>
    );
}