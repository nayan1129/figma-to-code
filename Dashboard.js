import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineCaretRight,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { BiLike } from "react-icons/bi";
import { PiUsers } from "react-icons/pi";
import Chart from "react-apexcharts";
import Svgchart from "../Svgchart";

const Dashboard = () => {
  const [state, Setstate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          " ",
          "Week 1",
          " ",
          "Week 2",
          " ",
          "Week 3",
          " ",
          "Week 4",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [100, 240, 345, 250, 449, 360, 170, 291],
      },
      {
        name: "series-2",
        data: [200, 340, 445, 350, 249, 460, 370, 191],
      },
    ],
  });
  return (
    <>
      <div className="dashboard-container">
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="control-search"
            id="search"
            placeholder="Search"
          />
          <AiOutlineSearch className="icon-search" />
          <FaRegBell className="icon-bell" />
          <span className="profile"></span>
        </div>
      </div>
      <div className="info-box">
        <div className="info-box-1" id="box-shape">
          <BsCalendarEventFill id="box-icon" />
          <div id="main-info">
            <p>Total Revenues</p>
            <span>$2,129,430</span>
          </div>
        </div>
        <div className="info-box-2" id="box-shape">
          <GrTransaction id="box-icon" />
          <div id="main-info">
            <p>Total Transactions</p>
            <span>1,520</span>
          </div>
        </div>
        <div className="info-box-3" id="box-shape">
          <BiLike id="box-icon" />
          <div id="main-info">
            <p>Total Likes</p>
            <span>9,721</span>
          </div>
        </div>
        <div className="info-box-4" id="box-shape">
          <PiUsers id="box-icon" />
          <div id="main-info">
            <p>Total Users</p>
            <span>892</span>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-box">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            className='chart-size'
          />
        </div>
      </div>
      <div className="footer-box">
        <div className="footer-box-1">
          <div>
            <p>Top products</p>
            <p className="p-grey">
              May -June 2021 <AiOutlineCaretDown />
            </p>
          </div>
          <div className="footer-box-1-info">
            <Svgchart />
            <div className="svg-data">
              <div className="dots-position-1" id="position-data">
                <span className="dot bg-fill-1"></span>
                <p>Basic Tees</p>
                <span id="span-ss" style={{ right: "90px" }}>
                  55%
                </span>
              </div>
              <div className="dots-position-2" id="position-data">
                <span className="dot bg-fill-2"></span>
                <p>Custom Short Pants</p>
                <span  className="mobile-size s-position">
                  31%
                </span>
              </div>
              <div className="dots-position-3" id="position-data">
                <span className="dot bg-fill-3"></span>
                <p>Super Hoodies</p> 
                <span id="span-ss"  style={{ right: "120px" }}>
                  14%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-box-2">
          <div>
            <p>Today's schedule</p>
            <p className="p-grey">
              See All <AiOutlineCaretRight />
            </p>
          </div>
          <div className="footer-box-2-info">
            <div className="box-info">
              <div className="info-position-1">
                <span>Meeting with suppliers from Kuta Bali</span>
                <span id="s-col">14.00-15.00</span>
                <span id="s-col">at Sunset Road,Kuta Bali</span>
              </div>
              <span
                id="b-line-1"
                style={{ backgroundColor: "lightgreen" }}
              ></span>
              <div className="info-position-2">
                <span>Check operation at Giga Factory 1</span>
                <span id="s-col">18.00-20.00</span>
                <span id="s-col">at Central Jakarta</span>
              </div>
              <span id="b-line-2" style={{ backgroundColor: "#6972C3" }}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
