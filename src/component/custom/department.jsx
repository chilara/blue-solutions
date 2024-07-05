"use client";
import { CircularProgress } from "@chakra-ui/react";
// import { ApiContext } from "@/context/apiContext";
// import { useContext } from "react";
import React, { useState, useEffect } from "react";

const Department = ({ data, loading, value, setValue }) => {
  // const { data, loading, value, setValue } = useContext(ApiContext)

  return (
    <div className="flex flex-col gap-4 p-10">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <p className="">Department List</p>
        <select
          name="value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id=""
          style={{
            border: "1px solid var(--Border-bd-dark, #DADAE7)",
            padding: "8px 20px",
            borderRadius: "8px",
            display: "flex",
            gap: "5px",
            width: "264px",
            display: "flex",
            outlineStyle: "none",
          }}
        >
          <option value="FragranceX">FragranceX</option>
          <option value="FragranceNet">FragranceNet</option>
          <option value="Morris Costumes">Morris Costumes</option>
        </select>
      </div>
      <div
        className="flex justify-between bg-[#F0F4FE]"
        style={{
          backgroundColor: "#F0F4FE",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px", width: "6%" }}>
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
          <p style={{ fontSize: "12px", color: "#595959", fontWeight: "bold" }}>
            S/N
          </p>
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            marginLeft: "-10px",
            width: "8%",
          }}
        >
          Image
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          SKU
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Name
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Title
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Description
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Brand
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Cost Price
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Quality
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "#595959",
            fontWeight: "bold",
            width: "10%",
          }}
        >
          Size
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          marginTop: "1rem",
          padding: "12px 24px 24px 24px 24px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          borderRadius: "14px",
          height: "fit-content",
          marginBottom: "5rem",
        }}
      >
        {loading ? (
          <CircularProgress
            isIndeterminate
            color="#5795F7"
            thickness="10px"
            size="40px"
            style={{ marginTop: "12rem", marginLeft: "50%" }}
          />
        ) : (
          <div>
            {data.length == 0 ? (
              <p>no data found</p>
            ) : (
              data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0px 1px 0px 0px #EDEDF2",
                    padding: "20px 0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "9px",
                      alignItems: "center",
                      width: "5%",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    />
                    <p
                      className="text-xml font-semibold mb-2"
                      style={{ fontSize: "12px" }}
                    >
                      {index + 1}.
                    </p>
                  </div>
                  <div style={{ width: "7%" }}>
                    <img src={item.Image_1} width={40} height={40} />
                  </div>

                  <p
                    style={{
                      fontSize: "12px",
                      width: "5%",
                      textAlign: "left",
                      width: "10%",
                    }}
                  >
                    {item.SKU}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      width: "5%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "10%",
                      textAlign: "left",
                    }}
                  >
                    {item.Name || "N/A"}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      width: "10%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.Title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      width: "10%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.Description}
                  </p>
                  <p style={{ fontSize: "12px", width: "10%" }}>
                    {item.Brand || "N/A"}
                  </p>
                  <p style={{ fontSize: "12px", width: "10%" }}>
                    {item["Cost Price"]}
                  </p>
                  <p style={{ fontSize: "12px", width: "10%" }}>
                    {item.Quantity}
                  </p>
                  <p style={{ fontSize: "12px", width: "10%" }}>
                    {item.size || "N/A"}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Department;
