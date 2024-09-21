using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Services
{
    public class EmailService : IEmailService
    {
        //to chek what this
        private readonly string _smtpServer = "smtp.gmail.com"; // e.g., smtp.gmail.com
        private readonly int _port = 587; // e.g., 587 for TLS
        private readonly string _fromEmail = "dvorarottman@gmail.com"; // Your email
        private readonly string _fromEmailPassword = "0583265473"; // Your email password

        public async Task SendEmailAsync(string to, string subject, string message)
        {
            using (var client = new SmtpClient(_smtpServer, _port))
            {
                client.Credentials = new NetworkCredential(_fromEmail, _fromEmailPassword);
                client.EnableSsl = true;

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_fromEmail),
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true,
                };
                mailMessage.To.Add(to);

                await client.SendMailAsync(mailMessage);
            }
        }
    }
}