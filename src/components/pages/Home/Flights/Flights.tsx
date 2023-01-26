import { Row } from 'antd';
import { Col } from 'antd/es/grid';
import React from 'react';
import { useGetFlightsQuery } from '../../../../features/api/apiSlice';
import Flight from './Flight';

const Flights = () => {
      const { data: flights, isLoading, isError } = useGetFlightsQuery();
      console.log(flights);

      // const flights: Flights[] | undefined

    // decide what to render
    let content = null;
    if (isLoading){
        content = <p>Loading</p>
    }
    if (!isLoading && isError){
      //   content = <Error message="There was an error occured!"/>
        content = <p>There was an error occured!</p>
    }
    if (!isLoading && !isError && flights?.length === 0) {
        content = <p>No videos found!</p>
    }
    if (!isLoading && !isError && flights?.length || 0 > 0) {
        content = <Row>
                        {

                              flights?.map((flight, index) => (
                                    <Col xs={12} sm={8} md={6} lg={4} xl={2}>
                                          <Flight key={index} flight={flight}/>
                                    </Col>
                              ))
                        }
                  </Row>
    }

    return content;
}


export default Flights;