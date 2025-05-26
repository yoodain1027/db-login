const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB 연결 완료");
}).catch((err) => {
    console.error("❌ MongoDB 연결 오류:", err);
});

module.exports = mongoose;
