import { ICard, IFly, IHotel, IPackage, IInsurance } from '../../models/entity.models'
export interface IProps{}
export interface IState {
    cards: ICard[];
    flies: IFly[];
    hotels: IHotel[];
    packages: IPackage[];
    insurances: IInsurance[];
}
