/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function getRequest() {

    fetch("X?name=Upek").then(response => {

        if (response.ok) {
            return  response.text();
        } else {
            throw new Error("Response Error");
        }

    }).then(text => {

        console.log(text);

    }).catch(error => {

        console.log(error);

    });

}


function postRequest() {

    const data = {
        name: "Upek"
    }

    fetch("X", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {

        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Response Error");
        }

    }).then(text => {

        console.log(text);

    }).catch(error => {

        console.log(error);

    });

}


async function asyncPostRequest() {

    const data = {
        name: "Upek"
    };

//    we have to put await if there is a return of promise
    const response = await fetch("X", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const text = await response.text();
        console.log(text);
    } else {
        console.log("Response Error");
    }

}

async function postJsonRequest() {

    const data = {
        name: "Upek"
    };

//    we have to put await if there is a return of promise
    const response = await fetch("X", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const json = await response.josn();
        console.log(json.name);
        console.log(json.mobile);
    } else {
        console.log("Response Error");
    }

}