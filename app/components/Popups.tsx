"use client"

import {createPortal} from 'react-dom';
import { usePopupContext } from '../context/PopupProvider';
export default function Popups(){
    const {popupState} = usePopupContext();

    return createPortal(popupState,document.body)
}
