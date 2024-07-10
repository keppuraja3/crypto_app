import React, { useEffect, useState } from "react";
// import { CoinList } from "../config/api";
import axios from "axios";

function CoinsList() {
  const [list, setList] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [perPage, setPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  // Calling on page loading
  useEffect(() => {
    getList();
  }, []);

  // Calling on change the variables
  useEffect(() => {
    getList();
  }, [pageNo, currency, perPage]);

  const getList = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${pageNo}&sparkline=false`
      )
      .then((res) => {
        // console.log(res);
        setList(res.data);
      });
  };
  return (
    <>
      <h1 className=" text-center text-uppercase text-warning">
        Crypto Coins List
      </h1>
      <div className=" text-center">
        <button
          onClick={() => {
            pageNo > 1 && setPageNo(pageNo - 1);
          }}
          className=" btn btn-primary m-1"
        >
          pre
        </button>
        <label className=" badge bg-info p-3 m-1 text-black">{pageNo}</label>
        <button
          onClick={() => {
            setPageNo(pageNo + 1);
          }}
          className=" btn btn-primary m-1"
        >
          next
        </button>
      </div>

      <div className=" d-grid container">
        {list.map((data, index) => (
          <div
            key={index}
            className="p-3 d-flex fs-2 m-2 rounded-5 bg-dark shadow-lg border border-light-subtle justify-content-between align-items-center"
          >
            <div>
              <img className=" m-2" src={data.image} alt={data.id} width={50} />
              <span className=" text-capitalize">{data.id}</span>
            </div>
            <span className=" text-warning">{data.current_price}</span>
            {data.market_cap_change_percentage_24h > 0 ? (
              <span className=" text-success">Up</span>
            ) : (
              <span className=" text-danger">Down</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default CoinsList;
