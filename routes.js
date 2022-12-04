const express = require("express");
const router = express.Router();
const { registrationRequest, getEmployeeData, loginRequest, deleteRequest, postEmployeeData,updateRequest, getDonutData,postDonut } = require('../controllers/controller.js')

router.get("/api/getEmployee", getEmployeeData);

router.post("/api/EmployeeData", postEmployeeData)

router.post("/api/login", loginRequest)

router.post("/api/registration", registrationRequest);

router.delete("/api/delete/:id", deleteRequest);

router.put("/api/update/",updateRequest);
router.get("/api/donut" , getDonutData);
router.post("/api/postdonut", postDonut);

module.exports = router;