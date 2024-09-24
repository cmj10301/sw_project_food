import { connectDB } from "@/util/database.js"
import ListItem from "./ListItem"
import Link from "next/link"

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div>
      <ListItem result={JSON.stringify(result)}/>
      <Link href="/write">글쓰기</Link>
    </div>
  )
}