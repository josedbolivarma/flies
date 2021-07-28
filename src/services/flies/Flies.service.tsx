import axios from 'axios';
import { IFly } from '../../models/entity.models';

class FliesService {
    FliesService() {}

    public list = async (): Promise<IFly[]> => {
        return axios.post(`${process.env.REACT_APP_FLY_SEARCHER_API}/flies`)
    }

    public search = async (fly: IFly): Promise<any[]> => {
        /*
        const body = {
            IsAlternateDates: false,
            IsGrouped: true,
            NonStop: false,
            airlineCode: "",
            class: "Y",
            country: fly.country,
            currency: fly.currency,
            flightType: 1,
            includeBaggage: false,
            itaCode: 144038,
            itinerary: [
                {
                    countryCodeDestination: fly.countryDestination,
                    countryCodeOrigin: fly.countryOrigin,
                    departing: fly.departureDate,
                    destination: fly.destination,
                    hour: "",
                    origin: fly.origin
                }
            ],
            language: "ES",
            maxLongConnection: 1439,
            maximumStops: 0,
            minLongConnection: 780,
            passenger: [{age: 0, type: 1, quantity: 1}],
            pcc: "9GRB"
        }

        if (fly.returnDate) {
            body.itinerary.push(
                {
                    countryCodeDestination: fly.countryOrigin,
                    countryCodeOrigin: fly.destination,
                    departing: fly.returnDate,
                    destination: fly.origin,
                    hour: "",
                    origin: fly.destination
                }
            )
        }
        
        
        const urlEndpoint = `${process.env.REACT_APP_VISION_TRAVEL_API}/Flight/Search`;
        return axios.post(urlEndpoint, body, {
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRmxleHNpbiBBUElTIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiZmxleHNpbkB2aXNpb250cmF2ZWwubmV0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMSIsImp0aSI6IjViMmQ3ZDdiLWI2NmYtNGIwYS1iOTk2LTQwYjM2ZTRhYmViYSIsImV4cCI6MTYxNjYzNDMyNCwiaXNzIjoiaHR0cHM6Ly9hcGkudmlzaW9udHJhdmVsLm5ldCIsImF1ZCI6Imh0dHBzOi8vYXBpLnZpc2lvbnRyYXZlbC5uZXQifQ._3E6qz1k7gapIXUn4tYf30nseEqwr5tfHgr9GRYW-9o`
            }
        })
        */
        const body = {
            username: "flexsin@visiontravel.net",
            password: "Flexsin.123"
        };
        const urlEndpoint = `${process.env.REACT_APP_VISION_TRAVEL_API}/Token`;
        return axios.post(urlEndpoint, body)

    }
}

export default FliesService;
