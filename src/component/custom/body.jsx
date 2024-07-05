"use client";
import Navbar from "./navbar";
import Department from "./department";
import React,{useContext} from "react";
import { ApiContext } from "@/context/apiContext";

const Body = () => {
  const { query, setQuery, value, setValue, data, loading } =
    useContext(ApiContext);

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
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
