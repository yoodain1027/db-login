function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.status(401).json({ message: "❌ 로그인이 필요합니다." });
}

module.exports = isAuthenticated;
