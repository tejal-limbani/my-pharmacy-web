"use client"
import Image from "next/image"

interface AuthFormWrapperProps {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

export const AuthFormWrapper = ({
    children,
    title,
    subTitle
}: AuthFormWrapperProps) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2 dark:text-white">{title}</h2>
            <p className="mb-6 dark:text-zinc-300">{subTitle}</p>

            {children}

            <div className="mt-6">
                <Image
                    src={'/images/welcome.svg'}
                    width={400}
                    height={200}
                    alt="Welcome"
                />
            </div>
        </div>
    )
}
