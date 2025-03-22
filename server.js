require("dotenv").config();
const express=require("express")
const bodyparser=require("body-parser")
const path=require("path")

const app=express()
const PORT=process.env.PORT || 6001


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"public")))


app.use(bodyparser.urlencoded({extended:true}))
//Routes

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/login",(req,res)=>{
    const { username, password}=req.body
    res.send(`Login successfully!! UserName:${username}`)
})

app.post("/signup",(req,res)=>{
    const { name,email,password,confirmPassword}=req.body
    res.send(`signup completed!! email:${username}`)
})

app.listen(PORT,()=>{
    console.log(`server is running on: ${PORT} `)
})