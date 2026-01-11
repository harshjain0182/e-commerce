import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { getAllProducts } from "../../API/product-API";
import { ProductCard } from "../../components/Product-card";
import { getAllCategories } from "../../API/getAllCategories";

export const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategories] = useState([]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [priceSort, setPriceSort] = useState("");

    useEffect(() => {
        (async () => {
            const Products = await getAllProducts();
            setAllProducts(Products);
            setProducts(Products);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const allcategories = await getAllCategories();
            setCategories(allcategories);
        })();
    }, []);

    const setProductsByCategory = (name) => {
        const filtered = allProducts.filter(
            (product) => product.category.name === name
        );
        setProducts(filtered);
    };

    // 🔍 Search + Sort logic
    let filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (priceSort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (priceSort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <>
            <Navbar />

            {/* SIDEBAR */}
            <aside
                className={`
          fixed left-0 top-[72px] z-40
          h-[calc(100vh-72px)] w-52
          bg-purple-500 text-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Close icon */}
                <div className="flex justify-end p-3">
                    <span
                        className="material-symbols-outlined cursor-pointer
            transition-transform duration-300 hover:rotate-90"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        close
                    </span>
                </div>

                {/* Filters */}
                <div className="px-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Search product..."
                        className="w-full px-3 py-2 rounded text-black"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div>
                        <p className="font-semibold mb-1">Sort by price</p>
                        <select
                            className="w-full px-2 py-2 rounded text-black"
                            value={priceSort}
                            onChange={(e) => setPriceSort(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="low">Low → High</option>
                            <option value="high">High → Low</option>
                        </select>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main
                className={`
          min-h-screen bg-purple-200
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "ml-52" : "ml-0"}
        `}
            >
                {/* Menu icon */}
                <div
                    className={`
                        pl-4 pt-4
                        transition-all duration-300
                        ${isSidebarOpen ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"}
                    `}
                >
                    <span
                        className="material-symbols-outlined text-3xl cursor-pointer
                        transition-transform duration-300 hover:scale-110"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        menu
                    </span>
                </div>



                {/* Categories */}
                <div className="flex gap-4 justify-center pt-4 text-white">
                    <span
                        className="bg-purple-700 rounded-full px-4 py-2 cursor-pointer"
                        onClick={() => setProducts(allProducts)}
                    >
                        All
                    </span>

                    {category.map((cat) => (
                        <span
                            key={cat.id}
                            className="bg-purple-700 rounded-full px-4 py-2 cursor-pointer"
                            onClick={() => setProductsByCategory(cat.name)}
                        >
                            {cat.name}
                        </span>
                    ))}
                </div>

                {/* Products */}
                <div className="flex flex-wrap gap-8 justify-center pt-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </>
    );
};
