import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.VITE_NOTION_KEY })

export default notion