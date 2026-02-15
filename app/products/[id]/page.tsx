// app/products/[id]/page.tsx
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from 'next/image';
import { FormatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCard from "@/components/single-product/AddToCard";
import ProductRating from "@/components/single-product/ProductRating";

// IMPORTANT: In Next.js 15+, params is a Promise
async function SingleProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // Await the params Promise
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // Debug log (check your server console)
    console.log("Product ID:", id);

    const product = await fetchSingleProduct(id);

    const { name, image, company, description, price } = product;
    const dollarAmount = FormatCurrency(price);

    return (
        <section>
            <BreadCrumbs name={product.name} />
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                {/* Image First Col */}
                <div className="relative h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        className="w-full rounded object-cover"
                    />
                </div>
                {/* product Info Second Col */}
                <div>
                    <div className="flex gap-x-8 items-center">
                        <h1 className="capitalize text-3xl font-bold">{name}</h1>
                        <FavoriteToggleButton productId={id} />
                    </div>
                    <ProductRating productId={id} />
                    <h4 className="text-xl mt-2">{company}</h4>
                    <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
                        {dollarAmount}
                    </p>
                    <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
                    <AddToCard productId={id} />
                </div>
            </div>
        </section>
    );
}

export default SingleProductPage;