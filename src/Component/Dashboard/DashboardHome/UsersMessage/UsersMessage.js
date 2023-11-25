import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
// import useAuth from '../../../../Hooks/useAuth';
import Tooltip from "@mui/material/Tooltip";

const UsersMessage = () => {
  const [messageData, setMessageData] = useState("");
  const [isLoading, setIsLoading] = useState(0);

  // const {}    = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(1);
    fetch("https://go-travel-server-tau.vercel.app/user/contact/message")
      .then((res) => res.json())
      .then((data) => {
        let rData = data.reverse();
        console.log(data);
        setMessageData(data);
      })
      .finally(() => {
        setIsLoading(0);
      });
  }, []);

  const handleCheck = (e) => {
    // e.preventDefault();
    console.log("handleCheck");
  };

  return (
    <Container maxWidth="lg">
      {isLoading === 1 && (
        <div className="flex justify-center items-center h-screen w-full">
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#57112f"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      <div className="grid grid-cols-1 xl:hidden  md:grid-cols-1 xl:grid-cols-1 py-10">
        {messageData[0]?._id !== undefined &&
          messageData?.map((singleData, i) => (
            <div
              onClick={() =>
                navigate(`/dashboard/users-message/${singleData._id}`)
              }
              className={`${
                singleData?.seen === "seen"
                  ? "font-normal text-smooth-gray"
                  : "font-bold text-pink-black-100"
              } md:flex items-center md:justify-between xl:hidden p-3 bg-white hover:drop-shadow-xl`}
            >
              <div className="md:flex items-center">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <input type="checkbox" name="" value="" />
                    </div>
                    <div>
                      <h3 className=" ml-3 tracking-wider hover:underline hover:cursor-pointer ">
                        {singleData?.name}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:hidden">7 jul 2</p>
                  </div>
                </div>
                <p className="ml-6 text-xs md:text-sm">
                  {singleData.messages.slice(0, 60)}...
                </p>
              </div>
              <p className="hidden md:block text-sm">7 jul 2</p>
            </div>
          ))}
      </div>

      <div className="py-10 hidden xl:block">
        <table className="w-full">
          {messageData[0]?._id !== undefined &&
            messageData?.map((singleData) => (
              <tbody>
                <tr
                  className={` ${
                    singleData?.seen === "seen"
                      ? "font-normal text-smooth-gray"
                      : "font-bold text-pink-black-100"
                  } text-sm  tracking-wider  ml-6 hover:bg-white hover:backdrop-opacity-10 my-6 hover:drop-shadow-md hover:cursor-pointer `}
                >
                  <th className="p-3">
                    <Tooltip title="Select" arrow>
                      <input
                        type="checkbox"
                        onClick={() => handleCheck()}
                        name=""
                        value={singleData._id}
                        className="mr-3 hover:cursor-pointer"
                      />
                    </Tooltip>
                  </th>

                  <td
                    onClick={() =>
                      navigate(`/dashboard/users-message/${singleData._id}`)
                    }
                    className="p-3 my-7 "
                  >
                    {singleData?.name.slice(0, 15)}...
                  </td>

                  <td
                    onClick={() =>
                      navigate(`/dashboard/users-message/${singleData._id}`)
                    }
                    className="p-3"
                  >
                    {singleData?.messages.slice(0, 90)}...
                  </td>

                  <td className="p-3">
                    {singleData?.date?.split(",")[0].split("/")[1] ===
                    new Date().toLocaleDateString().split("/")[1]
                      ? singleData?.date?.split(",")[1]
                      : singleData?.date?.split(",")[0]}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </Container>
  );
};

export default UsersMessage;
