import React from 'react';
import { useParams } from 'react-router-dom';

const FlightDetails = () => {
      const {flightId} = useParams();
      return (
            <div>
                  FlightDetails {flightId}
            </div>
      );
};

export default FlightDetails;