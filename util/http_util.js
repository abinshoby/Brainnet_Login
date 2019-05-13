/**
 * This is the util module used by other module.
 */

// Require node url module.
var http_url = require('url');

var fs = require('fs');


/* This function will parse client request query string and passe out related query parameter and value.*/
exports.getUrlParams = function(req, resp){
   
   req.query_url = http_url.parse(req.url, true);
   
   console.log(req.query_url);
   
   req.user_name = req.query_url.user_name;
   
   req.password = req.query_url.password;
   
   req.email = req.query_url.email;
   
   req.mobile_phone = req.query_url.mobile_phone;
   
   req.home_phone = req.query_url.home_phone;
   
}

/* This function will return web page navigation menu html source code. */
exports.pageMenu = function(){

   var ret = '<a href="/">Home</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/register">Register</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/login">Login</a>';
   
   return ret;
}


/* This function will use input parameter to replace place holder in the page template file. */
exports.buildPage = function(page_title, page_menu, page_content){

    
    // fs.readFile('./public/css/login_style.css', 'utf8', function(error, data) {
        
    //     if (error) {
    //         // response.writeHead(404);
    //         // response.write('File not found');
    //         console.log("error css");
    //        global.styledata='';
    //     } else {
    //         // response.write(data);
    //         // ret.replace("{style_}",data,'g');
    //         //console.log(data);
    //         global.styledata+=data;
    //     }
        
    //   });
    //   console.log(global.styledata);
    var styledata="#ti{ text-align:center; margin-top:150px;} form{margin-top:20px;margin-left:600px;display: block;}.user{  display: block;}.pass{margin-top:50px;display: block;} .button{ display: block;margin-top:20px;margin-left: 110px;}#un{    margin-left:20px;}#psw{     margin-left:25px;};";
    var header="<head> <style>"+ styledata+ "</style> <title>Login</title> </head>";
   var page_template = "<html>" +
         header+
         "<body>" +
        
         "{page_content}" +
         
         "</body></html>";
   
   var ret = page_template;
//    ret = ret.replace("{page_title}", page_title, "g");
//     ret = ret.replace("{page_title}", page_title, "g");
    // ret = ret.replace("{page_menu}", page_menu, "g");
    ret = ret.replace("{page_content}", page_content, "g");
   
      
      

   return ret;
      
}
