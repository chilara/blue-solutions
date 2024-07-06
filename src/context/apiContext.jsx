"use client";
import React, { createContext, useState, useEffect, useCallback } from "react";
import { useDebouncedValue } from "@/hooks/debounce";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [value, setValue] = useState("FragranceX");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
  
    const debouncedSearch = useDebouncedValue(query, 2000);
    const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
  
    const fetchData = useCallback (async () => {
      try {
        setLoading(true);
        const url = `${baseUrl}/products/public/catalog?supplier=${value}&first=0&last=50&search=${debouncedSearch}`;
        const allList = await fetch(url);
        const response = await allList.json();
        console.log(response);
        setData(response); 
      
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },[value, debouncedSearch,]);


    useEffect(() => {
      fetchData();
    }, [fetchData]);

  return <ApiContext.Provider value={{ data, loading, query, setQuery, value, setValue,  }}>{children}</ApiContext.Provider>;
};


