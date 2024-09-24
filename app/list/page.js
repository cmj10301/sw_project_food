import { connectDB } from "@/util/database.js"
import ListItem from "./ListItem"
import Link from "next/link"

export default async function Home() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <div>
        <ListItem result={JSON.stringify(result)}/>
        <Link href="/write">글쓰기</Link><br></br>
        <form action="/api/sign" method="POST">
            <input name="user_id" placeholder="아이디"></input>
            <input name="user_password" placeholder="비밀번호"></input>
            <button type="submit">회원가입</button>
        </form>
    </div>
  )
}