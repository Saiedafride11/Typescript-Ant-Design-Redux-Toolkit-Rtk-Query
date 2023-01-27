import { Card, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;

type FlightProps = { 
      flight: {
            flight_number: number,
            mission_name: string,
            launch_year: string,
            details: string,
            launch_date_local: string | number,
            launch_success: boolean,
            upcoming: boolean,
            links: {
                  mission_patch: string
            },
      }
}

const Flight = ({flight} : FlightProps) => {
      const {flight_number, mission_name, links, launch_year}  = flight;
      const navigate = useNavigate();

      const handleFlightDetails = () => {
            navigate(`/flight/${flight_number}`)
      }
      return (
            <div>
                  <Card onClick={handleFlightDetails} style={{cursor: 'pointer'}}>
                        <Image
                              width="100"
                              height={200}
                              src={links?.mission_patch}
                              fallback={links?.mission_patch}
                        />
                        <Typography>
                              <Title level={5}>{mission_name?.length > 12 ? `${mission_name?.slice(0, 12)}...` : mission_name}</Title>
                              <Text type="secondary">Launch year: {launch_year}</Text>
                        </Typography>
                  </Card>
            </div>
      );
};

export default Flight;