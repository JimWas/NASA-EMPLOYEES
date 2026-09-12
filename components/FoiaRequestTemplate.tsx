"use client";

import { useState } from "react";

const requestTemplate = `Subject: Freedom of Information Act Request — [brief description]

To: NASA [Headquarters or Center] FOIA Office

Dear FOIA Officer:

Under the Freedom of Information Act, 5 U.S.C. § 552, I request copies of the following existing agency records:

1. [Specific record type, title, report number, or description]
2. [Specific record type, title, report number, or description]

To help locate these records, the relevant details are:

• NASA program, mission, office, or contract: [name or number]
• Date range: [start date] through [end date]
• Likely custodians or offices: [names or offices, if known]
• Search terms: [two to five precise keywords]

Please provide the records electronically in their native format when readily reproducible. If any portion is withheld, please release all reasonably segregable non-exempt material and identify each exemption relied upon.

Fee category: I am a [commercial / educational or non-commercial scientific institution / representative of the news media / other] requester.

I am willing to pay up to $[amount] in fees. Please contact me before incurring costs above that amount.

[Optional fee-waiver paragraph: Explain specifically how disclosure is likely to contribute significantly to public understanding of government operations and why the request is not primarily in your commercial interest.]

If this request is too broad, please contact me so I can discuss a practical way to narrow it.

Sincerely,
[Full name]
[Mailing address]
[Email address]
[Phone number]`;

export function FoiaRequestTemplate() {
  const [copied, setCopied] = useState(false);

  async function copyTemplate() {
    await navigator.clipboard.writeText(requestTemplate);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="foia-template">
      <div className="foia-template__bar">
        <div>
          <span>REQUEST.TXT</span>
          <small>Replace every bracketed field before submitting</small>
        </div>
        <button type="button" onClick={copyTemplate} aria-live="polite">
          {copied ? "Copied" : "Copy template"}
        </button>
      </div>
      <pre>{requestTemplate}</pre>
    </div>
  );
}
