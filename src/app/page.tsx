import ProductCard from "@/components/products/product-card";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {

  const products = await axios.get(process.env.NEXT_PUBLIC_API_URL + `products`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch((error) => {
    console.error(error);
  });


  return (
    <div>
      <div className="overflow-auto pb-2">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {products && products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
