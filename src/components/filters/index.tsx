import { CategoryFilter } from './components/category-filter';
import { fetchCategories } from '@/lib/api';

export async function Filters() {

    const categories = await fetchCategories();

    return (
        <>
           <CategoryFilter categories={categories}  />
        </>
    );
}
