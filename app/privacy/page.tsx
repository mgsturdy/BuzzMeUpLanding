"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black text-white">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy for 1473212 B.C. LTD DBA Buzz Me Up</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-light-gray">
            <p>Last Updated: July 30, 2025</p>
            
            <p>1473212 B.C. LTD DBA Buzz Me Up ("We," "Us," or "Our") is committed to protecting your privacy. This Privacy Policy explains how We collect, use, disclose, and safeguard your information when you use our Buzz Me Up iOS app and related services (collectively, the "Service"). By using the Service, you consent to the practices described in this Privacy Policy. If you do not agree, please do not use the Service.</p>
            
            <p>We operate in the United States and Canada and comply with applicable data protection laws, including but not limited to the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada, provincial privacy laws (e.g., British Columbia's Personal Information Protection Act), the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), and other state-specific laws such as the Colorado Privacy Act (CPA), Connecticut Data Privacy Act (CTDPA), and similar regulations. This Policy is designed to meet or exceed these requirements.</p>
            
            <p>Please note that We do not store transcripts of calls or similar audio/video data; any such communications are handled in real-time without retention.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information to provide, maintain, and improve the Service. Information may be collected directly from you or automatically through your use of the Service.</p>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">a. Personal Information</h3>
            <p>(information that identifies or relates to you as an individual):</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Contact Details: Name, email address, phone number, and any other information you provide during account creation or use.</li>
              <li>User-Generated Data: Access control data, including digital access codes, intercom usage logs, notifications, and preferences associated with your account.</li>
              <li>Location Information: Precise or approximate location data (e.g., building addresses, room numbers, or geolocation if enabled) necessary for Service functionality, such as granting access.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">b. Non-Personal Information</h3>
            <p>(aggregated or anonymized data that does not identify you):</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Usage Data: Device information (e.g., IP address, browser type, operating system, device identifiers), activity logs (e.g., login times, intercom interactions), and analytics data.</li>
              <li>Technical Data: Information about your interactions with the Service, such as pages viewed, time spent, and error reports.</li>
            </ul>
            <p>We do not collect sensitive personal information (e.g., racial/ethnic origin, health data, or biometric data) unless voluntarily provided and necessary, in which case We will obtain explicit consent where required.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Collect Information</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Directly from You: When you create an account, input data, or contact support.</li>
              <li>Automatically: Through app usage, cookies, pixels, or similar technologies (if applicable in the app environment). For example, device data is collected via your smartphone's sensors or APIs.</li>
              <li>From Third Parties: From service providers (e.g., Apple App Store for download details) or building management systems integrated with the Service.</li>
            </ul>
            <p>You can control certain collections (e.g., disable location services in your device settings), but this may limit Service functionality.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your information for legitimate business purposes, based on legal grounds such as your consent, contract necessity, or legitimate interests (e.g., security). Specific uses include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Providing and improving the Service: Enabling intercom access, managing user dashboards, and facilitating notifications.</li>
              <li>Communication: Sending service-related emails or in-app messages (e.g., access requests).</li>
              <li>Security: Detecting and preventing fraud, unauthorized access, or breaches.</li>
              <li>Analytics: Analyzing usage patterns to enhance features and performance (using anonymized data where possible).</li>
              <li>Support: Responding to inquiries, feedback, or disputes.</li>
              <li>Compliance: Meeting legal obligations, auditing, or enforcing terms.</li>
            </ul>
            <p>We do not use your information for automated decision-making that significantly affects you without human oversight or your consent.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Sharing and Disclosure of Your Information</h2>
            <p>We do not sell, rent, or trade your personal information. "Sale" under CCPA/CPRA includes monetary or other valuable consideration; We do not engage in such activities. Disclosures are limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Service Providers: Third parties (e.g., cloud storage like AWS, analytics tools like Google Analytics) who assist with operations, bound by contracts ensuring data protection and limiting use to our instructions.</li>
              <li>Affiliates: Within our corporate group for internal purposes.</li>
              <li>Legal Requirements: To comply with laws, subpoenas, court orders, or government requests; to protect rights, safety, or property; or in emergencies.</li>
              <li>Business Transfers: In mergers, acquisitions, or asset sales, with notice to you.</li>
              <li>With Consent: For any other purpose with your explicit approval.</li>
            </ul>
            <p>For cross-border transfers (e.g., data stored in US servers while operating in Canada), We ensure adequate safeguards, such as standard contractual clauses or reliance on adequacy decisions.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards (e.g., encryption, access controls, regular audits) to protect your information from unauthorized access, loss, or alteration. However, no system is infallible, and We cannot guarantee absolute security. In case of a data breach, We will notify affected users and authorities as required by law (e.g., within 72 hours under certain regulations).</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Data Retention</h2>
            <p>We retain personal information only as long as necessary for the purposes outlined, or as required by law (e.g., tax records for 7 years). Criteria include Service provision, legal compliance, and dispute resolution. When no longer needed, data is securely deleted or anonymized. You can request deletion earlier, subject to exceptions.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Your Rights and Choices</h2>
            <p>Depending on your location and applicable laws, you have rights regarding your personal information. We provide these without discrimination:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access: Request details on what data We hold and how it's used.</li>
              <li>Correction/Rectification: Update inaccurate or incomplete data.</li>
              <li>Deletion/Erasure: Request removal (right to be forgotten), subject to legal retention needs.</li>
              <li>Opt-Out: From marketing communications (unsubscribe links provided) or certain processing (e.g., under CCPA, opt-out of "sales" or sharing for targeted advertising—though We don't sell).</li>
              <li>Limit Use: Under CCPA/CPRA, limit use of sensitive data.</li>
              <li>Portability: Receive your data in a structured, machine-readable format.</li>
              <li>Object/Withdraw Consent: Oppose processing based on legitimate interests or withdraw consent (may affect Service access).</li>
              <li>Non-Discrimination: We won't penalize you for exercising rights.</li>
            </ul>
            <p>To exercise rights, contact Us at <a href="mailto:contact@buzzmeup.com" className="text-blue-400 hover:underline">contact@buzzmeup.com</a> with verification details. We respond within statutory timelines (e.g., 45 days under CCPA, 30 days under PIPEDA). For California residents: We do not sell data; to opt-out anyway or for agent requests, use the contact below. You may appeal denials.</p>
            <p>If unsatisfied, complain to supervisory authorities (e.g., Office of the Privacy Commissioner of Canada, California Privacy Protection Agency).</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <p>The Service does not use cookies or tracking technologies beyond essential device APIs.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Third-Party Links and Services</h2>
            <p>The Service may link to third-party sites (e.g., building intercom providers). We are not responsible for their privacy practices; review their policies.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Children's Privacy</h2>
            <p>The Service is for users 18+. We do not knowingly collect data from children under 13 (or 16 in some jurisdictions). If discovered, We delete it immediately and may terminate accounts. Parents/guardians: Contact Us if you believe your child provided data.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. International Users and Transfers</h2>
            <p>If you are outside USA/Canada, your data may be transferred to and processed in these countries. By using the Service, you consent to such transfers. We ensure compliance with local laws; for EU/UK users (if any), We rely on adequacy or safeguards like EU Standard Contractual Clauses.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p>We may update this Policy to reflect changes in practices or laws. Significant changes will be notified via email, in-app, or prominent notice, with the updated date. Continued use constitutes acceptance. Review periodically.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Contact Us</h2>
            <p>For questions, rights requests, or concerns:</p>
            <p className="mt-2">1473212 B.C. LTD DBA Buzz Me Up</p>
            <p>Email: <a href="mailto:contact@buzzmeup.com" className="text-blue-400 hover:underline">contact@buzzmeup.com</a> (for privacy inquiries, include "Privacy Request" in subject)</p>
            <p>Address: 5th Floor, 905 W Pender St, Vancouver, BC, V6C 1L6</p>
            <p>For California-specific inquiries: Use the above email. We designate this as our "Do Not Sell My Personal Information" link equivalent.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
