import { ComponentType } from "react";

interface Props<T> {
    items: T[];
    resourceName: string;
    itemComponent: ComponentType<T>;
}

const RegularList = <T extends object>({
    items,
    resourceName,
    itemComponent: ItemComponent,
}: Props<T>) => {
    return (
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...({ [resourceName]: item } as T)} />
            ))}
        </>
    );
};

export default RegularList;
