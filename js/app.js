"use strict";

function calculatePrice(){
    //input value 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var nights = parseInt(document.getElementById("nights").value;
    var roomType = document.getElementById("roomType").value;
    var adults = parseInt(document.getElementById("adults").value
    var children = parseInt(document.getElementById("children").value
    var discount = document.getElementById("discount").value;
    //calculations with queen, king, 2 bedroom w prices
     let prices = {
        "queen" : {
            "JunAug": 250.00,
            "RestOfYear": 150.00,
        },
        "king" : {

            "JunAug": 250.00,
            "RestOfYear": 150.00,
        },
        "2 bedroom" : {

            "JunAug": 400.00,
            "RestOfYear": 300.00,
        }
    }
    function validateForm() {
        if (isEmpty(document.getElementById('data_2').value.trim())) {
        alert('First name is required!');
        return false;
        }
        if (isEmpty(document.getElementById('data_3').value.trim())) {
        alert('Last name is required!');
        return false;
        }
        if (isEmpty(document.getElementById('data_4').value.trim())) {
        alert('Phone is required!');
        return false;
        }
        if (isEmpty(document.getElementById('data_5').value.trim())) {
        alert('Email is required!');
        return false;
        }
        if (!validateEmail(document.getElementById('data_5').value.trim())) {
        alert('Email must be a valid email address!');
        return false;
        }
        if (isEmpty(document.getElementById('data_6').value.trim())) {
        alert('Arrival date is required!');
        return false;
        }
        if (isEmpty(document.getElementById('data_7').value.trim())) {
        alert('Departure date is required!');
        return false;
        }
        if (isEmpty(document.getElementById('data_8').value.trim())) {
        alert('Number of adults is required!');
        return false;
        }
        return true;
        }
        function isEmpty(str) { return (str.length === 0 || !str.trim()); }
        function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
        return isEmpty(email) || re.test(email);
        }