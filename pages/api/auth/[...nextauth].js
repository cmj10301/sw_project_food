import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lif9alTq69O0CL2m',
      clientSecret: 'de4551c0d28117fb583fbec3182c41b762fb31f6',
    }),
  ],
  secret : 'skekdlaak12',
  adapter : MongoDBAdapter(connectDB)

};
export default NextAuth(authOptions); 