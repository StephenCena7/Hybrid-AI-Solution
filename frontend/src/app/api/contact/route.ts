import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'smarttechjr24@gmail.com'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  service?: string
  budget?: string
  timeline?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Contact API called')
    console.log('API Key exists:', !!BREVO_API_KEY)
    console.log('Receiver Email:', RECEIVER_EMAIL)

    // Validate API key exists
    if (!BREVO_API_KEY) {
      console.error('❌ BREVO_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 500 }
      )
    }

    const body: ContactFormData = await request.json()
    console.log('Form Data:', { ...body, message: body.message?.substring(0, 50) + '...' })

    const { name, email, phone, company, service, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      console.error('❌ Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, message' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.error('❌ Invalid email format:', email)
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Determine if it's a quotation or general inquiry
    const isQuotation = service ? true : false
    const formType = isQuotation ? 'Quotation Request' : 'General Inquiry'

    console.log('📝 Form Type:', formType)

    // Prepare email content with professional design
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${formType}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
        
        <!-- Main Container -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
          <tr>
            <td align="center">
              
              <!-- Email Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                
                <!-- Header with Gradient -->
                <tr>
                  <td style="background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%); padding: 50px 40px; text-align: center;">
                    <!-- Logo Icon -->
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 20px;">
                      <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2"/>
                      <path d="M32 16L44 28L32 40L20 28L32 16Z" fill="white"/>
                      <circle cx="32" cy="32" r="6" fill="white"/>
                    </svg>
                    <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      ${formType}
                    </h1>
                    <p style="margin: 12px 0 0 0; font-size: 16px; color: rgba(255,255,255,0.95); font-weight: 500;">
                      New submission from Hybrid AI Solution website
                    </p>
                  </td>
                </tr>

                <!-- Content Section -->
                <tr>
                  <td style="padding: 40px;">
                    
                    <!-- Contact Information Section -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                      <tr>
                        <td>
                          <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #111827; display: flex; align-items: center;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" style="margin-right: 10px; vertical-align: middle;">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Contact Information
                          </h2>
                        </td>
                      </tr>
                    </table>

                    <!-- Contact Details Table -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 35px;">
                      
                      <!-- Name Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 40%; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          Full Name
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;">
                          ${name}
                        </td>
                      </tr>

                      <!-- Email Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          Email Address
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                          <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-size: 15px;">${email}</a>
                        </td>
                      </tr>

                      <!-- Phone Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; ${!company ? '' : 'border-bottom: 1px solid #e5e7eb;'} font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          Phone Number
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; ${!company ? '' : 'border-bottom: 1px solid #e5e7eb;'}">
                          <a href="tel:${phone}" style="color: #06b6d4; text-decoration: none; font-size: 15px;">${phone}</a>
                        </td>
                      </tr>

                      ${company ? `
                      <!-- Company Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          Company Name
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; color: #111827; font-size: 15px;">
                          ${company}
                        </td>
                      </tr>
                      ` : ''}

                    </table>

                    ${isQuotation ? `
                    <!-- Project Details Section -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                      <tr>
                        <td>
                          <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #111827;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" style="margin-right: 10px; vertical-align: middle;">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            Project Details
                          </h2>
                        </td>
                      </tr>
                    </table>

                    <!-- Project Details Table -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; margin-bottom: 35px;">
                      
                      <!-- Service Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 40%; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m5.66-14.66l-4.24 4.24m0 6l-4.24 4.24M23 12h-6m-6 0H1m20.66 5.66l-4.24-4.24m0-6l-4.24-4.24"></path>
                          </svg>
                          Service Required
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                          <strong style="color: #8b5cf6; font-size: 15px;">${service}</strong>
                        </td>
                      </tr>

                      ${budget ? `
                      <!-- Budget Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                          Budget Range
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 15px;">
                          ${budget}
                        </td>
                      </tr>
                      ` : ''}

                      ${timeline ? `
                      <!-- Timeline Row -->
                      <tr>
                        <td style="padding: 16px 20px; background-color: #f9fafb; font-weight: 600; color: #374151; font-size: 14px;">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Expected Timeline
                        </td>
                        <td style="padding: 16px 20px; background-color: #ffffff; color: #111827; font-size: 15px;">
                          ${timeline}
                        </td>
                      </tr>
                      ` : ''}

                    </table>
                    ` : ''}

                    <!-- Message Section -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                      <tr>
                        <td>
                          <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #111827;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" style="margin-right: 10px; vertical-align: middle;">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Message
                          </h2>
                        </td>
                      </tr>
                    </table>

                    <!-- Message Content -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                      <tr>
                        <td style="padding: 20px; background-color: #f9fafb; border-left: 4px solid #06b6d4; border-radius: 8px;">
                          <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Metadata Section -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%); border-radius: 8px; padding: 20px;">
                      <tr>
                        <td style="text-align: center;">
                          <p style="margin: 0; font-size: 13px; color: #6b7280;">
                            <strong style="color: #374151;">Type:</strong> ${formType}
                          </p>
                          <p style="margin: 8px 0 0 0; font-size: 13px; color: #6b7280;">
                            <strong style="color: #374151;">Received:</strong> ${new Date().toLocaleString('en-IN', { 
                              timeZone: 'Asia/Kolkata',
                              dateStyle: 'full',
                              timeStyle: 'short'
                            })}
                          </p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #111827; padding: 30px 40px; text-align: center;">
                    <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600; color: #ffffff;">
                      Hybrid AI Solution
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                      Automated Email Notification System
                    </p>
                    <p style="margin: 12px 0 0 0; font-size: 12px; color: #6b7280;">
                      This is an automated message. Please reply directly to the customer's email.
                    </p>
                  </td>
                </tr>

              </table>
              
            </td>
          </tr>
        </table>

      </body>
      </html>
    `

    console.log('📤 Sending email to Brevo API...')

    // Send email via Brevo
    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Hybrid AI Solution',
          email: 'smarttechjr24@gmail.com'
        },
        to: [
          {
            email: RECEIVER_EMAIL,
            name: 'Hybrid AI Team'
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: `[${formType}] ${service || 'New Inquiry'} - ${name}`,
        htmlContent: emailContent
      }),
    })

    const responseData = await brevoResponse.json()
    console.log('Brevo Response Status:', brevoResponse.status)
    console.log('Brevo Response Data:', responseData)

    if (!brevoResponse.ok) {
      console.error('❌ Brevo API Error:', responseData)
      throw new Error(responseData.message || 'Failed to send email')
    }

    console.log('✅ Email sent successfully! Message ID:', responseData.messageId)

    return NextResponse.json(
      { 
        success: true, 
        message: `${formType} received! We'll respond within 24 hours.`,
        messageId: responseData.messageId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Error in contact API:', error)
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to send request'
      },
      { status: 500 }
    )
  }
}
