import express from "express";
import {
  clearCookie,
  login,
  logout,
  serchMesssage,
  storeMessage,
} from "../controller/controllers.js";

const router = express.Router();

router.post("/login", login);
router.get("/", async (req, res) => { 
  res.send("All right");
});

router.post("/store-message", storeMessage);
router.get("/search-message", serchMesssage);
router.post("/logout", logout);
router.post("/clear", clearCookie);
export default router;
