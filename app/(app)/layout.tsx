import { CartSheet } from "@/components/CartSheet"
import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CartStoreProvider } from "@/lib/store/cart-store-provider"
import { ChatStoreProvider } from "@/lib/store/chat-store-provider"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from "@clerk/nextjs"
import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>

        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "font-geist",
          }}
        />
       <TooltipProvider>
          <Header />
          <CartSheet/>
          <main>{children}</main>

        <SanityLive/>
      </TooltipProvider>
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  )
}

export default layout
