"use client"

import { LegalPageLayout } from "./LegalPageLayout"
import { privacyContent } from "@/lib/legal/privacy"
import { useLanguage } from "@/lib/i18n"

export function PrivacyPolicyContent() {
  const { language } = useLanguage()
  return <LegalPageLayout content={privacyContent[language]} />
}
