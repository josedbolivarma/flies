import axios from 'axios';
import { IPackage } from '../../models/entity.models';

class PackagesService {
    PackagesService() {}

    public list = async (): Promise<IPackage[]> => {
        return axios.post(`${process.env.REACT_APP_FLY_SEARCHER_API}/packages`)
    }
}

export default PackagesService;
