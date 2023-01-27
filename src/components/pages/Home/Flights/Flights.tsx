import { useState } from 'react';
import { Col } from 'antd/es/grid';
import { Input, Select, Space, Row, Button, Card } from 'antd';
import { useGetFlightsQuery } from '../../../../features/api/apiSlice';
import Flight from './Flight';
import LoaderFlights from '../../../ui/LoaderFlights';
import Error from '../../../ui/Error';

let LaunchDate: string[];
LaunchDate = ['Last Week', 'Last Month', 'Last Year'];

let LaunchStatus: string[];
LaunchStatus = ['Failure', 'Success'];

let IsUpcoming: string[];
IsUpcoming = ['Yes', 'No'];

const Flights = () => {
      const { data: flights, isLoading, isError } = useGetFlightsQuery();
      const [filterFlights, setFilterFlights] = useState([]);

      const [searchNoResult, setSearchNoResult] = useState(false);
      const [launch, setLaunch] = useState("Launch Date");
      const [status, setStatus] = useState("Launch Status");
      const [upcoming, setUpcoming] = useState("Upcoming");

      const { Search } = Input;
      const onSearch = (value: string) => {
            const matchedFlights:any = flights?.filter(flight => flight?.rocket?.rocket_name.toLowerCase().includes(value.toLowerCase()));
            setFilterFlights(matchedFlights);
            matchedFlightFunc(matchedFlights);
            setLaunch("Launch Date");
            setStatus("Launch Status");
            setUpcoming("Upcoming");
      };

      const onChange = (value: string, name: string) => {
            if(name === "Launch Date"){
                  setLaunch(value);
                  setStatus("Launch Status");
                  setUpcoming("Upcoming");

                  let day:number;
                  if(value === "Last Week"){
                        day = 7
                  }
                  else if(value === "Last Month"){
                        day = 30
                  }
                  else if(value === "Last Year"){
                        day = 365
                  }

                  const matchedFlights:any = flights?.filter(flight => (
                        ( Math.ceil(( new Date().getTime() - new Date(flight?.launch_date_local).getTime()) / (1000 * 60 * 60 * 24))) <= day
                  ))

                  setFilterFlights(matchedFlights);
                  matchedFlightFunc(matchedFlights);
            }
            else if(name === "Launch Status"){
                  setStatus(value);
                  setLaunch("Launch Date");
                  setUpcoming("Upcoming");

                  let statue:boolean;
                  if(value === "Failure"){
                        statue = false
                  }
                  else if(value === "Success"){
                        statue = true
                  }

                  const matchedFlights:any = flights?.filter(flight => flight?.launch_success === statue);
                  setFilterFlights(matchedFlights);
                  matchedFlightFunc(matchedFlights);
            }
            else if(name === "Upcoming"){
                  setUpcoming(value);
                  setLaunch("Launch Date");
                  setStatus("Launch Status");

                  let coming:boolean;
                  if(value === "Yes"){
                        coming = false
                  }
                  else if(value === "No"){
                        coming = true
                  }

                  const matchedFlights:any = flights?.filter(flight => flight?.upcoming === coming);
                  setFilterFlights(matchedFlights);
                  matchedFlightFunc(matchedFlights);
            }
      };

      const matchedFlightFunc = (matchedFlights: string[]) => {
            if(matchedFlights?.length === 0){
                  setSearchNoResult(true);
            }
            else{
                  setSearchNoResult(false);
            }
      }

      const handleClearFilter = () => {
            setFilterFlights([]);
            setLaunch("Launch Date");
            setStatus("Launch Status");
            setUpcoming("Upcoming");
            setSearchNoResult(false);
      }


    let content = null;
    if (isLoading){
        content = <LoaderFlights/>
    }
    if (!isLoading && isError){
        content = <Error message="There was an error occured!"/>
    }
    if (!isLoading && !isError && flights?.length === 0) {
        content = <p>No Data found!</p>
    }
    if (!isLoading && !isError && filterFlights?.length > 0) {
        content = <Row>
                        {

                              filterFlights?.map((flight, index) => (
                                    <Col xs={12} sm={8} md={6} lg={4} xl={4} key={index}>
                                          <Flight flight={flight}/>
                                    </Col>
                              ))
                        }
                  </Row>
    }
    if (!isLoading && !isError && filterFlights?.length === 0 && flights?.length || 0 > 0 ) {
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
    if (!isLoading && !isError && searchNoResult === true ) {
      content = <Card style={{width: '100%', height: '80vh'}}>
                        <p>Search results not found!</p>
                </Card>
  }

    return (
      <>
            <Space direction="vertical">
                  <Search
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        placeholder="Search here..."
                        style={{marginBottom: "20px"}}
                  />
            </Space>

            <br />

            <Space wrap style={{marginBottom: "20px"}}>

                  <Select
                        style={{ width: 120 }}
                        value={launch}
                        onChange={(e) => onChange(e, "Launch Date")}
                        options={LaunchDate.map((data) => ({ label: data, value: data }))}
                  />

                  <Select
                        style={{ width: 120 }}
                        value={status}
                        onChange={(e) => onChange(e, "Launch Status")}
                        options={LaunchStatus.map((data) => ({ label: data, value: data }))}
                  />

                  <Select
                        style={{ width: 120 }}
                        value={upcoming}
                        onChange={(e) => onChange(e, "Upcoming")}
                        options={IsUpcoming.map((data) => ({ label: data, value: data }))}
                  />

                  <Button type="primary" danger onClick={handleClearFilter}>Clear Filter</Button>
            </Space>

            {
                  content
            }
      </>
    );
}


export default Flights;




// To set two dates to two variables
// const todayDate = new Date();
// const thatDate = new Date("2020-08-29T07:40:05.000Z");
// const Difference_In_Time = todayDate.getTime() - thatDate.getTime();
// const diffDays = Math.ceil(Difference_In_Time / (1000 * 60 * 60 * 24));
// console.log(diffDays + " days");