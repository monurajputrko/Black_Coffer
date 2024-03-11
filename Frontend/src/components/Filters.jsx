
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import { useData } from '../Context/DataContext';
import Buttons from './Buttons';
import AllCharts from '../charts/AllCharts';
import '../App.css'

const Filters = ({ setMainData }) => {

    const { handleReset, handleSelect } = useData();
 
    return (
      <>
        <div
          className="tabsClass"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Year
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Topics
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">consumption</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Sector
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Pest
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Source
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By SWOT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By Country
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="Dropdown" onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter By City
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">2014</Dropdown.Item>
              <Dropdown.Item eventKey="2">2015</Dropdown.Item>
              <Dropdown.Item eventKey="3">2016</Dropdown.Item>
              <Dropdown.Item eventKey="4">2017</Dropdown.Item>
              <Dropdown.Item eventKey="5">2018</Dropdown.Item>
              <Dropdown.Item eventKey="6">2019</Dropdown.Item>
              <Dropdown.Item eventKey="7">2020</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <Button
            variant="danger"
            onClick={handleReset}
            style={{ marginLeft: "1vw", width: "10rem" }}
          >
            Reset Filters
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>
        <Buttons />
        <AllCharts />
      </>
    );
}

export default Filters