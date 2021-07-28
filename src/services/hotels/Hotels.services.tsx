import axios from 'axios';
import { IHotel } from '../../models/entity.models';

class HotelsService {
    HotelsService() {}

    public list = async (): Promise<IHotel[]> => {
        return axios.post(`${process.env.REACT_APP_FLY_SEARCHER_API}/hotels`)
    }
}

export default HotelsService;
