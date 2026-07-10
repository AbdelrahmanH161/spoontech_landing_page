"use client"

import { LegalPageLayout } from "./LegalPageLayout"
import { termsContent } from "@/lib/legal/terms"
import { useLanguage } from "@/lib/i18n"

export function TermsOfServiceContent() {
  const { language } = useLanguage()
  return <LegalPageLayout content={termsContent[language]} />
}
