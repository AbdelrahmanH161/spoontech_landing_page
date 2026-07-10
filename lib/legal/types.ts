export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "contact"
      lines: { label: string; value: string; href?: string }[]
    }

export interface LegalPageContent {
  title: string
  subtitle?: string
  blocks: LegalBlock[]
}
