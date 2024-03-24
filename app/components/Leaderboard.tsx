"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([
    {
      username: "No data available",
      time_driven: 0,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setLeaderboardData(data);
        }
        setIsLoading(false);
      });
  };

  useEffect(fetchData, []); // fetch data when the component mounts

  return (
    <>
      <div className="w-full flex flex-col items-center mb-10 gap-5  mx-5">
        <h2 className="self-center text-3xl">Online Leaderboard</h2>
        <button
          onClick={fetchData}
          className="bg-secondary rounded-xl px-4 py-3"
        >
          {isLoading ? "Loading..." : "Refresh"}
        </button>
        <div className="flex justify-center w-full flex-col max-w-xl items-center gap-5">
          <div className="flex justify-evenly w-full max-md:flex-col gap-5">
            {/* <select className="rounded-xl p-2" disabled>
              <option>Choose a car</option>
            </select> */}
            <select className="rounded-xl p-2" disabled>
              <option>Overpass Circuit</option>
            </select>
          </div>
          <div className="flex justify-center w-full">
            <table className="table-auto bg-secondary rounded-xl w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-lg">Name</th>
                  <th className="px-4 py-2 text-lg">Time</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map(
                  (
                    data: { username: string; time_driven: number },
                    index: number
                  ) => {
                    return (
                      <tr key={index} className="group">
                        <td className="border-y border-primary px-4 py-2 group-hover:bg-primary transition-colors">
                          {data.username}
                        </td>
                        <td className="border-y border-primary px-4 py-2 group-hover:bg-primary transition-colors">
                          {data.time_driven}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
