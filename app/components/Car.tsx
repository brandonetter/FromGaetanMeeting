
export default async function Car() {
    await new Promise((res)=>setTimeout(res,400));
    return (
      <div className="absolute top-0 flex justify-center items-center h-screen w-screen bg-black/20">
        <div className="w-1/3 h-64 rounded-lg bg-white text-black">
          <h1>Car</h1>
        </div>
      </div>
    )
  }
