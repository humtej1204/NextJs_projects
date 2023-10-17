import '@/app/page.scss';
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Hero from "@/components/sections/hero/Hero";
import SkillsSection from "@/components/sections/skills/Skills";
import ProyectsSection from "@/components/sections/proyects/Proyects";
import { AppContextProvider } from '@/context/ContextProvider';


export default function Home() {
  return (
    <AppContextProvider>
      <main>
        <Header />
        <Sidebar />
        
        <div className="main_container">
          <Hero />
          <SkillsSection />
          <ProyectsSection />
        </div>
      </main>
    </AppContextProvider>
  );
}
