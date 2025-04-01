'use client';

import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CopyTextProps {
  text: string;
  className?: string;
}

export function CopyText({ text, className = "" }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="text-emerald-400">{text}</span>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
