export const APP_NAME = "Next Store App";
export const APP_DESCRIPTION = "Next Store App is a sample e-commerce application built with Next.js, Redux Toolkit, and Tailwind CSS.";
export const APP_URL = "https://next-store-app-ashen.vercel.app";

export const routes = {
    home: () => '/',
    product: (args: { productId: string }) => `/products/${args.productId}`,
    checkout: () => '/checkout',
  };
  