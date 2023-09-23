/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { MdDeleteOutline } from "react-icons/md";
import {
  downloadHTMLAsFile,
  filterObjectsBeforeDatefunctionfunction,
  removeIdFromObjects,
  sortByTime,
} from "./helper";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function History(props) {
  const HistoryTodoList = JSON.parse(localStorage.getItem("historyList")) || [];
  const [time, setTime] = useState("all_time");
  const currentDate = moment();
  const date = moment();
  const todayDate = moment();
  const previousDay = currentDate.subtract(1, "days");
  const monthAgo = date.subtract(1, "months");
  const weekAgo = todayDate.subtract(7, "days");

  const navigate = useNavigate();
  function onHandleHistoryClick() {
    if (HistoryTodoList.length) {
      {
        time === "last_day" &&
          downloadHTMLAsFile(
            JSON.stringify(
              removeIdFromObjects(
                filterObjectsBeforeDatefunctionfunction(
                  HistoryTodoList,
                  previousDay.format("MMMM Do YYYY, h:mm:ss a")
                )
              )
            ),
            "history.txt"
          );
      }
      {
        time === "last_week" &&
          downloadHTMLAsFile(
            JSON.stringify(
              removeIdFromObjects(
                filterObjectsBeforeDatefunctionfunction(
                  HistoryTodoList,
                  weekAgo.format("MMMM Do YYYY, h:mm:ss a")
                )
              )
            ),
            "history.txt"
          );
      }

      {
        time === "last_month" &&
          downloadHTMLAsFile(
            JSON.stringify(
              removeIdFromObjects(
                filterObjectsBeforeDatefunctionfunction(
                  HistoryTodoList,
                  monthAgo.format("MMMM Do YYYY, h:mm:ss a")
                )
              )
            ),
            "history.txt"
          );
      }
      {
        time === "all_time" &&
          downloadHTMLAsFile(
            JSON.stringify(removeIdFromObjects(HistoryTodoList)),
            "history.txt"
          );
      }
    } else {
      toast.error("No data To DownLoad");
    }
  }
  function onHandleHistoryClearClick() {
    localStorage.removeItem("historyList");
    toast.success("History Deleted Successfully");
    navigate("/");
  }

  function onHandleSwitchClick(e) {
    setTime(e.target.value);
  }
  
  
  return (
    <div className="h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        {HistoryTodoList.length ? (
          <Container>
            <div className=" py-5 px-4 w-full">
              <div className="flex items-center fixed right-5 justify-end space-x-3 mb-6">
                <select
                  onChange={onHandleSwitchClick}
                  className=" bg-[#002D62] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-white p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="all_time">All Time</option>
                  <option value="last_month">Last Month</option>
                  <option value="last_week">Last Week</option>
                  <option value="last_day">Last Day</option>
                </select>
                <button
                  onClick={onHandleHistoryClick}
                  className=" text-base px-2 py-2 border bg-[#002D62] text-white  hover:bg-[#00538C] shadow-lg rounded-lg"
                >
                  Download History
                </button>{" "}
                <button
                  onClick={onHandleHistoryClearClick}
                  className=" text-base px-2 py-2 border bg-[#002D62] text-white flex items-center  hover:bg-[#00538C] shadow-lg rounded-lg"
                >
                  Delete History <MdDeleteOutline size={25} />
                </button>{" "}
              </div>
              {sortByTime(HistoryTodoList).map((i) => (
                <div
                  key={i.id}
                  className="border-2 border-[#002D62] shadow-2xl mb-4 flex  flex-col rounded-lg text-white bg-[#002D62] w-max px-8 py-2"
                >
                  <div className="flex space-x-2 ">
                    <div className=" flex flex-col items-end">
                      <h1 className="text-xl">Title:</h1>
                      <h1 className="text-xl">Done Status:</h1>
                      <h1 className="text-xl">Created On:</h1>
                    </div>
                    <div className=" flex flex-col items-start">
                      <h1 className="text-lg">{i.title}</h1>
                      <h1 className="text-lg">{i.done.toString()}</h1>
                      <h1 className="text-lg">{i.time}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        ) : (
          <div className="mt-64 mx-auto ">No History is Available</div>
        )}
      </div>
    </div>
  );
}
export default History;
