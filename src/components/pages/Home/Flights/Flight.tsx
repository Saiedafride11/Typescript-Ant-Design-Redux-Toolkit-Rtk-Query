import React from 'react';



type FlightProps = { 
      flight: {
            flight_number: number,
            mission_name: string
      }
}

const Flight = ({flight} : FlightProps) => {
      const {flight_number}  = flight
      return (
            <div>
                  Successfully show data ............... {flight_number}
            </div>
      );
};

export default Flight;