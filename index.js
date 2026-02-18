const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/",(req,res)=>{
res.send ("AeshaHang RAi.. backend is running")
})