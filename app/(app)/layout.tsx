import { TooltipProvider } from "@/components/ui/tooltip"
import { ClerkProvider } from "@clerk/nextjs"
import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <TooltipProvider>
        <main>{children}</main>
      </TooltipProvider>
    </ClerkProvider>
  )
}

export default layout
