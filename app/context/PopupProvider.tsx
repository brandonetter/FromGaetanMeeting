'use client';
import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext({
    popupState: <></>,
    setPopupState: (value:any) => {}
});

export function PopupProvider({children}: {children: React.ReactNode}) {
  const [popupState, setPopupState] = useState(<></>)

return (
    <PopupContext.Provider value={{popupState, setPopupState}}>
        {children}
    </PopupContext.Provider>
)

}

export function usePopupContext() {
  const context = useContext(PopupContext)

  if(context === undefined){
    throw new Error('usePopupContext must be used within PopupProvider')
  }

  return context
}

