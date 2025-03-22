import { PageTitle } from "@/components/products/page-title";
import { ProductInfo } from "@/components/products/product-info";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";


type ProductPageProps = {
    params: Promise<{
        productId: string;
    }>;
};

export default async function ProductPage(props: ProductPageProps) {
    const { productId } = await props.params;

    console.log(productId);

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const product = await axios.get(process.env.NEXT_PUBLIC_API_URL + `products/${productId}`, config)
        .then((response) => {
            console.log(response.data);
            return response.data;
        }).catch((error) => {
            console.error(error);
        });


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
