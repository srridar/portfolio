import { transporter } from "@/lib/transporter";

export async function sendContactEmail(data) {
    const { name, email, message } = data;

    await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        subject: ` New Portfolio Message from ${name}`,
        replyTo: email,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 30px 10px;">
            <tr>
              <td align="center">
                
                <!-- Main Email Card -->
                <table role="presentation" width="100%" style="max-width: 600px; background-color: #1e293b; border-radius: 12px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
                  
                  <!-- Card Header -->
                  <tr>
                    <td style="background-color: #0f172a; padding: 24px 30px; border-bottom: 1px solid #334155;">
                      <table role="presentation" width="100%">
                        <tr>
                          <td>
                            <span style="font-family: monospace; font-size: 12px; color: #10b981; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Portfolio Notification</span>
                            <h1 style="margin: 6px 0 0 0; color: #ffffff; font-size: 20px; font-weight: 700; tracking-tight: -0.5px;">New Contact Submission</h1>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Card Body -->
                  <tr>
                    <td style="padding: 30px;">
                      
                      <!-- Sender Details Grid -->
                      <table role="presentation" width="100%" style="margin-bottom: 24px; background-color: #0f172a; border-radius: 8px; border: 1px solid #334155; padding: 16px;">
                        <tr>
                          <td style="padding-bottom: 8px;">
                            <span style="color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">From Name</span>
                            <div style="color: #f8fafc; font-size: 15px; font-weight: 600; margin-top: 2px;">${name}</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span style="color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Email Address</span>
                            <div style="color: #10b981; font-size: 15px; font-weight: 500; margin-top: 2px;">
                              <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
                            </div>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Box -->
                      <div style="margin-bottom: 8px;">
                        <span style="color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Message Body</span>
                      </div>
                      <div style="background-color: #0f172a; border-left: 3px solid #10b981; border-radius: 4px; padding: 18px; color: #cbd5e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-family: sans-serif;">${message}</div>

                      <!-- Action Button -->
                      <table role="presentation" width="100%" style="margin-top: 28px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #10b981; color: #022c22; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 28px; border-radius: 6px; text-align: center;">Reply Directly to ${name}</a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Card Footer -->
                  <tr>
                    <td style="background-color: #0f172a; padding: 16px 30px; border-top: 1px solid #334155; text-align: center;">
                      <p style="margin: 0; color: #64748b; font-size: 12px; font-family: monospace;">
                        Sent automatically via your developer portfolio email pipeline.
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
        `,
    });
}