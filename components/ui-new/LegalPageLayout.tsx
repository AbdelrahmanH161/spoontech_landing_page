import React from "react"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"
import type { LegalPageContent } from "@/lib/legal/types"

export function LegalPageLayout({ content }: { content: LegalPageContent }) {
  return (
    <main className="min-h-screen bg-background selection:bg-st-primary/30">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {content.title}
        </h1>
        {content.subtitle && (
          <p className="mb-12 text-sm text-muted-foreground">
            {content.subtitle}
          </p>
        )}
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {content.blocks.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={i}
                    className="mt-10! mb-2 text-xl font-semibold text-foreground"
                  >
                    {block.text}
                  </h2>
                )
              case "h3":
                return (
                  <h3
                    key={i}
                    className="mt-6! mb-1 text-base font-semibold text-foreground"
                  >
                    {block.text}
                  </h3>
                )
              case "p":
                return <p key={i}>{block.text}</p>
              case "ul":
                return (
                  <ul key={i} className="list-disc space-y-2 ps-6">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              case "contact":
                return (
                  <p key={i}>
                    {block.lines.map((line) => (
                      <React.Fragment key={line.label}>
                        {line.label}:{" "}
                        {line.href ? (
                          <a
                            href={line.href}
                            className="text-st-primary hover:underline"
                          >
                            {line.value}
                          </a>
                        ) : (
                          line.value
                        )}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )
              default:
                return null
            }
          })}
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}
