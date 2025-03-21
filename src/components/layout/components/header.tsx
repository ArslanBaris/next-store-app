import { APP_NAME } from '@/config/constants'
import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-background/60 min-h-16 w-full border-b backdrop-blur-sm">
                <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4">
                    <Link href="/" className="text-primary text-2xl font-bold">
                        {APP_NAME}
                    </Link>

                    <div className="flex items-center gap-2">
                        
                    </div>
                </div>
            </header>
        </>
    )
}
