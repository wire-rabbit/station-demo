import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import axios from 'axios';

import Container from '../Container/Container.component.jsx';
import StationData from '../StationData/StationData.component.jsx';
import StationDetails from '../StationDetails/StationDetails.component.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stationData: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/v1/data')
      .then(response => {
        if (response.data) {
          // TODO: Break this processing into its own module
          const stations = response.data.stationBeanList.map(station => {
            return {
              ...station,
              status: station.statusKey == 2 ? 'negative' : null,
            };
          });
          this.setState({stationData: stations});
        } else {
          console.log('No data found');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div data-test="component-app">
          <Container>
            <Switch>
              <Route path="/" exact>
                <StationData stationData={this.state.stationData} />
              </Route>
              <Route path="/:id" exact>
                <StationDetails stationData={this.state.stationData} />
              </Route>
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
