"use client";
import React, { createContext, useState, useEffect } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [value, setValue] = useState("FragranceX");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
  const url = `${baseUrl}/products/public/catalog?supplier=${value}&first=0&last=50`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allList = await fetch(url);
        const response = await allList.json();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [value]);
  return <ApiContext.Provider value={{data, loading, value, setValue}}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiProvider };
