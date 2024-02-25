"use client"

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ForceRefresh() {
    const router = useRouter()
    useEffect(() => {
router.refresh()
    }, [])
    return<></>
}