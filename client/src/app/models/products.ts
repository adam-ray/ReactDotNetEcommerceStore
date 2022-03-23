export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    brand: string;
    quantityInStock?: number;
}

//type? makes this optional to be entered on app.tsx addProducts function
//this typescript interface replaces previous way we had addProducts with item,index