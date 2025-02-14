const express = require("express");
const app = express();
const port = 8080;

// 允許 CORS（可選）
const cors = require("cors");
const path = require("path");
app.use(cors());

// 設定靜態資源目錄
app.use(
  "/assets/carousel",
  express.static(path.join(__dirname, "assets/carousel"))
);

// GET 輪播圖 API
app.get("/carousel", (req, res) => {
  res.json({
    data: [
      `http://localhost:${port}/assets/carousel/01.jpg`,
      `http://localhost:${port}/assets/carousel/02.jpg`,
      `http://localhost:${port}/assets/carousel/03.jpg`,
    ],
  });
});

// GET 關於我們 API
app.get("/about", (req, res) => {
  res.json({
    data: "<p>我們致力於提供最優質的充電服務。</p><p>請查看<span style='color:red' >方案列表</span>了解我們提供的服務與價格</p>",
  });
});

// GET 方案列表 API
app.get("/plans", (req, res) => {
  res.json({
    data: [
      { name: "超快充", price: 200 },
      { name: "快充", price: 100 },
      { name: "慢充", price: 50 },
    ],
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
