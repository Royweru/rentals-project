


  declare module "next-auth/jwt" {
    
    interface JWT {
      /** OpenID ID Token */
      idToken?: string
    }
}