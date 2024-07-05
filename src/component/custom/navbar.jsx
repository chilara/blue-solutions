import React from "react";
import Image from "next/image";
import "../../app/globals.css"

const Navbar = () => {
  return (
    <div
      className="flex items-center border-b border-customGray h-32 "
      style={{
        padding: "16px 20px",
        borderBottom: "1px solid #E6EAEE",
        gap: "6rem",
        display:"flex",
        width:"100%"
        
      }}
    >
      <Image src={"/logo.svg"} alt="" width={204} height={86} />
      <div
        className="flex items-center"
        style={{ justifyContent: "space-between", width: "1188px", display:"flex" }}
      >
        {/* <div
          className="bg-white flex items-center"
          style={{
            border: "1px solid var(--Border-bd-dark, #DADAE7)",
            padding: "8px 20px",
            borderRadius: "8px",
            display:"flex",
            gap:"5px",
            width:"264px"
          }}
        >
          <Image src={"/search.svg"} alt="" width={15} height={15} />
          <p style={{fontSize:"12px", color:"#4f5867"}}>Search by patients...</p>
        </div> */}
        <div
          className=" flex items-center justify-center bg-gray-100"
          style={{
            border: "1px solid var(--Border-bd-dark, #DADAE7)",
            padding: "2px 20px",
            borderRadius: "8px",
            display: "flex",
            gap: "5px",
            width: "264px",
            display:"flex"
          }}
        >
          <Image src={"/search.svg"} alt="" width={15} height={15} />
          <input
            type="text"
            // class="w-64 border placeholder-[#4f5867] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search by patients..."
            style={{ fontSize: "12px", color: "#4f5867", outlineStyle: "none" }}
          />
        </div>
        <div
          className="flex items-center"
          style={{ width: "155px", gap: "10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}
        >
          <Image src={"/notification.svg"} alt="" width={24} height={24} />
          <Image src={"/avatar.svg"} alt="" width={37} height={36} />
          <p style={{ color: "#45464B", fontSize: "14px", fontWeight: "bold" }}>
            Deko
          </p>
          <Image src={"/arrow-down.svg"} alt="" width={7} height={13} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
