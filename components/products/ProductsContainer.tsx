import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

async function ProductsContainer({ layout, search }: { layout: string, search: string }) {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <>
      {/*Header*/}
      <section>
        <div className="flex justify-between item-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className="flex gap-x-4">
            <Button variant={layout === 'grid' ? 'default' : 'ghost'} asChild size='icon'>
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button variant={layout === 'grid' ? 'default' : 'ghost'} asChild size='icon'>
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/*products*/}
      <div>
        {
          totalProducts === 0 ? <h5 className="text-2xl mt016">
            Sorry, we couldn't find any products matching your search criteria.
          </h5> : layout === 'grid' ? <ProductsGrid products={products} /> : <ProductsList products={products} />
        }
      </div>
    </>
  )
}

export default ProductsContainer;
