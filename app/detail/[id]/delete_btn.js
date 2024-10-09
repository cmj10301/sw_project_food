'use client'

import { useRouter } from 'next/navigation';

export default function Delete_btn({ id }) {
    const router = useRouter();

    const handleDelete = () => {
        fetch('/api/delete', { method : 'DELETE', body : {id}.id})
        .then((r) => r.json())
        .then(() => {
            router.push('/list');
            router.refresh();
        })
    }

    return (
        <div>
            <span onClick={handleDelete}>삭제</span><br/>
        </div>
    );
}
