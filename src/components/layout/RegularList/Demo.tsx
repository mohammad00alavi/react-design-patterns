import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import SmallProductListItem from "./products/SmallProductListItem";
import { Person, Product } from "./types";
import { people, products } from "./utils";

const RegularListDemo = () => {
    return (
        <>
            {/* TODO - fix the Type error here */}
            <RegularList<Person>
                items={people}
                resourceName={"person"}
                itemComponent={SmallPersonListItem}
            />
            <RegularList<Person>
                items={people}
                resourceName={"person"}
                itemComponent={LargePersonListItem}
            />
            <NumberedList<Product>
                items={products}
                resourceName={"product"}
                itemComponent={SmallProductListItem}
            />
            <NumberedList<Product>
                items={products}
                resourceName={"product"}
                itemComponent={LargeProductListItem}
            />
        </>
    );
};

export default RegularListDemo;
