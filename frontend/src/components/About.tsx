"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8080/api/about")
      .then((res) => res.json())
      .then((data) => {
        console.log("API 回應:", data);
        if (data && typeof data.data === "string") {
          setContent(data.data);
        } else {
          console.error("API 回傳格式錯誤", data);
        }
      })
      .catch((error) => console.error("Error fetching about:", error));
  }, []);

  return (
    <div id="about" className="about">
      <h2>關於我們</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}