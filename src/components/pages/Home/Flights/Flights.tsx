import { useEffect, useState } from 'react';
import { Col } from 'antd/es/grid';
import { Input, Select, Space, Row, Button } from 'antd';
import { useGetFlightsQuery } from '../../../../features/api/apiSlice';
import Flight from './Flight';

type FlightProps = { 
      flight: {
            flight_number: number,
            mission_name: string,
            launch_year: string,
            details: string,
            upcoming: boolean,
            links: {
                  mission_patch: string
            },
      }
}
const LaunchDate = ['Last Week', 'Last Month', 'Last Year'];
const LaunchStatus = ['Failure', 'Success'];
const upcoming = ['Yes', 'No'];

const Flights = () => {
      const { data: flights, isLoading, isError } = useGetFlightsQuery();
      const [displayProducts, setDisplayProducts] = useState<string[]>([]);

      // useEffect(() => {
      //       let flights:any;
      //       console.log("displayProducts", flights)
      //       if(displayProducts?.length === 0){
      //             setDisplayProducts(flights);
      //       }
      // },[flights])

      // console.log("displayProducts", displayProducts)

      const { Search } = Input;
      const onSearch = (value: string) => {
            const matchedProducts:any = flights?.filter(flight => flight?.rocket?.rocket_name.toLowerCase().includes(value.toLowerCase()));
            setDisplayProducts(matchedProducts);
      };

      const handleProvinceChange = () => {
      //   setCities(cityData[value]);
      //   setSecondCity(cityData[value][0]);
      };


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
                                    <Col xs={12} sm={8} md={6} lg={4} xl={4} key={index}>
                                          <Flight flight={flight}/>
                                    </Col>
                              ))
                        }
                  </Row>
    }

    return (
      <>
            <Space direction="vertical">
                  <Search
                        placeholder="Search here..."
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        style={{marginBottom: "20px"}}
                  />
            </Space>

            <br />

            <Space wrap style={{marginBottom: "20px"}}>

                  <Select
                        defaultValue="Launch Date"
                        style={{ width: 120 }}
                        onChange={handleProvinceChange}
                        options={LaunchDate.map((date) => ({ label: date, value: date }))}
                  />

                  <Select
                        defaultValue="Launch Status"
                        style={{ width: 120 }}
                        onChange={handleProvinceChange}
                        options={LaunchStatus.map((status) => ({ label: status, value: status }))}
                  />

                  <Select
                        defaultValue="Upcoming"
                        style={{ width: 120 }}
                        onChange={handleProvinceChange}
                        options={upcoming.map((data) => ({ label: data, value: data }))}
                  />

                  <Button type="primary" danger onClick={() => setDisplayProducts([])}>Clear Filter</Button>
            </Space>

            {
                  content
            }
      </>
    );
}


export default Flights;