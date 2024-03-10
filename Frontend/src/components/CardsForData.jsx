import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css'
// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    const [showMore, setShowMore] = useState(false);

    function truncateString(str, numWords) {
      const words = str.split(" ");

      const truncatedWords = words.slice(0, numWords);

      const truncatedString = truncatedWords.join(" ");

      return truncatedString;
    }

    // const originalString =
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const truncatedString = truncateString(item.title, 8);


    return (
      <div class="card">
        <div class="image"></div>
        <div class="content">
          <h5>Topic : {item.topic ? item.topic : "Not Availble"}</h5>
          <p>
            <span class="title">
              Sector - {item.sector ? item.sector : "Not Availble"}
            </span>
          </p>

          {showMore ? (
            <p class="desc">{item.title ? item.title : "Not Availble"}</p>
          ) : (
            `${truncatedString}`
          )}
          {showMore ? (
            <>
              <p class="desc">{item.insight ? item.insight : "Not Availble"}</p>
              <p class="desc">
                {item.published ? item.published : "Not Availble"}
              </p>
              <p class="desc">
                Region : {item.region ? item.region : "Not Availble"}
              </p>
              <p class="desc">
                Country : {item.country ? item.country : "Not Availble"}
              </p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowMore(!showMore);
                }}
                class="desc"
              >
                See Less...
              </p>
            </>
          ) : (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowMore(!showMore);
              }}
              class="desc"
            >
             See More...
            </p>
          )}
          <a target="_blank" href={item.url}>
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
}

export default CardsForData

    {
      /* <Card bg='light' border='dark' style={{ width: '14rem', margin: '1.2rem' }}>
                <Card.Body>
                    <Card.Title>Project Details</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.sector ? item.sector : "Sector"}</Card.Subtitle>
                    <Card.Text className='cardText'>
                        <ul>
                            <li> {item.topic ? item.topic : "No Info"} </li>
                            <li> {item.title ? item.title : "No Info"} </li>
                            <li> {item.insight ? item.insight : "No Info"} </li>
                            <li> {item.url ? item.url : "No Info"} </li>
                            <li> {item.region ? item.region : "No Info"} </li>
                            <li> {item.country ? item.country : "No Info"} </li>
                            <li> {item.source ? item.source : "No Info"} </li>
                            <li> {item.pestle ? item.pestle : "No Info"} </li>
                            <li> {item.start_year ? item.start_year : "No Info"} </li>
                            <li> {item.end_year ? item.end_year : "No Info"} </li>
                            <li> {item.added ? item.added : "No Info"} </li>
                            <li> {item.published ? item.published : "No Info"} </li>
                            <li> {item.intensity ? item.intensity : "No Info"} </li>
                            <li> {item.likelihood ? item.likelihood : "No Info"} </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card> */
    }