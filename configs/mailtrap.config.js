import dotenv from 'dotenv'
import { MailtrapClient } from 'mailtrap'

dotenv.config()

export const mailtrapclient = new MailtrapClient({
  token: process.env.MailtrapTOKEN,
})

export const sender = {
  email: 'mailtrap@demomailtrap.com',
  name: 'Signup Test',
}
// const recipients = [
//   {
//     email: "emrans45@gmail.com",
//   }
// ];
// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
