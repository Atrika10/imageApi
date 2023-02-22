const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

// get api data
const apidata = require("./data.json");
const apiObj = apidata;


// for getting random index number 
const idx = Math.floor(Math.random()*12);


app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});
app.get('/api', (req, res)=>{
    const imageUrl = apiObj[idx].image;
    const title = apiObj[idx].title;

    const html = `
    <html>
        <head>
        </head>
            <body>
             <div>
                <h2> ${title}  <button type="button"> <a href="/"> home </a></button> 
                <button type="button" onclick="location.reload()"> Get an Image</button>
                </h2>
                 </div>
                <img src="${imageUrl}" alt="Image">
            </body>
    </html>        
        `;
        res.send(html);
});




// start the server
app.listen(port, ()=>{
    console.log("port is running");
    console.log(apiObj[0].image);
    console.log(idx);
});