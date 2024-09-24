import { connectDB } from "@/util/database"

export default async function Sign(요청, 응답) {
    if (요청.method == 'POST')
        console.log(요청.body)
        if (요청.body.user_id == "" || 요청.body.user_password == "") {
            return 응답.status(500).json("값이 없음")
        }
        const db = (await connectDB).db("member")
        const count = await db.collection('Information').countDocuments({user_id: 요청.body.user_id})
        
        if (count > 0){
            return 응답.status(500).json("아이디가 이미 존재함.")
        } else {
            let result = await db.collection('Information').insertOne(요청.body)
            return 응답.status(500).json("적용 완료")
        }

        
}