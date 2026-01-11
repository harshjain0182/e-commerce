import { useEffect, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { getAllProducts } from "../../API/product-API"
import { ProductCard } from "../../components/Product-card";
import { getAllCategories } from "../../API/getAllCategories";
export const Home = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategories] = useState([]);
    

    useEffect(() => {
        (async () => {
            const Products = await getAllProducts();
            setProducts(Products);
            setAllProducts(Products);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const allcategories = await getAllCategories();
            setCategories(allcategories)
        })();
    }, []);

    const setProductsByCategory = (name) => {
        const categorizedProducts = allProducts.filter(product => product.category.name === name)
        setProducts(categorizedProducts);
    }
    
    return (
        <>
            <Navbar />
            <main className="flex flex-wrap gap-8 justify-center pt-8 bg-purple-200">
                <div className="flex gap-9 text-white">
                    <span className="bg-purple-700 rounded-full p-2 cursor-pointer w-14 h-10 text-center" onClick={() => setProducts(allProducts)}>All</span>
                    {
                        category.map(category => <span key={category.id} className="bg-purple-700 rounded-full p-2 cursor-pointer w-34 h-10 text-center" onClick={() => setProductsByCategory(category.name)}>{category.name}</span>)
                        
                    }
                </div>
                <div className="flex flex-wrap gap-8 justify-center pt-2">
                    {
                        products.length > 0 && products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </main>
        </>
    )
}