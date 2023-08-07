export interface Person {
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}

export interface PersonProps {
    person: Person;
}

export interface Product {
    name: string;
    price: string;
    description: string;
    rating: number;
}

export interface ProductProps {
    product: Product;
}
