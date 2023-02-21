export const errorMessage = (error: string | string[] | undefined) => {
  switch (error) {
    case 'OAuthSignin':
      return '(OAuthSignin) Error in constructing an authorization URL'
    case 'OAuthCallback':
      return '(OAuthCallback) Error in handling the response from an OAuth provider'
    case 'OAuthCreateAccount':
      return '(OAuthCreateAccount) Could not create OAuth provider user in the database'
    case 'EmailCreateAccount':
      return '(EmailCreateAccount) Could not create email provider user in the database'
    case 'Callback':
      return '(Callback) Error in the OAuth callback handler route'
    case 'OAuthAccountNotLinked':
      return '(OAuthAccountNotLinked) If the email on the account is already linked, but not with this OAuth account'
    case 'EmailSignin':
      return '(EmailSignin) Please provide an email address to send a verfication email'
    case 'CredentialsSignin':
      return '(CredentialsSignin) The authorize callback returned null in the Credentials provider'
    case 'SessionRequired':
      return '(SessionRequired) Session expired need to sign in again'
  }
}
