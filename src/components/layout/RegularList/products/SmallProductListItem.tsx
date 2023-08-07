import { ProductProps } from "../types";

const SmallProductListItem = ({ product }: ProductProps) => {
    const { name, price } = product;

    return (
        <h3>
            {name} - {price}
        </h3>
    );
};

export default SmallProductListItem;
