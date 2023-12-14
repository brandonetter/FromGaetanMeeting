"use client"


import {createPortal} from 'react-dom';
import { useStream } from '../lib/clientstream';
import { usePopupContext } from '../context/PopupProvider';
import {useEffect} from 'react';



const WrapperWithCloseButton = ({children,clear}:{children:any,clear:any})=>{
    return <div>
        <button className="absolute top-10 right-10 z-[20]" onClick={clear}>X</button>
        {children}
    </div>
}

export default function Popups({serverFetch}:{serverFetch:any}){
    const {component,setPopupState} = usePopupContext();
    const {data,refetch,clear} = useStream(serverFetch,component);

    const clearPopup = ()=>{
        clear();
        setPopupState(<></>);

    }
    useEffect(()=>{
        clear();
        refetch();
    },[component,refetch,clear])
    if(!data[0]?.ui) return null;
    return createPortal(<WrapperWithCloseButton clear={clearPopup}>{data.map((component)=><div key={component.id}>{component.ui}</div>)}</WrapperWithCloseButton>,document.body)
}
