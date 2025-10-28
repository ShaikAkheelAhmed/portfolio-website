"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please fix the errors above.",
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    // In a real application, you would use a service like Nodemailer, SendGrid, or Resend
    // For this example, we'll simulate sending an email

    // Log the email data (for demonstration purposes)
    console.log("Sending email with data:", {
      to: "shaikakheelahmed1@gmail.com",
      from: email,
      subject: `Portfolio Contact: Message from ${name}`,
      message,
    })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For a real implementation, you would use code like this:
    /*
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'shaikakheelahmed1@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    })
    */

    return {
      success: true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      errors: {
        _form: ["Failed to send message. Please try again later."],
      },
      success: false,
    }
  }
}

