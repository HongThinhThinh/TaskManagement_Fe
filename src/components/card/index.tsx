import { TagsOutlined } from "@ant-design/icons";
import { Button } from "antd";
import api from "../../config/axios";
import { useStateValue } from "../../assets/context/stateProdiveder";
import { toast } from "react-toastify";

function Card({ id, title, description, deadline, dateCreate }) {
  const { data, setData } = useStateValue();  
  console.log(id);
  const handleDone = async () => {
    try {
      const response = await api.put(`tasks/done/${id}`);
      console.log(response.data);
      setData(data.filter((data) => data.id != id));
      toast.success("Done!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-fit border border-solid border-white rounded-sm h-fit px-7 py-3 relative mt-9 mr-9">
      <div className="absolute top-[-10px] right-[-20px] bg-red-500 rounded-sm text-[12px] p-[2px] flex justify-center items-center gap-1">
        <TagsOutlined />
        Important
      </div>
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <h3>{dateCreate}</h3>
      </div>
      <div className="w-[140px]">
        <p className="text-center break-words py-3">{description}</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button type="primary">Update</Button>
        <Button
          onClick={handleDone}
          style={{ background: "green", color: "white" }}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default Card;
