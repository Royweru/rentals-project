type CustomListing={
    id: string;
    agentId: string;
    locationId: string;
    typeId: string;
    categoryId: string;
    title: string;
    description: string |undefined;
    thumbnail: string;
    rentalPrice: number |undefined;
    purchasePrice: number |undefined;
    bathrooms: number;
    area: number;
}