import Header from "./components/header";
import { APP_NAME } from "@/config/constants";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {

    return (
        <>
            <div className="grid min-h-screen  grid-rows-[auto_1fr_auto] *:min-w-0 xl:border-x">
               <Header />
                <div className="">
                    <div className="h-full bg-background/60">
                        <div className="fixed inset-0 -z-10 grid place-content-center">
                            <div className="size-[32rem] rounded-full bg-primary/60 blur-[16rem]" />
                        </div>
                        <div className="mx-auto max-w-screen-xl p-2 sm:p-6">{children}</div>
                    </div>
                </div>
                <div className="hidden md:flex sticky bottom-0 z-50 justify-center items-center border-t bg-background/60 px-4 backdrop-blur min-h-14">
                    <p>© {new Date().getFullYear()} {APP_NAME}</p>
                </div>
            </div>
        </>
    );
}