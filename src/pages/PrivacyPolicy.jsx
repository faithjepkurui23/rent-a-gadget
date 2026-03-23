import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PRIVACY_POLICY } from "../content/policies.js";

function download(filename, html) {
  const blob = new Blob([`<!doctype html><meta charset="utf-8"><title>${filename}</title>${html}`], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

export default function PrivacyPolicyPage() {
  const [agreed, setAgreed] = useState(false);
  return (
    <main className="max-w-3xl mx-auto p-6 animate-fade">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-neutral-500">Last updated: March 22, 2026</p>
      </header>

      <article className="prose" dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY }} />

      <div className="mt-6 flex items-center gap-2">
        <input id="agree-privacy" type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        <label htmlFor="agree-privacy" className="text-sm">I have read and agree to the Privacy Policy.</label>
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        <button onClick={() => download("privacy-policy.html", PRIVACY_POLICY)} className="underline">Download</button>
        <Link to="/" className="underline">← Back to Home</Link>
      </div>
    </main>
  );
}