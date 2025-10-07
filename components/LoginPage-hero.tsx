"use client"

import "@/styles/heroui.css";
import { HeroUIProvider } from "@heroui/react";
import { Button, Divider, Form, Input, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

// import type { ThemeProviderProps } from "next-themes";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// import * as React from "react";

// export interface ProvidersProps {
//   children: React.ReactNode;
//   themeProps?: ThemeProviderProps;
// }

// declare module "@react-types/shared" {
//   interface RouterConfig {
//     routerOptions: NonNullable<
//       Parameters<ReturnType<typeof useRouter>["push"]>[1]
//     >;
//   }
// }

export default function LoginPageHero() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login submitted");
  };

  return (
    <HeroUIProvider navigate={router.push}>
      <div className="bg-default-50 flex min-h-screen items-center justify-center p-4">
        <div className="bg-content1 flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-medium">北半球會員登入</h2>
          <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
            />
            <Input
              isRequired
              label="Password"
              name="password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <Button className="w-full" color="primary" type="submit">
              Sign In
            </Button>
          </Form>
          <Divider />
          <div className="flex flex-col gap-2">
            <Button startContent={<Icon icon="flat-color-icons:google" width={24} />} variant="bordered" >
              Google 登入
            </Button>
            <Button startContent={<Icon icon="logos:facebook" width={24} />} variant="bordered">
              Facebook 登入
            </Button>
          </div>
          <p className="text-small text-center">
            註冊帳戶?{" "}
            <Link href="#" size="sm">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </HeroUIProvider>
  )
}