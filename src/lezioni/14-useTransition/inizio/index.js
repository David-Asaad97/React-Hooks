import React, { useTransition } from "react";
import ProductList from "./components/ProductList";
import { data } from "./assets/data";

const Component = () => {
    const [isPending, setIsPending] = useTransition();
    
    const [inputValue, setInputValue] = React.useState("");
    const [filteredProducts, setFilteredProducts] = React.useState(data);

    const handleChange = (e) => {
        const { value } = e.target;

        setIsPending(() => {
            setInputValue(value);
        })
    };

    React.useEffect(() => {
        if (!inputValue) {
            setFilteredProducts(data);
        }
        setFilteredProducts(data.filter((el) => el.text.includes(inputValue)));
    }, [inputValue]);
    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-center'>
                <input
                    type='text'
                    className='input-group-text bg-white'
                    onChange={handleChange}
                />
            </div>
                {isPending ? <h4 >Loading..</h4> :  <ProductList products={filteredProducts} />}
           
        </div>
    );
};

export default Component;
