import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    console.log(요청.body)

    if (session) {
        console.log(session.user.email)
        요청.body.author = session.user.email
    }

    if (요청.method == 'POST') {
        if (요청.body.title == '') {
            return 응답.status(500).json('너  제목 왜 안씀')
        }
        요청.body.like = 0
        
        if (요청.body.author || 요청.body.password) {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(요청.body)
            응답.status(200).redirect('/list')
        } else {
            return 응답.status(500).json('입력 안함')
        }
    }     
}