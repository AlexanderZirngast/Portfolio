import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { toast } from "sonner";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "zirngast.dev <contact@contact.zirngast.dev>",
      to: process.env.TO_EMAIL || "",
      subject: "Messsage",
      react: EmailTemplate({ message: body.message, name: body.name, email: body.email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
