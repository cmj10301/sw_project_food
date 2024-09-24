import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        console.log(요청.body)
        if (요청.body.title == '') {
            return 응답.status(500).json('제목이 없습니다.')
        } else if (요청.body.content == '') {
            return 응답.status(500).json('내용이 없습니다.')
        } else {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(요청.body)
            응답.status(200).redirect('/list')
        }
            
    }     
}