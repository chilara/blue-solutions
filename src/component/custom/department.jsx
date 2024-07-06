"use client";
import { CircularProgress } from "@chakra-ui/react";
import React, { useContext } from "react";
import Image from "next/image";
import { ApiContext } from "@/context/apiContext";

const Department = () => {
  const { data, loading, value, setValue } = useContext(ApiContext);

  return (
    <div className="flex flex-col gap-4 p-10">
      <div className="w-full flex justify-between items-center  gap-4 mb-8 md:px-12 ">
        <p className="font-medium">Department List</p>
        <select
          name="value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id=""
          style={{
            border: "1px solid var(--Border-bd-dark, #DADAE7)",
            outlineStyle: "none",
          }}
          className="w-100% px-5 py-2 rounded-lg flex gap-1"
        >
          <option value="FragranceX">FragranceX</option>
          <option value="FragranceNet">FragranceNet</option>
          <option value="Morris Costumes">Morris Costumes</option>
        </select>
      </div>
      <div className="flex justify-between bg-[#F0F4FE] items-center p-4 ">
        <div className="flex gap-2 w-[6%]">
          <input type="checkbox" style={{ width: "15px", height: "15px" }} />
          <p className="text-xs font-bold text-[#595959]">S/N</p>
        </div>
        <p className="text-xs font-bold text-[#595959] ml-[-10px] w-[8%]">
          Image
        </p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">SKU</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Name</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Title</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Description</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Brand</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Cost Price</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Quality</p>
        <p className="text-xs font-bold text-[#595959] w-[10%]">Size</p>
      </div>
      <div
        className="bg-white mt-4 px-4 rounded-2xl h-fit mb-16"
        style={{
          padding: "12px 24px 24px 24px 24px",
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
            {data?.length == 0 ? (
              <div className="flex flex-col items-center p-12 mt-20">
                <Image
                  src="/empty-pack.svg"
                  alt="This represents no data found"
                  width={150}
                  height={150}
                />
                <p className="mt-4">No data found</p>
              </div>
            ) : (
              data.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center"
                  style={{
                    boxShadow: "0px 1px 0px 0px #EDEDF2",
                    padding: "20px 0",
                  }}
                >
                  <div className="flex gap-2 items-center w-[5%]">
                    <input
                      type="checkbox"
                      style={{ width: "15px", height: "15px" }}
                    />
                    <p
                      className="text-xml font-semibold"
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
