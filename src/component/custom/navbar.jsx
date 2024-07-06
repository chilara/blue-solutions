import Image from "next/image";
import "../../app/globals.css";
import { ApiContext } from "@/context/apiContext";
import React, { useContext } from "react";

const Navbar = () => {
  const { query, setQuery } = useContext(ApiContext);

  return (
    <div className="md:flex items-center border-b border-customGray px-5 py-4 gap-24 w-full">
      <Image src={"/logo.svg"} alt="" width={204} height={86} />
      <div className="flex justify-between w-full">
        <div
          className="mt-7 md:mt-0 flex items-center gap-2 p-2 rounded-lg"
          style={{
            border: "1px solid var(--Border-bd-dark, #DADAE7)",
          }}
        >
          <Image src={"/search.svg"} alt="" width={15} height={15} />
          <input
            type="text"
            value={query}
            placeholder="Search by patients..."
            onChange={(e) => setQuery(e.target.value)}
            style={{
              fontSize: "12px",
              color: "#4f5867",
              outlineStyle: "none",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div className="md:flex items-center justify-between gap-2 hidden">
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
