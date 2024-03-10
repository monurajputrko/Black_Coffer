import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

//import from files
import Header from './components/Header';
import Tabsrow from './components/Tabsrow';


function App() {
    //state to save data received from the server
    const [mainData, setMainData] = useState([]);    
    //asynchronous function to fetch data from server and updating the state
    const getDataFromDB = async() => {
        try{
            const response = await axios.get("https://coffbackend.vercel.app");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    //calling the above function on first render
    useEffect(()=>{
        getDataFromDB();
    },[])
    //where a state is updated, we will print the length of data received just for the test purposes
    useEffect(()=>{
      console.log(mainData.length)
    },[mainData])

  return ( 
    <div>
      <Header/>
      <Tabsrow data={mainData} setMainData={setMainData} />
      {/* <Tabsrow /> */}
    </div>
  );
}

export default App;
