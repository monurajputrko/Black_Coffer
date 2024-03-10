import axios from 'axios';
import React, { createContext,useContext, useEffect, useState } from 'react'


export const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [mainData, setMainData] = useState("");
    const [ChangeChart, setChangeChart] = useState("BarChart");
    const [search, setSearch] = useState("");
    const [limit, setLimit] = useState(1000);
    const limitedData = mainData.slice(0, limit);

  const handleReset = async () => {
    try {
      const response = await axios.get("https://coffbackend.vercel.app");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getDataFromDB = async () => {
    try {
      const response = await axios.get("https://coffbackend.vercel.app");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
    };
    
      const handleSelect = (eventKey, event) => {
        getDataFromDBwithYear(event.target.innerText);
      };
      const getDataFromDBwithYear = async (year) => {
        try {
          const response = await axios.get(
            `https://coffbackend.vercel.app/year/${year}`
          );
          setMainData(response.data.data);
        } catch (e) {
          console.log(e);
        }
    };
    
    //////
       
       const handleSearchResult = async (e) => {
         e.preventDefault();
         try {
           const response = await axios.get(
             `https://coffbackend.vercel.app/any/${search}`
           );
           setMainData(response.data.data);
           setSearch("");
         } catch (e) {
           console.log(e);
         }
       };
    ////

  useEffect(() => {
    getDataFromDB();
  }, []);

  useEffect(() => {
    console.log(mainData.length);
  }, [mainData]);

  return (
    <DataContext.Provider value={{ mainData, setMainData,handleReset,ChangeChart,setChangeChart,handleSelect,getDataFromDBwithYear,handleSearchResult,search,setSearch,limit,setLimit,limitedData }}>
      {children}
    </DataContext.Provider>
  );
}

