function checkLogin(req,res,next){
    const loggedIn = true;
    if (loggedIn){
        next();
    } else {
        res.status(401).send("Please login");
    }
}
app.get("/profile", checkLogin, (req,res) => {
    res.send("Welcome to your profile!");
});