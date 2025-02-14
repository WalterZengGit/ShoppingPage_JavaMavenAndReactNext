"use client";

import { useEffect, useState } from "react";

interface Plan {
  name: string;
  price: number;
}

export default function Plans() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/plans")
      .then((res) => res.json())
      .then((data) => {
        console.log("API 回應:", data);
        if (data && Array.isArray(data.data)) {
          setPlans(data.data);
        } else {
          console.error("API 回傳格式錯誤", data);
        }
      })
      .catch((error) => console.error("Error fetching plans:", error));
  }, []);

  return (
    <div id="plans" className="plans">
      <h2>方案列表</h2>
      <ul>
        {plans.length > 0 ? (
          plans.map((plan, index) => (
            <li key={index}>
              {plan.name} - {plan.price} TWD/kWh
            </li>
          ))
        ) : (
          <p>載入中...</p>
        )}
      </ul>
    </div>
  );
}