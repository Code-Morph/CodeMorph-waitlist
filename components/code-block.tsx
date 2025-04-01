'use client';

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.textContent = code;
    }
  }, [code]);

  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.textContent || '';
      navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
      <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
        <pre 
          className="text-emerald-400 whitespace-pre-wrap break-all" 
          ref={codeRef}
        >
          {code}
        </pre>
      </div>
      <Button 
        variant="outline" 
        className="border-zinc-700 relative"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2 text-emerald-400" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" />
            Copy Code
          </>
        )}
      </Button>
    </div>
  );
}
