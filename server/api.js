const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

// 🔹 회원가입 API
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "❌ 이미 가입된 이메일입니다." });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "✅ 회원가입 성공!" });
    } catch (error) {
        res.status(500).json({ message: "❌ 서버 오류" });
    }
});

// 🔹 로그인 API
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "❌ 회원가입되지 않은 이메일입니다." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "❌ 비밀번호가 틀렸습니다." });

        req.session.user = user;
        res.json({ message: "✅ 로그인 성공!", user });
    } catch (error) {
        res.status(500).json({ message: "❌ 서버 오류" });
    }
});

module.exports = router;
