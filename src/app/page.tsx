import { Filters } from "@/components/filters";
import ProductCard from "@/components/products/product-card";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {

  
  const categoryFilter = searchParams.category ? `/category/${searchParams.category}` : "";
  const sortOption = searchParams.sort ? `?sort=${searchParams.sort}` : "";

  const products = await axios.get(process.env.NEXT_PUBLIC_API_URL + `products/${categoryFilter}${sortOption}`, {
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
      <div className="overflow-auto pb-2 mt-3 flex flex-col gap-y-2">
        <div className="sticky top-0  max-h-[80vh] overflow-x-auto block">
          <Filters />
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {products && products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
