import { Button, Select, Space } from "antd";
import Input from "../input";
import "./index.scss";
import { useState } from "react";
import api from "../../config/axios";
import { getCurrentDateTime } from "../../assets/hooks/useGetTime";
import { toast } from "react-toastify";
import { useStateValue } from "../../assets/context/stateProdiveder";

function Form({ isOpen = false, setIsOpen }) {
  const [deadline, setDeadline] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data, setData } = useStateValue();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setDeadline(value);
  };
  const handleCreateTask = async () => {
    const response = await api.post("/tasks", {
      date: getCurrentDateTime(),
      title: title,
      description: description,
      deadline: deadline,
    });
    console.log(response.data);
    setData([...data, response.data]);
    setIsOpen(false);
    toast.info("Task created successfully!!!");
  };
  return (
    <div className="form  ">
      <div id="card" className={`card  ${isOpen && "active"}`}>
        <div className="content ">
          <Input onChange={(e) => setTitle(e.target.value)} title="Title" />
          <Input
            onChange={(e) => setDescription(e.target.value)}
            title="Description"
          />
          <div className="mt-4">
            <p className="text-center mt-2">How urgent is your deadline?</p>
            <div className="mt-3 flex gap-3">
              <Space wrap>
                <Select
                  className="w-full ml-2"
                  defaultValue="Urgent"
                  style={{ width: 200 }}
                  onChange={handleChange}
                  options={[
                    { value: "Urgent", label: "Urgent" },
                    {
                      value: "Within the next month",
                      label: "Within the next month",
                    },
                    { value: "Not urgent", label: "Not urgent" },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="submit ">
            <div className="btn1 ">
              <button onClick={handleCreateTask}>
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Submit</span>
              </button>
            </div>
            <div className="btn2">
              <button
                id="noselect"
                className="noselect"
                onClick={() => setIsOpen(false)}
              >
                <span className="text">Exit</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
