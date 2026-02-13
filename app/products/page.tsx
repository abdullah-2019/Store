import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductPage({
    searchParams
}: {
    searchParams: Promise<{ layout: string; search: string }>
}) {
    const { layout = 'grid', search = '' } = await searchParams;
    
    console.log({ layout, search }); // cleaner log
    
    return <ProductsContainer layout={layout} search={search} />;
}

export default ProductPage;