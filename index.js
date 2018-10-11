// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//
//
// app.use(express.static(path.join(__dirname, "/public/")));
//
// require("./controllers/controllers.js")(app);
//
//
// app.listen(PORT);


const Launcher = require('./core/Launcher');
const site = new Launcher();

site.run().then(()=>{
    console.log("==============================================================");
    console.log("        .   ,   ,                                /\\          ");
    console.log("          ` .'                                  /  \\  /\\     ");
    console.log("          \\  /      ________[_]________      /\\/    \\/  \\    ");
    console.log("           }{      /\\        ______    \\    /   /\\/\\  /\\/\\   ");
    console.log("          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\  ");
    console.log("   /\\    / /\\/\\  //___\\       \\__/  \\    \\/                  ");
    console.log("  /  \\  /\\/    \\//_____\\       \\ |[]|     \\                  ");
    console.log(" /\\/\\/\\/       //_______\\       \\|__|      \\                 ");
    console.log("/      \\      /XXXXXXXXXX\\                  \\                ");
    console.log("        \\    /_I_II  I__I_\\__________________\\               ");
    console.log("               I_I|  I__I_____[]_|_[]_____I                  ");
    console.log("               I_II  I__I_____[]_|_[]_____I                  ");
    console.log("               I II__I  I     XXXXXXX     I                  ");
    console.log("            ~~~~~'   '~~~~~~~~~~~~~~~~~~~~~~~~               ");
    console.log("==============================================================");
    console.log(`|      Application listening on PORT ${site.config.port}`);
    console.log("==============================================================");
}).catch((err)=>{
    console.log(err);
});
