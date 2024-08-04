const { request, response } = require("express");
const userModel = require("../models/userModel");

exports.GetUserById = (request, response, next) =>{
    const userId = request.params.userId;
    console.log(userId,'userId');
    if(userId != null){
        userModel.findById({_id: userId}).then((data)=>{
            return response.status(200).json({
                response: data
            })
        }).catch((err)=>{
            return response.status(500).json({
                errorMessage: "Server side error"
            })
        })
    }
};

exports.UpdateUser = (request, response, next) =>{
    const userId = request.body.userId;
    console.log(request.body)
    const userData = new userModel({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        fullName: `${request.body.firstName} ${request.body.lastName}`,
    });
    userModel.updateOne({_id: userId},{
        $set:{
            firstName: userData.firstName,
            lastName: userData.lastName,
            fullName: userData.fullName
        }
    }).then(result=>{
        console.log(result," result")
        if(result.modifiedCount){
            return response.status(200).json({ message: "User updated" });
        }
    }).catch(err=>{
        return response.status(500).json({ errorMessage: "Something went wrong" });
    })
};