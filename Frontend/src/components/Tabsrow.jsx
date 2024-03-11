import '../App.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import CardsForData from './CardsForData';
import Filters from './Filters';
import { useData } from '../Context/DataContext';

const Tabsrow = ({ data, setMainData }) => {

   const { handleSearchResult, setSearch, limitedData } = useData();

    return (
      <div className="tabsClass">
        <form
          className="form-inline"
          onSubmit={handleSearchResult}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginRight: "1rem" }}
          />
          <button class="btn btn-dark" type="submit">
            Search
          </button>
        </form>
        <Filters data={data} setMainData={setMainData} />

        {limitedData && limitedData.length === 0 ? (
          <div style={{ margin: "1rem" }}>
            <div>Loading...</div>
          </div>
        ) : (
          limitedData &&
          limitedData.length > 0 && (
            <div className="cardDiv">
              {limitedData.map((e, i) => {
                return <CardsForData item={e} key={i} />;
              })}
            </div>
          )
        )}
      </div>
    );
}

export default Tabsrow