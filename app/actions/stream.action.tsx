"use server";

import { Suspense } from "react";

import { createComponentStream } from "../lib/serverstream";


const Loader = () => (
  <div className="absolute top-0 flex justify-center items-center h-screen w-screen bg-black/20">
        <div className="w-1/3 h-64 rounded-lg bg-white/50 text-black">
          <h1>Loading</h1>
        </div>
      </div>
)
export const getStream = async (componentName:string) =>{
  const { stream, write } = createComponentStream();
  if(componentName == undefined) return stream();
  const Component = (await import(`../components/${componentName}.tsx`)).default;

    write(<Suspense fallback={<Loader />}>
      <Component />
      </Suspense>);

  // you can also write other components here to the stream
  //  write(<div className="absolute top-0">Some other Component</div>);

  return stream();
}
