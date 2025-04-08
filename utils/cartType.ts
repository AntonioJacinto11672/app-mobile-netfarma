export type CartProductType = {
    id: string,
    name: string,
    description: string,
    quantity: number,
    price: number,
    isActive: boolean,
    medicineCategories?: string | null,
    medicineFIles?: File | null,
};