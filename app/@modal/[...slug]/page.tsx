"use client"
import {useRouter} from 'next/navigation';

export default function Page({params}:{params:{slug:string[]}}){

    const router = useRouter();
    const typeOfModal = params.slug[0];
    const processStep = params.slug[1];

    if(typeOfModal==="modal"){
      if(!processStep){

      return <div className="absolute top-0 h-full w-full bg-black/20">
        <div className="w-1/3 bg-white text-black">
          {params.slug.join('/')}
          <h1>I'm in a modal</h1>
          <a href={window.location.pathname+'/car/123'}>Go to car step</a>
        <button onClick={()=>router.back()} className="text-black">Close Modal</button>
        </div>
      </div>
      }

      if(processStep === 'car'){
      return <div className="absolute top-0 h-full w-full bg-black/20">
      <div className="w-1/3 bg-white text-black">
        {params.slug.join('/')}
        <h1>Car Step</h1>
      <button onClick={()=>router.back()} className="text-black">Back</button>
      </div>
    </div>
    }
    }


}
