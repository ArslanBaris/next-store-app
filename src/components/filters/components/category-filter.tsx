'use client';
import { getCategoryName } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

type CategoryFilterProps = {
    categories: string[];
};

export function CategoryFilter({ categories }: CategoryFilterProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleCategorySelect = (category?: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());

        if (!category) {
            router.push('/');
            return;
        }

        if (currentParams.get('category') === category) {
            currentParams.delete('category');
        } else {
            currentParams.set('category', category);
        }

        router.push(`?${currentParams.toString()}`);
    }

    const isChecked = (category: string) => {
        const currentCategories = searchParams.get('category')?.split('-') || [];
        return currentCategories.includes(category);
    }

    return (
        <div className='flex flex-wrap gap-2'>
            <Button key={"all"} variant={searchParams.get('category') ? 'outline' : 'default'} onClick={() => handleCategorySelect()}>
                <span>All</span>
            </Button>
            <Carousel
                className="w-auto"
            >
                <CarouselContent>
                    {
                        categories && categories.map((category: string) => (
                            <CarouselItem key={category} className="w-auto basis-auto">
                                <Button key={category} variant={isChecked(category) ? 'default' : 'outline'} onClick={() => handleCategorySelect(category)}>
                                    {getCategoryName(category)}
                                    {
                                        isChecked(category) &&
                                        <div className='p-1'>
                                            <X size={20} />
                                        </div>
                                    }
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    );
}
