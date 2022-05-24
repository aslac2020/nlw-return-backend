import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2fe84cd970e736",
    pass: "2e1f3cd951f463",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }:SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Andre Lacerda <andredesenvolvedorti@gmail.com>",
      subject: subject,
      html: body
    });
  }
}
