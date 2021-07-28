import axios from 'axios';
import { IInsurance } from '../../models/entity.models';

class InsurancesService {
    InsurancesService() {}

    public list = async (): Promise<IInsurance[]> => {
        return axios.post(`${process.env.REACT_APP_FLY_SEARCHER_API}/insurances`)
    }
}

export default InsurancesService;
