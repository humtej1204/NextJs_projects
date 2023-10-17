'use client'
import Image from 'next/image';
import Toggle from '../toggle/Toggle';
import './Header.scss';
import EN_IMG from '@/assets/EN.png'
import ES_IMG from '@/assets/ES.png'

export default function Header() {
  const handleLangData = (data: string) => {
    console.log(data);
  };

  const handleThermeData = (data: string) => {
    console.log(data);
  };

  return (
    <header>
      <div className='toggle_item'>
        <Image src={EN_IMG} alt="EN_Image" />
        <Toggle values={['EN', 'ES']} getValue={handleLangData} />
        <Image src={ES_IMG} alt="ES_Image" />
      </div>
      <hr />
      <div className='toggle_item'>
        <i className="fi fi-br-sun"></i>
        <Toggle values={['light', 'dark']} getValue={handleThermeData} />
        <i className="fi fi-br-moon"></i>
      </div>
    </header>
  );
}
  