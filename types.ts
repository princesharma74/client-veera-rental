export interface CarDetailsType{
    collectionId: string
    id: string
    KMs: number
    additional_info: string
    body_type: string
    brand: string
    category: string
    collectionName: string
    color: string
    created: string
    daily_price: number
    deposit: number
    fuel_type: string
    images: string[]
    model: string
    seats: number
    status: "Available" | "Unavailable"
    updated: Date
    weekly_price: number
    year: number
}

export interface Nav{
  name: string;
  link: string;
}
