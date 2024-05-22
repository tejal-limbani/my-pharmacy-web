import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 lg:w-3/5 relative">
        <Image
          src={'/images/auth-background.svg'}
          alt="Medicine overlay"
          priority
          fill
          objectFit="cover"
          className="rounded-tr-[50px] rounded-br-[50px]"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <Image
            src={'/images/logo-white.svg'}
            alt="Logo"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-1/2 lg:w-2/5 flex items-center justify-center p-8 bg-white dark:bg-zinc-800">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout