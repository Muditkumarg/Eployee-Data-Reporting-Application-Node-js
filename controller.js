
const { userData, empData } = require("../model/user.js");

const mongoose = require("mongoose");
const e = require("express");

const getEmployeeData = (req, res) => {
    empData.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}
const postEmployeeData = async (req, res) => {
    try {
        const { name, email, phone, address, department, company } = req.body;
        const emp = new empData({
            name: name,
            email: email,
            phone: phone,
            address: address,
            department: department,
            company: company
        })
        await emp.save().then((data) => {
            res.json({ message: "successfully insert", success: true, result: data });
        })
    }
    catch (err) {
        res.json({ message: "Please fill the all detail", success: false });
    }
}
const registrationRequest = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, conpassword } = req.body;
        const user = new userData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            conpassword: conpassword
        })
        await user.save().then((data) => {
            res.json({ message: "Sign Up successfully", success: true, result: data });
        })
    }
    catch (err) {
        res.json({ message: "some thing went wrong!", success: false });
    }
}
const loginRequest = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userData.find({ email: email, password: password });
        if (user.length > 0) {
            res.json({ message: "Login Successfully", success: true })
        }
        else {
            res.json({ message: "User not Found", success: false })
        }
    }
    catch (err) {
        res.json({ message: "incorrect email password" })
    }
}
const deleteRequest = (req, res) => {
    let {id } = req.params;
    id = mongoose.Types.ObjectId(id);
    const { name, email, phone, address, department, company } = req.body;
    empData.findByIdAndDelete(id, { "name": name, "email": email, "phone": phone, "address": address, "department": department, "company": company }, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json({ message: "Delete succesfully", success: true });
        }
    })
}
const updateRequest = (req, res) => {
    let { _id } = req.body;
    id = mongoose.Types.ObjectId(_id);
    const { name, email, phone, address, department, company } = req.body;
    empData.findByIdAndUpdate(_id, { "name": name, "email": email, "phone": phone, "address": address, "department": department, "company": company }, (err, result) => {
        if (err) {
            res.json({ message: "some thing went wrong", success: false });
        }
        else {
            res.json({ message: "record updated successfully.", success: true });
        }
    })
}
const getDonutData = (req, res) => {

    empData.find().then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
}
const postDonut = async (req, res) => {
    try {
        const { label, id } = req.body;
        if (id==='companyId' ) {
            await empData.find({ company: label }).then((data) => {
                res.json({ result: data });
            })
        }
        else {
            await empData.find({ department: label}).then((data) => {
                res.json({ result: data });
            })
        }
    }
    catch (err) {
        res.json({ err });
    }
}

module.exports = { registrationRequest, getEmployeeData, loginRequest, deleteRequest, postEmployeeData, updateRequest, getDonutData, postDonut };