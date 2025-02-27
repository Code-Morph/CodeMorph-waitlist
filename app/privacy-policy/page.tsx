import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Shield, Lock, Eye, FileText, Clock, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - CodeMorph",
  description: "CodeMorph's privacy policy explains how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader title="Privacy Policy" description="How we collect, use, and protect your data." />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">Last Updated</p>
                <p className="font-medium">May 15, 2023</p>
              </div>
            </div>

            <p className="text-zinc-400 mb-4">
              At CodeMorph, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-zinc-400">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site or use our services.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <p className="text-zinc-400 mb-3">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li>Register for an account</li>
                  <li>Sign up for our newsletter or waitlist</li>
                  <li>Request customer support</li>
                  <li>Participate in promotions or surveys</li>
                </ul>
                <p className="text-zinc-400 mt-3">
                  This information may include your name, email address, phone number, company name, job title, and
                  other contact details.
                </p>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Usage Information</h3>
                <p className="text-zinc-400 mb-3">
                  We automatically collect certain information when you visit, use, or navigate our platform. This
                  information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li>Device and connection information (IP address, browser type, operating system)</li>
                  <li>Usage patterns and preferences</li>
                  <li>Referring URLs and exit pages</li>
                  <li>Date and time stamps of your visits</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <Eye className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-400 mb-4">
                  We use the information we collect for various business purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                  <li>
                    <span className="font-medium text-white">Providing and improving our services:</span> To deliver the
                    features and functionality of our platform, and to develop new products and services.
                  </li>
                  <li>
                    <span className="font-medium text-white">Communication:</span> To respond to your inquiries, provide
                    customer support, and send you important updates about our services.
                  </li>
                  <li>
                    <span className="font-medium text-white">Marketing:</span> To send you promotional materials and
                    newsletters if you have opted in to receive such communications.
                  </li>
                  <li>
                    <span className="font-medium text-white">Analytics:</span> To analyze usage patterns and improve our
                    website and services.
                  </li>
                  <li>
                    <span className="font-medium text-white">Legal compliance:</span> To comply with applicable laws,
                    regulations, and legal processes.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <Lock className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Data Security</h2>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-400 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information
                  from unauthorized access, disclosure, alteration, and destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-zinc-400 mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your personal information, we cannot guarantee
                  its absolute security.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Your Rights</h2>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-400 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                  <li>
                    <span className="font-medium text-white">Access:</span> You can request a copy of the personal
                    information we hold about you.
                  </li>
                  <li>
                    <span className="font-medium text-white">Correction:</span> You can request that we correct
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    <span className="font-medium text-white">Deletion:</span> You can request that we delete your
                    personal information in certain circumstances.
                  </li>
                  <li>
                    <span className="font-medium text-white">Restriction:</span> You can request that we restrict the
                    processing of your information.
                  </li>
                  <li>
                    <span className="font-medium text-white">Data portability:</span> You can request a copy of your
                    data in a structured, commonly used, and machine-readable format.
                  </li>
                  <li>
                    <span className="font-medium text-white">Objection:</span> You can object to our processing of your
                    personal information.
                  </li>
                </ul>
                <p className="text-zinc-400 mt-4">
                  To exercise any of these rights, please contact us at privacy@codemorph.ai.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold">Changes to This Policy</h2>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-400 mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification if we have your contact information</li>
                  <li>Displaying a notice on our platform</li>
                </ul>
                <p className="text-zinc-400 mt-4">
                  Your continued use of our services after such modifications will constitute your acknowledgment of the
                  modified policy and agreement to abide and be bound by it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-400 mb-4">
              If you have any questions or concerns about this privacy policy, please contact us at:
            </p>
            <p className="text-lg font-medium">privacy@codemorph.ai</p>
          </div>
        </div>
      </section>
    </main>
  )
}

