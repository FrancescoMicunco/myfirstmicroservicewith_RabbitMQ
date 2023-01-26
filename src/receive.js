import amqp from "amqplib/callback_api.js";
import { postFeedback } from "./functions/post.js";

// creo una connessione a RabbitMQ  (se il microservizio non è dockerizzato,
//occorre avere Rabbit attivo sulla propria macchina)
export const receiveMessage = amqp.connect(
    "amqp://localhost",
    function(error0, connection) {
        if (error0) {
            throw error0;
        }

        //crea un canale unico che riceve i comandi/eventi e resta in ascolto
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }
            const queue = "sum"; //questo nome deve essere lo stesso identificativo del messaggio inviato dal producer

            // creo la coda e la rendo disponibile e in attesa
            channel.assertQueue(queue, {
                durable: false,
                queue,
            });

            console.log(
                " [*] In attesa di messaggi di tipo %s. To exit press CTRL+C",
                queue
            );
            channel.consume(
                queue,
                postFeedback,

                { noAck: true }
            );
        });
    }
);