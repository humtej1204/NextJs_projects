import { PopupProvider } from './contexts/PopupContext';

export function AppContextProvider({children}: any) {
    return (
        <PopupProvider>
            {children}
        </PopupProvider>
    );
}