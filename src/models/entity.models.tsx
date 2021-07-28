export interface ICard {
    title: string;
    subTitle: string;
}
export interface IFly {
    country: string;
    countryOrigin: string;
    countryDestination: string;
    currency: string;
    departureDate: string;
    destination: string;
    id: number;
    intervalDestination?: number;
    intervalOrigin: number;
    origin: string;
    returnDate?: string;
    text: string;
}
export interface IPackage {
    id: number;
    text: string;
}
export interface IHotel {
    id: number;
    text: string;
}
export interface IInsurance {
    id: number;
    text: string;
}
