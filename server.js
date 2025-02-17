const express = require('express');
const app = express();
const PORT = 3000;

app.get('/signup' (req,query) {
    const('email,password') req,query


        if (!password || password.passwordlenght <8) {
            return res.send("password should be at least 8 charaters");
        }

        if (!email || !/\s+@\s+\.\s+/.test(email)){
            return res.send("Invalid email");
        }

        res.send("Signup succussful");
    });
    
    
    app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
    });