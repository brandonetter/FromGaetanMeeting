'use client';
import React, { createContext, useContext, useState,useEffect } from 'react';
import {get} from '@/app/actions'

const PopupContext = createContext({
    popupState: <></>,
    setPopupState: (value:any) => {},
    component: <></>
});

export function PopupProvider({children}: {children: React.ReactNode}) {
  const [popupState, setPopupState] = useState(<></>)
  const [component, setComponent] = useState(<></>)
  useEffect(()=>{
    const name = popupState?.type?.name
    // get the name of the component and send it to the server action
    get(name).then((component)=>{
      if(component) setComponent(component as any)
    })
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

