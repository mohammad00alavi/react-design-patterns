import resourceLoader from "./resourceLoader";

type Product = {
    name: string;
    id: number;
    brand: string;
};

interface Props {
    product?: Product;
    onChangeProduct?: (data: { [key: string]: string | number }) => void;
    onSaveProduct?: () => void;
    onResetProduct?: () => void;
}

const Form = resourceLoader(
    ({ product, onChangeProduct, onSaveProduct, onResetProduct }: Props) => {
        const { name, id, brand } = product || {};
        console.log(product)
        return product ? (
            <>
                <label>
                    Name:
                    <input
                        value={name}
                        onChange={(e) => {
                            if (onChangeProduct) {
                                onChangeProduct({ name: e.target.value });
                            }
                        }}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        value={id}
                        onChange={(e) => {
                            if (onChangeProduct) {
                                onChangeProduct({
                                    id: Number(e.target.value),
                                });
                            }
                        }}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => {
                            if (onChangeProduct) {
                                onChangeProduct({ brand: e.target.value });
                            }
                        }}
                    />
                </label>
                <button onClick={onResetProduct}>Reset</button>
                <button onClick={onSaveProduct}>Save Changes</button>
            </>
        ) : (
            <p>Loading...</p>
        );
    },
    "https://user-cea32-default-rtdb.europe-west1.firebasedatabase.app/products/111.json",
    "product"
);

export default Form;
