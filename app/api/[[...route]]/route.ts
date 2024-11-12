import {Hono} from 'hono'
import {handle} from 'hono/vercel'


import agents from '@/features/agent/server/route'
import listings from "@/features/listings/server/route"
import enquiries from '@/features/enquiries/server/route'
const app = new Hono().basePath("/api")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes  =app
.route('/agent',agents)
.route('/listings',listings)
.route('/enquiries',enquiries)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes