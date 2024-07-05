"use client";
import Navbar from "./navbar";
import Department from "./department";
import React, { useState, useEffect, } from "react";
import { useDebouncedValue } from "@/hooks/debounce";

const Body = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("FragranceX");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebouncedValue(query, 3000);
  const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, [value, debouncedSearch]);

  return (
    <div>
      <Navbar query={query} setQuery={setQuery}/>
      <Department
        data={data}
        loading={loading}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default Body;
