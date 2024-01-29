import Image from "next/image";
import Link from "next/link";

export default function ProductThumbnail({product}) {
  return (
    <Link className="border-2 rounded-md p-2 flex flex-col space-y-4 justify-center" href={`/individual-product/${product.id}`}>
        <Image src={product.img} alt="product-image" width={500} height={300} className="object-cover" />
    <p>{product.name}</p>
    </Link>
  )
}
