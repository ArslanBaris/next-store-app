import { PageTitle } from "@/components/products/page-title";
import { ProductInfo } from "@/components/products/product-info";
import { Card, CardContent } from "@/components/ui/card";
import { fetchProductById } from "@/lib/api";
import axios from "axios";

type ProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};

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
