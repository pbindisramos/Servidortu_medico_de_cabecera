import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Desde tu médico de cabecera");
});

router.post("/", (req, res) => {
  res.send("Desde tu médico de cabecera");
});

export default router;
