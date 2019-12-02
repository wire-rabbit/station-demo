import React from 'react';
import {Link} from 'react-router-dom';

import Table from '../Table/Table.component.jsx';

const StationData = props => {
  return (
    <Table
      headerCells={[
        'Station Name',
        'Status',
        'Available Bikes',
        'Available Docks',
        'Last Communication',
      ]}
      dataRows={props.stationData.map(station => {
        return {
          status: station.status,
          cells: [
            (<Link
              to={{
                pathname: station.id,
              }}>
              {station.stationName}
            </Link>),
            station.statusKey == 1 ? 'In Service' : 'Not In Service',
            station.availableBikes,
            station.availableDocks,
            station.lastCommunicationTime,
          ],
        };
      })}
    />
  );
};

export default StationData;
