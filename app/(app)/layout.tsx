import { TooltipProvider } from "@/components/ui/tooltip"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from "@clerk/nextjs"
import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <TooltipProvider>
        <main>{children}</main>
        <SanityLive/>
      </TooltipProvider>
    </ClerkProvider>
  )
}

export default layout
