import React from 'react';
import { Col } from 'antd/es/grid';
import { Row, Skeleton, Card } from 'antd';

const LoaderFlight = () => {
      return (
            <Row>
                  {Array.from(Array(2)).map((_, index) => (
                        <Col xs={24} sm={24} md={12} lg={12} xl={12} key={index}>
                              <Card>
                                    <Skeleton.Input active={true} size="large" style={{width: '100%', height: '250px'}}/>
                              </Card>
                        </Col>
                  ))}
            </Row>
      );
};

export default LoaderFlight;