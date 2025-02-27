import PageHeader from "@/components/page-header"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Copy, Key, Lock, Zap, Server, Globe, Shield, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "API Documentation - CodeMorph",
  description:
    "Integrate CodeMorph's powerful code transformation capabilities into your applications with our REST API.",
}

const endpoints = [
  {
    method: "POST",
    path: "/v1/translate",
    description: "Translate code between programming languages",
    authentication: "API Key",
    rateLimit: "100 requests/min",
  },
  {
    method: "POST",
    path: "/v1/analyze",
    description: "Analyze code structure and complexity",
    authentication: "API Key",
    rateLimit: "50 requests/min",
  },
  {
    method: "POST",
    path: "/v1/optimize",
    description: "Optimize code for performance",
    authentication: "API Key",
    rateLimit: "30 requests/min",
  },
  {
    method: "POST",
    path: "/v1/batch",
    description: "Process multiple files in a single request",
    authentication: "API Key",
    rateLimit: "10 requests/min",
  },
]

const languageExamples = {
  curl: `curl -X POST "https://api.codemorph.ai/v1/translate" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "source": "python",
  "target": "javascript",
  "code": "def fibonacci(n):\\n    if n <= 1:\\n        return n\\n    return fibonacci(n-1) + fibonacci(n-2)"
}'`,
  python: `import requests

response = requests.post(
    'https://api.codemorph.ai/v1/translate',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'source': 'python',
        'target': 'javascript',
        'code': '''def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)'''
    }
)

result = response.json()
print(result['translated_code'])`,
  javascript: `const response = await fetch('https://api.codemorph.ai/v1/translate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    source: 'python',
    target: 'javascript',
    code: \`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)\`
  })
})

const result = await response.json()
console.log(result.translated_code)`,
}

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <PageHeader
        title="API Documentation"
        description="Integrate CodeMorph's powerful code transformation capabilities into your applications."
      />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Getting Started */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-zinc-400">
                  CodeMorph's REST API allows you to integrate our AI-powered code transformation capabilities directly
                  into your applications. Follow these steps to get started:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Key className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">1. Get Your API Key</h3>
                      <p className="text-sm text-zinc-400">Sign up for an account and generate an API key.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Lock className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">2. Authentication</h3>
                      <p className="text-sm text-zinc-400">Include your API key in the Authorization header.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">3. Make Your First Request</h3>
                      <p className="text-sm text-zinc-400">Start transforming code using our simple API endpoints.</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-500">Get API Key</Button>
                  <Button variant="outline" className="border-zinc-700">
                    View SDKs
                  </Button>
                </div>
              </div>

              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Base URL</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">https://api.codemorph.ai</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4" />
                      <span>All API requests are made to this base URL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>HTTPS is required for all API endpoints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>TLS 1.2+ is required for secure communications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Authentication */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Authentication</h2>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <p className="text-zinc-400 mb-4">
                All API requests must include your API key in the Authorization header:
              </p>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                <div className="text-emerald-400">Authorization: Bearer YOUR_API_KEY</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <span>Never share your API key or commit it to version control.</span>
              </div>
            </div>
          </div>

          {/* Endpoints */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">API Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-sm font-mono">
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-zinc-300">{endpoint.path}</span>
                  </div>
                  <p className="text-zinc-400 mb-4">{endpoint.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-zinc-500" />
                      <span className="text-zinc-400">{endpoint.authentication}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zinc-500" />
                      <span className="text-zinc-400">{endpoint.rateLimit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Code Examples</h2>
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="bg-zinc-900/50 border border-zinc-800">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              {Object.entries(languageExamples).map(([language, code]) => (
                <TabsContent key={language} value={language}>
                  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                      <pre className="text-emerald-400 whitespace-pre-wrap">{code}</pre>
                    </div>
                    <Button variant="outline" className="border-zinc-700">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Rate Limiting */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Rate Limiting</h2>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <p className="text-zinc-400 mb-4">
                Rate limits are applied on a per-API key basis. The following headers are included in all API responses:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />
                  <div>
                    <code className="text-sm font-mono text-zinc-300">X-RateLimit-Limit</code>
                    <p className="text-sm text-zinc-400">The maximum number of requests allowed per time window</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />
                  <div>
                    <code className="text-sm font-mono text-zinc-300">X-RateLimit-Remaining</code>
                    <p className="text-sm text-zinc-400">The number of requests remaining in the current time window</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />
                  <div>
                    <code className="text-sm font-mono text-zinc-300">X-RateLimit-Reset</code>
                    <p className="text-sm text-zinc-400">The time when the current rate limit window resets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our developer support team is here to help you integrate CodeMorph into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zinc-700" asChild>
                <Link href="#">View API Reference</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}