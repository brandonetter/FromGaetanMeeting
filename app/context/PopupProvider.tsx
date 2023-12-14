'use client';
import React, { createContext, useContext, useState,useEffect } from 'react';

const PopupContext = createContext({
    popupState: <></>,
    setPopupState: (value:any) => {},
    component: undefined
});

export function PopupProvider({children}: {children: React.ReactNode}) {
  const [popupState, setPopupState] = useState(<></>)
  const [component, setComponent] = useState()
  useEffect(()=>{
    const name = popupState?.type?.name

    setComponent(name);

  },[popupState])
return (
    <PopupContext.Provider value={{popupState, setPopupState,component}}>
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

