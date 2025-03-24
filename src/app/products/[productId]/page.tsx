import { PageTitle } from "@/components/products/page-title";
import { ProductInfo } from "@/components/products/product-info";
import { Card, CardContent } from "@/components/ui/card";
import { routes } from "@/config/constants";
import { fetchProductById } from "@/lib/api";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};


export async function generateMetadata(
    props: ProductPageProps,
  ): Promise<Metadata> {
    const { productId } = await props.params;
  
    const product = await fetchProductById(productId);
    if (!product) notFound();
  
    return getMetadata({
      title: product.title,
      description: product.description,
      pathname: routes.product({ productId }),
      images: [{ url: product.image, alt: product.title }],
    });
  }

export default async function ProductPage(props: ProductPageProps) {
    const { productId } = await props.params;

    const product = await fetchProductById(productId);

    return (
        <div className="flex flex-col gap-4 mb-3">
            <PageTitle title={product.title} />
            <Card>
                <CardContent>
                    <ProductInfo product={product} />
                </CardContent>
            </Card>
        </div>
    );
}
