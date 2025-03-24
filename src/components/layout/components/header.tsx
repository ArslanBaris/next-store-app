import { APP_NAME } from '@/config/constants'
import React from 'react'
import Link from 'next/link'
import { MiniBasket } from '@/components/basket/mini-basket'
import { ModeToggle } from '@/components/theme/mode-toggle'

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-background/60 min-h-16 w-full border-b backdrop-blur-sm">
                <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4">
                    <Link href="/" className="text-primary text-2xl font-bold">
                        {APP_NAME}
                    </Link>
                    <div className="flex flex-row justify-between items-center gap-3">
                        <ModeToggle />
                        <MiniBasket />
                    </div>
                </div>
            </header>
        </>
    )
}
