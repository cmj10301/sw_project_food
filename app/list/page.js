import { connectDB } from "@/util/database.js"
import ListItem from "./ListItem"

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div>
        <ListItem result={JSON.stringify(result)}/>
    </div>
  )
}