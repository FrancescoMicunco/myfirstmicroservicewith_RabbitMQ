import axios from "axios";

// questa funzione creau un record sul DB secondario
//usando il corpo del messaggio ricevuto dal BUS controller
export const postFeedback = function(msg) {
    const body = msg.content.toString();
    console.log(" [x] Received %s", body);

    const config = {
        method: "post",
        url: `http://localhost:3003/feedback`,
        headers: { "Content-Type": "application/json" },
        data: body,
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error);
        });
};