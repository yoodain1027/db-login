const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
    secret: "super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 } // 1시간 동안 로그인 유지
}));

// 🔥 라우트 등록
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.listen(5000, () => console.log("✅ 서버 실행 중 (http://localhost:5000)"));
