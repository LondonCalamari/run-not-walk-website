import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      website,
      company,
      projectType,
      products,
      budget,
      timeline,
      currentPhotography,
      message,
      foundUs,
    } = await req.json();

    if (!name || !email || !message || !budget) {
      return NextResponse.json(
        { error: "Name, email, message, and budget are required." },
        { status: 400 }
      );
    }

    // Score the lead
    const budgetScore = (() => {
      if (budget.includes("$10,000")) return "hot";
      if (budget.includes("$5,000") || budget.includes("$2,500")) return "warm";
      if (budget.includes("Under")) return "cold";
      return "unknown";
    })();

    const tier = (() => {
      if (budget.includes("$10,000") || budget.includes("$5,000")) return "Studio";
      if (budget.includes("$2,500")) return "Launch";
      return "TBD";
    })();

    const { data, error } = await resend.emails.send({
      from: "hello@runnotwalk.studio",
      to: ["hello@runnotwalk.studio"],
      replyTo: email,
      subject: `[${tier}] New enquiry from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <!-- Lead Score Banner -->
          <div style="background: ${budgetScore === "hot" ? "#16a34a" : budgetScore === "warm" ? "#ea580c" : "#6b7280"}; color: white; padding: 12px 20px; border-radius: 8px 8px 0 0;">
            <strong>${budgetScore.toUpperCase()} LEAD</strong> — ${tier} tier candidate
          </div>

          <!-- Core Info -->
          <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Brand</td>
                <td style="padding: 8px 0; font-size: 14px;">${company}</td>
              </tr>` : ""}
              ${website ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Website</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="${website}">${website}</a></td>
              </tr>` : ""}
            </table>
          </div>

          <!-- Qualifying Questions -->
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin: 0 0 12px;">Qualifying Info</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 40%;">Monthly budget</td>
                <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${budget}</td>
              </tr>
              ${products ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Products to shoot</td>
                <td style="padding: 8px 0; font-size: 14px;">${products}</td>
              </tr>` : ""}
              ${timeline ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Timeline</td>
                <td style="padding: 8px 0; font-size: 14px;">${timeline}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">What they need</td>
                <td style="padding: 8px 0; font-size: 14px;">${projectType}</td>
              </tr>
              ${currentPhotography ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Current setup</td>
                <td style="padding: 8px 0; font-size: 14px;">${currentPhotography}</td>
              </tr>` : ""}
              ${foundUs ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Found us via</td>
                <td style="padding: 8px 0; font-size: 14px;">${foundUs}</td>
              </tr>` : ""}
            </table>
          </div>

          <!-- Message -->
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; margin: 0 0 12px;">Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #374151;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
      text: `
NEW ENQUIRY [${tier.toUpperCase()}]

Name: ${name}
Email: ${email}
${company ? `Brand: ${company}` : ""}
${website ? `Website: ${website}` : ""}

QUALIFYING INFO
Budget: ${budget}
${products ? `Products: ${products}` : ""}
${timeline ? `Timeline: ${timeline}` : ""}
What they need: ${projectType}
${currentPhotography ? `Current setup: ${currentPhotography}` : ""}
${foundUs ? `Found us: ${foundUs}` : ""}

MESSAGE:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
