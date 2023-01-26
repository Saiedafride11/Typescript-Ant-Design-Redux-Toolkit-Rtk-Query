import React from 'react';
import { Col } from 'antd/es/grid';
import { Row, Skeleton, Card } from 'antd';

const LoaderFlights = () => {
      return (
            <Row>
                  {Array.from(Array(100)).map((_, index) => (
                        <Col xs={12} sm={8} md={6} lg={4} xl={4} key={index}>
                              <Card>
                                    <Skeleton.Input active={true} size="large" style={{width: '100%', height: '280px'}}/>
                              </Card>
                        </Col>
                  ))}
            </Row>
      );
};

export default LoaderFlights;