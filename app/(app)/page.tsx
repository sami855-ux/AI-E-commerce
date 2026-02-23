import { sanityFetch } from "@/sanity/lib/live"
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries/categories"

export default async function Home() {
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
