"use client"


import {createPortal} from 'react-dom';
import { usePopupContext } from '../context/PopupProvider';
import React from 'react';
export default function Popups(){
    if(typeof window === 'undefined') return null;
    const {component} = usePopupContext();
    if(component.type === React.Fragment) return null;
    return createPortal(<div dangerouslySetInnerHTML={{__html:component}}></div>,document.body)
}
