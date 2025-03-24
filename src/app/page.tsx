import { Filters } from "@/components/filters";
import ProductCard from "@/components/products/product-card";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/query-client/query-client";
import { fetchProductsQuery } from "@/lib/api";
import { Product } from "@/types/product";
import ProductList from "@/components/products/product-list";


export default async function Home({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams.category;


  const queryClient = getQueryClient();
  await fetchProductsQuery(queryClient, category);

  const dehydratedState = dehydrate(queryClient); 

  return (
    <div>
      <div className="overflow-auto pb-2 mt-3 flex flex-col gap-y-2">
        <div className="sticky top-0  max-h-[80vh] overflow-x-auto block">
          <Filters />
        </div>
        <HydrationBoundary state={dehydratedState}>
        <ProductList category={category} />
        </HydrationBoundary>
      </div>
    </div>
  );
}
