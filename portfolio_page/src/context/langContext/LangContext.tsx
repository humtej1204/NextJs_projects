'use client'
import { createContext, useCallback, useState } from "react"

const LangContext = createContext<any>(null);

function LangProvider({children}: any) {
    const [lang, setLang] = useState<'ES'|'EN'>('ES');

    const setPageLang = useCallback((lang: 'ES'|'EN') => {
        localStorage.setItem('lang', lang);
        setLang(lang);
        console.log('current lang:', lang);
    }, [])

    return (
        <LangContext.Provider value={{setPageLang}}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider };