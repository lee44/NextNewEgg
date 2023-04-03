import sendgrid from '@sendgrid/mail'

export const sendEmail = async () => {
  const msg = {
    to: 'jlee7772@gmail.com', // Change to your recipient
    from: 'jleework7772@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')
    await sendgrid.send(msg)
    console.log('Email Sent successfully')
  } catch (error) {
    console.log(error)
  }
}

sendEmail()
