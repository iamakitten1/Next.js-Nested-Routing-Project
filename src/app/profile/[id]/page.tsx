

'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ProfileDetailPage(){
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (!id) {
            router.push("/"); 
        }
    }, [id, router]);

    return (
        <div>
            <h1>Profile Detail Page</h1>
            
        </div>
    );
    
}