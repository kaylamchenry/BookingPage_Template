"use strict";

function calculatePrice(){
    //input value 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let checkInDate = document.getElementById("checkInDate").value;
    let nights = parseInt(document.getElementById("nights").value;
    let roomType = document.getElementById("roomType").value;
    let adults = parseInt(document.getElementById("adults").value
    let children = parseInt(document.getElementById("children").value
    let discount = document.getElementById("discount").value;

    //calculations with queen, king, 2 bedroom w prices
     let prices = {
        "queen" : {
            "JunAug": 250.00,
            "RestOfYear"= 150.00

        }