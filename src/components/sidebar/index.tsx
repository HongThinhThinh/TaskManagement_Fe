import { RxDashboard } from "react-icons/rx";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import "./index.scss";
import Light from "../light";
import Form from "../form";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-9">
      <div className="sideBar flex justify-center items-center flex-col">
        <div className="mb-7">
          <Light />
        </div>
        <div>
          <ul>
            <li>
              <span>
                <IoHomeOutline />
              </span>
              Home
            </li>
            <li>
              <span>
                <RxDashboard />
              </span>
              Dashboard
            </li>
            <li>
              <span>
                <FaTasks />
              </span>
              Tasks
            </li>
            <li>
              <span>
                <IoSettingsOutline />
              </span>
              Setting
            </li>
          </ul>
        </div>

        <div className="toDo__left__box">
          <img src={logo} alt="" />
          <p>You can add more tasks for your daily routine.</p>
          <button
            id="button"
            className="button"
            onClick={() => setIsOpen(true)}
          >
            <span>+ Add Task</span>
          </button>
        </div>
        <Form setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Sidebar;
