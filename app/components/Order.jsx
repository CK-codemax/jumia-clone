
export default function Order({id, amount, shipping, items, images, timestamp}) {
  return (
    <div className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
                <p className="uppercase font-bold text-xs">
                    order placed
                </p>
                <p>today</p>
            </div>

            <div>
                <p className="uppercase font-bold text-xs">
                    total
                </p>
                <p>{amount}</p>
            </div>

            <p className="whitespace-nowrap text-sm sm:text-xl self-end flex-1 text-right text-blue-500">{items.length > 1 ? `${items.length} items` : `${items.length} item`}</p>

            <p className="absolute top-2 right-2 w-40 lg:w-72 text-xs whitespace-nowrap truncate">ORDER # {id}</p>
        </div>

        <div className="p-5 sm:p-10">
            <div className="flex space-x-6 overflow-x-auto">
                {images.map((image) => <img className="h-20 object-contain sm:h-32" src={image} key={image} alt="order-images" />)}
            </div>
        </div>
    </div>
  )
}