
export default function Car() {
    console.log('car',process.env.npm_node_execpath)
    return (
      <div className="absolute top-0 h-full w-full bg-black/20">
        <div className="w-1/3 bg-white text-black">
          <h1>Car</h1>
        </div>
      </div>
    )
  }
