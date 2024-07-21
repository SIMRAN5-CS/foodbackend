// console.log("hi")
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hellooow");
});

app.get("/api/restaurants", (req, res) => {
  const { lat, lng } = req.query;
  const url = https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING;

   fetch(url, {
      headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*",
         "User-Agent":
         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
   })
   .then((response) => {
      if (!response.ok) {
      throw new Error("Network response was not ok");
      }
      return response.json();
   })
   .then((data) => {
      res.json(data);
   })
   .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
   });
});

app.get("/api/restaurants/bodyfirstpart", (req, res) => {
   const { lat, lng } = req.query;
   const url = https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING;
 
    fetch(url, {
       headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
       },
    })
    .then((response) => {
       if (!response.ok) {
       throw new Error("Network response was not ok");
       }
       return response.json();
    })
    .then((data) => {
       res.json(data);
    })
    .catch((error) => {
       console.error(error);
       res.status(500).send("An error occurred");
    });
 });

 app.get("/api/restaurants/bodyfirstsection", (req, res) => {
   const { lat, lng } = req.query;
   const url = https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING;
 
    fetch(url, {
       headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
       },
    })
    .then((response) => {
       if (!response.ok) {
       throw new Error("Network response was not ok");
       }
       return response.json();
    })
    .then((data) => {
       res.json(data);
    })
    .catch((error) => {
       console.error(error);
       res.status(500).send("An error occurred");
    });
 }); 

 app.get("/api/restaurants/Menu", (req, res) => {
   const { lat, lng , resId} = req.query;
   console.log(req.query);
   const url = https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId};
 
    fetch(url, {
       headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
       },
    })
    .then((response) => {
       if (!response.ok) {
       throw new Error("Network response was not ok");
       }
       return response.json();
    })
    .then((data) => {
       res.json(data);
    })
    .catch((error) => {
       console.error(error);
       res.status(500).send("An error occurred");
    });
 });

 
app.get("/api/restaurants/Foodtype/resCollcetion", (req, res) => {
   const { lat, lng , foodId} = req.query;
   const url = https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&collection=${foodId}&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null;
 
    fetch(url, {
       headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
       },
    })
    .then((response) => {
       if (!response.ok) {
       throw new Error("Network response was not ok");
       }
       return response.json();
    })
    .then((data) => {
       res.json(data);
    })
    .catch((error) => {
       console.error(error);
       res.status(500).send("An error occurred");
    });
 });
 
 

 
app.listen(3001, () => {
  console.log("Server Running on port http://localhost:3001");
});