"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

type PageTitleProps = {
    title: string;
};

export function PageTitle({ title }: PageTitleProps) {

    const router = useRouter();


    return (
        <div className="mb-2 flex items-center gap-2">
            <div className="flex-none">
                <Button
                    size="icon"
                    className="rounded-full"
                    aria-label="Go Back"
                    variant="ghost"
                    onClick={() => {
                        router.back();
                    }}
                >
                    <ArrowLeft />
                </Button>
            </div>
            <h1 className="text-muted-foreground line-clamp-2 border-l pl-4 font-bold">
                {title}
            </h1>
        </div>
    );
}
