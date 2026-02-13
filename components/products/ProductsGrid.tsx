import { FormatCurrency } from "@/utils/format";
import { Product } from '@prisma/client';
import Link from "next/link";
import { Card, CardContent } from '../ui/card';
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarsAmount = FormatCurrency(price);
        return <article key={productId} className="group relative">
          <Link href={`products/${productId}`}>
            <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-1">
                {/* Added pt-1 to match the p-1 padding */}
                <div className="relative h-56 md:h-40 rounded overflow-hidden bg-gray-100 pt-1 px-1">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-base capitalize">{name}</h2>
                  <p className="text-muted-foreground mt-1">{dollarsAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <div className="absolute top-3 right-3 z-5">
            <FavoriteToggleButton productId={productId} />
          </div>
        </article>
      })}
    </div>
  )
}

export default ProductsGrid;