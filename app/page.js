'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function start() {
  const router = useRouter();

    useEffect(() => {

            router.push('/list'); 
    }, [router]);
}