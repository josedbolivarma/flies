import React from 'react';
import Aside from '../../components/layout/Aside';
import Banner from '../../components/layout/Banner';
import Card from '../../components/layout/Card';
import EventCard from '../../components/layout/EventCard';
import { IProps, IState } from './LayoutComponent.model';
import FliesService from '../../services/flies/Flies.service';
import PackagesService from '../../services/packages/Packages.service';
import HotelsService from '../../services/hotels/Hotels.services';
import InsurancesService from '../../services/insurances/Insurances.service';

class LayoutComponent extends React.Component<IProps, IState> { 
    private fliesService: FliesService;
    private packagesService: PackagesService;
    private hotelsService: HotelsService;
    private insurancesService: InsurancesService;
    constructor(props: any) {
        super(props);
        this.fliesService = new FliesService();
        this.packagesService = new PackagesService();
        this.hotelsService = new HotelsService();
        this.insurancesService = new InsurancesService();
        this.state = {
            cards: [
                { title: '0', subTitle: 'Vuelos' },
                { title: '0', subTitle: 'Paquetes' },
                { title: '0', subTitle: 'Hoteles' },
                { title: '0', subTitle: 'Seguros' }
            ],
            flies: [],
            hotels: [],
            packages: [],
            insurances: []
        }
    }

    async componentDidMount() {
        const arrPromises = [
            this.fliesService.list(),
            this.packagesService.list(),
            this.hotelsService.list(),
            this.insurancesService.list()
        ];

        try {
            const responses: any[] = await Promise.all(arrPromises);
            this.setState({
                flies: responses[0].data.flies,
                packages: responses[1].data.packages,
                hotels: responses[2].data.hotels,
                insurances: responses[3].data.insurances,
            });
        } catch (err: any) {
            console.log(err);
        }

        setTimeout(() => {
            this.fliesService.search(this.state.flies[0]);
        }, 10000);
    }

    render() {
        return (
        <div className="App">
            <div className="container">                
                <div className="columns">
                    <div className="column is-2 ">
                        <Aside></Aside>
                    </div>
                    <div className="column is-10">
                        <Banner></Banner>
                        <section className="info-tiles">
                            <div className="tile is-ancestor has-text-centered">
                                {this.state.cards.map((card: any) => <Card title={card.title} subTitle={card.subTitle}></Card>)}
                            </div>
                        </section>
                        <div className="columns">
                            <div className="column is-6">
                                <EventCard title="Vuelos" list={ this.state.flies }></EventCard>
                            </div>
                            <div className="column is-6">
                                <EventCard title="Paquetes" list={ this.state.packages }></EventCard>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-6">
                                <EventCard title="Hoteles" list={ this.state.hotels }></EventCard>
                            </div>
                            <div className="column is-6">
                                <EventCard title="Seguros" list={ this.state.insurances }></EventCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default LayoutComponent;
