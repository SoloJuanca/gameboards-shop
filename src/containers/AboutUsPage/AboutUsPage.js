import { ProductCard } from "../../components";
import { products } from "../../utils/products";

import css from './AboutUsPage.module.css';

const AboutUsPage = () => {

    return (
        <div>
            <Banner />
            <div className={css.ProductList}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} className={css.ProductList__card} />
                })}
            </div>

            <div className={css.AboutUs}>

            </div>

            
        </div>
    );
}

export default AboutUsPage;