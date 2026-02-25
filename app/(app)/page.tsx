import { sanityFetch } from "@/sanity/lib/live"
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories"
import { FILTER_PRODUCTS_BY_NAME_QUERY, FILTER_PRODUCTS_BY_PRICE_ASC_QUERY } from "@/sanity/queries/products"
import { FILTER_PRODUCTS_BY_PRICE_DESC_QUERY } from "@/sanity/queries/products"
import { FILTER_PRODUCTS_BY_RELEVANCE_QUERY } from "@/sanity/queries/products"

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    color?: string;
    material?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    inStock?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;

  const searchQuery = params.q ?? "";
  const categorySlug = params.category ?? "";
  const color = params.color ?? "";
  const material = params.material ?? "";
  const minPrice = Number(params.minPrice) || 0;
  const maxPrice = Number(params.maxPrice) || 0;
  const sort = params.sort ?? "name";
  const inStock = params.inStock === "true";

  // Select query based on sort parameter
  const getQuery = () => {
    // If searching and sort is relevance, use relevance query
    if (searchQuery && sort === "relevance") {
      return FILTER_PRODUCTS_BY_RELEVANCE_QUERY;
    }

    switch (sort) {
      case "price_asc":
        return FILTER_PRODUCTS_BY_PRICE_ASC_QUERY;
      case "price_desc":
        return FILTER_PRODUCTS_BY_PRICE_DESC_QUERY;
      case "relevance":
        return FILTER_PRODUCTS_BY_RELEVANCE_QUERY;
      default:
        return FILTER_PRODUCTS_BY_NAME_QUERY;
    }
  };
  const {data: catagories} = await sanityFetch({query: ALL_CATEGORIES_QUERY})


  return (
    <div className="">
      {/*Featured Prodcuts Carousole */}

      {/* Page Banner */}

      {/* Category Tiles */}

      {/*Products Section  */}
    </div>
  )
}
