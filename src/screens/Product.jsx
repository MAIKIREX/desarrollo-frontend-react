import SearchBar from "./Product/.components/SearchBar";
import ProductTable from "./Product/.components/ProductTable";
import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import {setProducts} from "../../src/Redux/Product/productActions"
const FilterableProductTable = () => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const products = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts([
                { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
                { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
                {
                    category: "Fruits",
                    price: "$2",
                    stocked: false,
                    name: "Passionfruit",
                },
                { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
                {
                    category: "Vegetables",
                    price: "$4",
                    stocked: false,
                    name: "Pumpkin",
                },
                { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
            ])
        )
    }, [])

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products.products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
