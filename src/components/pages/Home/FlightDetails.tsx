import { useGetFlightQuery } from '../../../features/api/apiSlice';
import { useParams } from 'react-router-dom';
import LoaderFlight from '../../ui/LoaderFlight';
import Error from '../../ui/Error';
import Navigation from './Navigation';
import { Breadcrumb, Layout, Menu, Image, Row, Card, Typography, Skeleton } from 'antd';
import { Col } from 'antd/es/grid';
const { Content, Footer } = Layout;
const { Title, Text } = Typography;

const FlightDetails = () => {
      const {flightId} = useParams();
      const { data: flight, isLoading, isError } = useGetFlightQuery(flightId);

      let content = null;
      if (isLoading){
            content = <LoaderFlight/>
      }
      if (!isLoading && isError){
            content = <Error message="There was an error occured!"/>
      }
      if (!isLoading && !isError && flight?.flight_number) {
            content = <Row>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Image
                                          width="50%"
                                          // height={200}
                                          src={flight?.links?.mission_patch}
                                          fallback={flight?.links?.mission_patch}
                                    />
                              </Col>
                              <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{textAlign: "left"}}>
                                    <Typography>
                                          <Title level={2}>{flight?.mission_name}</Title>
                                          <Text type="secondary">{flight?.details}</Text>
                                          <br />
                                          <Text type="secondary">
                                                <Text strong>Rocket Name: </Text>
                                                { 
                                                      flight?.rocket?.rocket_name 
                                                }
                                          </Text>
                                          <br />
                                          <Text type="secondary">
                                                <Text strong>Timeline: </Text>
                                                { 
                                                      flight?.timeline?.webcast_liftoff 
                                                }
                                          </Text>
                                          <br />
                                          <Text type="secondary"><Text strong>Launch year: </Text>{flight?.launch_year}</Text>
                                          <br />
                                          <Text type="secondary"><Text strong>Launch Date: </Text>{flight?.launch_date_local}</Text>
                                          <br />
                                          <Text type="secondary">
                                                <Text strong>Launch Success: </Text>
                                                { 
                                                      flight?.launch_success === true ?
                                                      <Text type="success">Yes</Text>
                                                      :
                                                      <Text type="danger">No</Text>
                                                }
                                          </Text>
                                          <br />
                                          <Text type="secondary">
                                                <Text strong>Upcomeing: </Text>
                                                { 
                                                      flight?.upcoming === true ?
                                                      <Text type="success">Yes</Text>
                                                      :
                                                      <Text type="danger">No</Text>
                                                }
                                          </Text>
                                          <br />
                                          <Text type="secondary">
                                                <Text strong>Tentative: </Text>
                                                { 
                                                      flight?.is_tentative === true ?
                                                      <Text type="success">Yes</Text>
                                                      :
                                                      <Text type="danger">No</Text>
                                                }
                                          </Text>
                                    </Typography>
                              </Col>
                        </Row>
      }
      return (
            <Layout>
                  <Navigation/>

                  <Content className="site-layout" style={{ padding: '0 50px', height: "100vh" }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                              <Breadcrumb.Item>Flight</Breadcrumb.Item>
                              <Breadcrumb.Item>Flight Number</Breadcrumb.Item>
                              <Breadcrumb.Item>{flightId}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Card>
                              {
                                    content
                              }
                        </Card>
                  </Content>

                  <Footer style={{ textAlign: 'center', background: "#000", color: '#fff', marginTop: '10px' }}>SpaceX ©2023</Footer>
            </Layout>
      );
};

export default FlightDetails;