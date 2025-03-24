import { Filters } from "@/components/filters";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/query-client/query-client";
import { fetchProductsQuery } from "@/lib/api";
import ProductList from "@/components/products/product-list";
import { APP_NAME, APP_URL, routes } from "@/config/constants";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: APP_NAME,
  pathname: routes.home(),
  images: [{ url: APP_URL + '/favicon.ico', alt: APP_NAME }],
});

export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;

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
