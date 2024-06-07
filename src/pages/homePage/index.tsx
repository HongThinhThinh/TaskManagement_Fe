import { useEffect, useState } from "react";
import Card from "../../components/card";
import api from "../../config/axios";
import { getCurrentDateTime, getDifTime } from "../../assets/hooks/useGetTime";
import { useStateValue } from "../../assets/context/stateProdiveder";
function HomePage() {
  const { data, setData } = useStateValue();
  
  console.log(getCurrentDateTime());

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/tasks");
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="mt-6">
      <h1>TodoList</h1>
      <div className="flex justify-around gap-1 flex-wrap mr-5 mt-3">
        {data?.map((data) => (
          <Card
            id={data?.id}
            title={data?.title}
            description={data?.description}
            deadline={data?.deadline}
            dateCreate={getDifTime(data?.dateCreate)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
