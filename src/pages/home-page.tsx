import { LayoutStd } from "@/components/layout-std";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RootState } from "@/redux/store";
import { Product } from "@/types/product";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";



export function HomePage(){
  const products = useSelector<RootState, Product[]>(state => state.products.data)
  const [queryString, setQueryString] = useSearchParams()
  const options = useMemo(() => Object.fromEntries(queryString), [queryString])

  const [search, setSearch] = useState(options.search || '')
  const [sort, setSort] = useState(options.sort || 'newest')
  
  useEffect(() => {
    const newQueryString = new URLSearchParams(queryString)
    newQueryString.set('search', search)
    newQueryString.set('sort', sort)
    setQueryString(newQueryString, { replace: true })
  }, [search, sort])

  const filteredProducts = useMemo(() => {
    const { search, sort } = options
    let result = [...products]
    if (options.search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
    switch (sort) {
      case 'oldest':
        result.sort((a,b) => ((b.createdAt || '') > (a.createdAt || '') ? -1 : 1) )
        break;
      case 'recently-updated':
        result.sort((a,b) =>  ((a.updatedAt || '') > (b.updatedAt || '') ? -1 : 1))
        break;
      case 'most-qty':
        result.sort((a,b) => b.qty - a.qty)
        break;
      case 'least-qty':
        result.sort((a,b) => a.qty - b.qty)
        break;
      default:
        result.sort((a,b) => ((a.createdAt || '') > (b.createdAt || '') ? -1 : 1))
    }
    return result
  }, [products, options])

  return (
    <LayoutStd activeMenuId="product-list" containerClassName="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1"><Input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} /></div>
        <div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="recently-updated">Last Update</SelectItem>
              <SelectItem value="most-qty">Most stock</SelectItem>
              <SelectItem value="least-qty">Least stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </LayoutStd>
  )
}