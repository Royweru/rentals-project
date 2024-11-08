"use server"

import { auth } from "@/auth"
import { getUserById } from "./getUser"

export const serverUser    = async () => {
     try {
        const session = await auth()

        if(!session) return null

        if(session){
            const user = await getUserById(session.user.id as string)
            return user
        }
        return null
     } catch (error) {
        console.error(error)
        return null
     }
}