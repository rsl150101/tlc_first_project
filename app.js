const express = require("express");
const globalRouter = require("./routes/global.router")

const app = express();
const PORT = 5000;

//* 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

//* 라우터 미들웨어 적용
app.use("/",globalRouter)

app.listen(PORT, () => {
  console.log(`✅ 서버가 열렸습니다! http://localhost:${PORT}`);
});
