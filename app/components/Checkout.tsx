export default async function Checkout () {

    console.log('checkout',process.env.npm_node_execpath);
    return (
      <div className="absolute top-0 h-full w-full bg-black/20">
        <div className="w-1/3 bg-white text-black">
          <h1>Checkout</h1>
        </div>
      </div>
    )
  }
