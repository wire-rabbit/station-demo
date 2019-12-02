import React from 'react';
import axios from 'axios';

import Container from '../Container/Container.component.jsx';
import Table from '../Table/Table.component.jsx';

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
      <div data-test="component-app">
        <Container>
          <Table
            headerCells={[
              'Station Name',
              'Status',
              'Available Bikes',
              'Available Docks',
              'Last Communication',
            ]}
            dataRows={this.state.stationData.map(station => {
              return {
                status: station.status,
                cells: [
                  station.stationName,
                  station.statusKey == 1 ? 'In Service' : 'Not In Service',
                  station.availableBikes,
                  station.availableDocks,
                  station.lastCommunicationTime,
                ],
              };
            })}
          />
        </Container>
      </div>
    );
  }
}

export default App;
