"use client";

import "@/styles/heroui.css";
import { HeroUIProvider, Button } from "@heroui/react";

// import "@/styles/shadcn.css";
// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>

      {/* shadcn/UI */}
      {/* <Button>Click me</Button> */}

      {/* HeroUI */}
      <HeroUIProvider>
        <div className="flex flex-wrap gap-4 items-center">
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </div>
      </HeroUIProvider>

    </div>

  );
}
