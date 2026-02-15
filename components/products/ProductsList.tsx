import { FormatCurrency } from "@/utils/format";
import { Product } from '@prisma/client';
import Link from "next/link";
import { Card, CardContent } from '../ui/card';
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const dollarsAmount = FormatCurrency(price);

        return (
          <article key={productId} className="relative group">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 py-2">
                <CardContent className="flex flex-col md:flex-row gap-4 px-2">
                  {/* IMAGE + INFO SIDE BY SIDE */}
                  <div className="flex flex-col md:flex-row gap-4 flex-1">
                    {/* IMAGE */}
                    <div className="relative h-64 md:h-48 md:w-48 rounded overflow-hidden shrink-0">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px) 100vw, 200px"
                        priority
                        className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* INFO - Aligned to top */}
                    <div className="flex flex-col pt-2">
                      <h2 className="text-xl font-semibold capitalize">{name}</h2>
                      <h4 className="text-muted-foreground text-md">{company}</h4>
                    </div>
                  </div>

                  {/* PRICE - Pushed to right on desktop */}
                  <p className="text-muted-foreground text-lg md:self-start md:ml-auto pt-2">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* FAVORITE BUTTON */}
            <div className="absolute bottom-8 right-8 z-10">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;