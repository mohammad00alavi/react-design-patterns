import { ComponentType } from "react";

interface Props<T> {
    items: T[];
    resourceName: string;
    itemComponent: ComponentType<T>;
}

const NumberedList = <T extends object>({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: Props<T>) => {
    return (
        <>
            {items.map((item, i) => (
                <>
                    <h3>{i + 1}.</h3>
                    <ItemComponent
                        key={i}
                        {...({ [resourceName]: item } as T)}
                    />
                </>
            ))}
        </>
    );
};

export default NumberedList;
