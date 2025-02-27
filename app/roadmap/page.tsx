import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Circle, Clock, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Roadmap - CodeMorph",
  description: "Explore the development timeline and upcoming features of CodeMorph.",
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader
        title="Product Roadmap"
        description="Our development timeline and upcoming features. Join the waitlist to stay updated on our progress."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500 animate-pulse">
                  <Circle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Current Phase</h3>
                  <p className="text-emerald-400 text-sm">Private Alpha</p>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                We're currently in private alpha, working with select partners to validate our core technology and
                gather early feedback.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <Calendar className="w-4 h-4" />
                <span>Q1 2024</span>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Circle className="w-6 h-6 text-zinc-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Next Phase</h3>
                  <p className="text-zinc-400 text-sm">Closed Beta</p>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                Expanding testing with waitlist members to refine our product and prepare for public release.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <Calendar className="w-4 h-4" />
                <span>Q2 2025</span>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Circle className="w-6 h-6 text-zinc-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Future Phase</h3>
                  <p className="text-zinc-400 text-sm">Public Beta</p>
                </div>
              </div>
              <p className="text-zinc-400 mb-4">
                Opening access to our waitlist members with core features available for testing and feedback.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <Calendar className="w-4 h-4" />
                <span>Q3 2025</span>
              </div>
            </div>
          </div>

          <div className="relative mb-16">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-zinc-800 rounded-full hidden md:block"></div>

            <div className="space-y-16">
              <div className="relative">
                <div className="flex">
                  <div className="hidden md:flex flex-col items-center mr-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500 animate-pulse">
                      <Circle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="text-xs font-medium text-emerald-400 mt-2">IN PROGRESS</div>
                  </div>

                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 w-full">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <Circle className="w-5 h-5 text-emerald-500" />
                      <div className="text-xs font-medium text-emerald-400">IN PROGRESS</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Private Alpha</h3>
                    <p className="text-zinc-400 mb-6">
                      Initial testing phase with select partners to validate our core technology and gather early
                      feedback.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Current Focus</h4>
                        <ul className="space-y-2">
                          {[
                            "Core AI model training and refinement",
                            "Initial language support (Python, JavaScript)",
                            "Basic web interface development",
                            "Performance benchmarking and optimization",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-3">Progress</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">Core AI Model</span>
                              <span className="text-emerald-400">65%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">Language Support</span>
                              <span className="text-emerald-400">40%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "40%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">Web Interface</span>
                              <span className="text-emerald-400">30%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-zinc-500">
                      <Clock className="w-4 h-4 inline-block mr-1" />
                      Expected completion: Q2 2024
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex">
                  <div className="hidden md:flex flex-col items-center mr-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500 animate-pulse">
                      <Circle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="text-xs font-medium text-emerald-400 mt-2">IN PROGRESS</div>
                  </div>

                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 w-full">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <Circle className="w-5 h-5 text-emerald-500" />
                      <div className="text-xs font-medium text-emerald-400">IN PROGRESS</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Closed Beta</h3>
                    <p className="text-zinc-400 mb-6">
                      Expanded testing with waitlist members to refine our product and prepare for public release.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Current Focus</h4>
                        <ul className="space-y-2">
                          {[
                            "Expanding language support (Java, C#, Ruby, Go)",
                            "Improving context-awareness in translations",
                            "Building CLI tools and API",
                            "Enhancing user interface and experience",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-3">Progress</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">Language Support</span>
                              <span className="text-emerald-400">70%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "70%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">API Development</span>
                              <span className="text-emerald-400">85%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "85%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-zinc-400">UI/UX Refinement</span>
                              <span className="text-emerald-400">60%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-zinc-500">
                      <Clock className="w-4 h-4 inline-block mr-1" />
                      Expected completion: Q2 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex">
                  <div className="hidden md:flex flex-col items-center mr-8">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Circle className="w-8 h-8 text-zinc-600" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500 mt-2">UPCOMING</div>
                  </div>

                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 w-full">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <Circle className="w-5 h-5 text-zinc-600" />
                      <div className="text-xs font-medium text-zinc-500">UPCOMING</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Public Beta</h3>
                    <p className="text-zinc-400 mb-6">
                      Open access with core features available to all users, with a focus on gathering feedback and
                      improving the platform.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Planned Features</h4>
                        <ul className="space-y-2">
                          {[
                            "Full project migration capabilities",
                            "Advanced refactoring options",
                            "Integration with popular IDEs",
                            "Expanded language support (10+ languages)",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-3">Goals</h4>
                        <ul className="space-y-2">
                          {[
                            "Onboard 1,000+ developers",
                            "Process 1M+ lines of code",
                            "Achieve 98% translation accuracy",
                            "Collect comprehensive user feedback",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-zinc-500">
                      <Clock className="w-4 h-4 inline-block mr-1" />
                      Planned for Q3 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex">
                  <div className="hidden md:flex flex-col items-center mr-8">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Circle className="w-8 h-8 text-zinc-600" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500 mt-2">UPCOMING</div>
                  </div>

                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 w-full">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <Circle className="w-5 h-5 text-zinc-600" />
                      <div className="text-xs font-medium text-zinc-500">UPCOMING</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Enterprise Release</h3>
                    <p className="text-zinc-400 mb-6">
                      Full-featured version with enterprise support, on-premises options, and advanced security
                      features.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Enterprise Features</h4>
                        <ul className="space-y-2">
                          {[
                            "Private cloud deployment options",
                            "Advanced security and compliance",
                            "Custom AI model training",
                            "Dedicated support and SLAs",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-3">Target Markets</h4>
                        <ul className="space-y-2">
                          {[
                            "Fortune 500 companies",
                            "Government agencies",
                            "Financial institutions",
                            "Healthcare organizations",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Circle className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                              <span className="text-zinc-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-zinc-500">
                      <Clock className="w-4 h-4 inline-block mr-1" />
                      Planned for Q4 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Beyond 2025: Our Vision</h3>
            <p className="text-zinc-400 mb-8">
              Our long-term roadmap focuses on expanding CodeMorph's capabilities and reaching new markets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-3">Advanced AI Models</h4>
                <p className="text-zinc-400 mb-4">
                  Next-generation AI models with deeper understanding of code semantics and business logic.
                </p>
                <div className="text-sm text-zinc-500">
                  <Calendar className="w-4 h-4 inline-block mr-1" />
                  2026
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-3">Low-Code Integration</h4>
                <p className="text-zinc-400 mb-4">
                  Bridging the gap between traditional code and low-code/no-code platforms.
                </p>
                <div className="text-sm text-zinc-500">
                  <Calendar className="w-4 h-4 inline-block mr-1" />
                  2026-2027
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h4 className="text-lg font-medium mb-3">Global Expansion</h4>
                <p className="text-zinc-400 mb-4">
                  Localized versions and support for international programming standards and practices.
                </p>
                <div className="text-sm text-zinc-500">
                  <Calendar className="w-4 h-4 inline-block mr-1" />
                  2027
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

