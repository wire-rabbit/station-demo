import React from 'react';
import {withRouter} from 'react-router-dom';

const StationDetails = props => {
  let details = <h1>No Details Found</h1>;
  if (props.stationData) {
    for (var i = 0; i < props.stationData.length; i++) {
      if (props.stationData[i].id == props.match.params.id) {
        details = (
          <div>
            <h1>Station Details</h1>
            <ul>
              <li>Station Name: {props.stationData[i].stationName}</li>
            </ul>
          </div>
        );
        break;
      }
    }
  }
  return details;
};

export default withRouter(StationDetails);
