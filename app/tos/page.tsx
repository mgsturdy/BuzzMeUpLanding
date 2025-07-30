"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black text-white">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service for 1473212 B.C. LTD DBA Buzz Me Up</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-light-gray">
            <p>Last Updated: July 30, 2025</p>
            
            <p>Welcome to Buzz Me Up! These Terms of Service ("Terms") govern your use of the Buzz Me Up iOS app and related services (collectively, the "Service"). By downloading, accessing, or using the Service, you agree to these Terms. If you do not agree, please do not use the Service.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Interpretation and Definitions</h2>
            <p>For clarity, the following terms have these meanings:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>"Company"</strong> (referred to as "We," "Us," or "Our") means 1473212 B.C. LTD DBA Buzz Me Up, located at 5th Floor, 905 W Pender St, Vancouver, BC, V6C 1L6.</li>
              <li><strong>"Service"</strong> means the Buzz Me Up iOS app and any related features or services.</li>
              <li><strong>"You"</strong> or <strong>"User"</strong> means the individual or entity accessing the Service.</li>
              <li><strong>"Application"</strong> means the Buzz Me Up iOS app downloaded from the Apple App Store.</li>
              <li>Other capitalized terms have their defined meanings as used in these Terms.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Acceptance of Terms</h2>
            <p>By creating an account, downloading, or otherwise using the Service, you agree to these Terms and our Privacy Policy (available at <a href="/privacy" className="text-blue-400 hover:underline">/privacy</a>). You must be at least 18 years old to use the Service. If you are under 18, you may not use the Service.</p>
            <p>Your use of the Service is also subject to the Apple App Store terms, which take precedence in case of conflict.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Description of Service</h2>
            <p>Buzz Me Up provides a digital access control solution for managing building intercom systems through your smartphone. Our Service allows users to manage intercom access for deliveries, visitors, and guests in supported buildings. We do not store transcripts of calls or similar data; refer to our Privacy Policy for details on data handling.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. User Accounts and Security</h2>
            <p>You are responsible for maintaining the confidentiality of your account and login information. You are fully responsible for all activities under your account and must notify us immediately of any unauthorized use at contact@buzzmeup.com.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Acceptable Use and User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the Service only for lawful purposes and in compliance with all applicable laws in the USA and Canada.</li>
              <li>Not misuse the Service in any way that could impair its operation, security, or other users' data (e.g., hacking, unauthorized sharing of access, or introducing malware).</li>
              <li>Only grant intercom access to authorized persons and inform them of applicable building policies.</li>
              <li>Not reverse engineer, decompile, or copy the Service.</li>
              <li>Comply with anti-spam laws; if the Service sends notifications, you consent to receive them (opt-out available in settings).</li>
            </ul>
            <p>Violations may result in immediate termination of your access.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Intellectual Property Rights</h2>
            <p>The Service, including all software, designs, and content, is owned by Us or our licensors and protected by copyright, trademark, and other IP laws in the USA and Canada. We grant you a limited, non-exclusive, non-transferable license to use the Service for personal purposes. You may not copy, modify, or distribute any part of the Service without our written consent. Any feedback you provide becomes our property.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Limitations on Liability for Access and Security</h2>
            <p>We are not responsible for any unauthorized access, security breaches, or incidents resulting from using our Service, including unauthorized entry, personal injury, property damage, or theft. You assume full responsibility for risks associated with granting access. The Service is a convenience tool and not a replacement for on-site security. We disclaim all liability for harm or damage from access granted via the app, whether accidental or intentional.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. No Liability for Door Access Malfunctions</h2>
            <p>We strive for reliable functionality but do not guarantee error-free operation, connectivity, or uninterrupted access. We assume no responsibility for app or intercom malfunctions causing access failures. Use is at your own risk.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p>The Service is provided "AS IS" and "AS AVAILABLE," without warranties of any kind, express or implied. To the fullest extent permitted by law, We disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and accessibility. We aim to comply with accessibility standards (e.g., WCAG) but make no guarantees.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, the Company, its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, use, goodwill, or intangible losses, arising from:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your use or inability to use the Service.</li>
              <li>Unauthorized access or alteration of your data.</li>
              <li>Any other Service-related matters.</li>
            </ul>
            <p>Our total liability shall not exceed the fees you paid Us in the past 12 months (or $100 if no fees). In jurisdictions prohibiting such limitations (e.g., certain US states or Canadian provinces), liability is limited to the extent allowed.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold Us harmless from any claims, losses, or damages arising from your misuse of the Service, violation of these Terms, or granting unauthorized access.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Modification and Termination</h2>
            <p>We may modify, suspend, or discontinue the Service at any time, with or without notice. We may update these Terms; we will notify you via email or in-app notice where feasible. Continued use constitutes acceptance.</p>
            <p>You may terminate by deleting your account. Upon termination, your access ends, and we may delete your data (subject to Privacy Policy).</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Force Majeure</h2>
            <p>We are not liable for failures due to events beyond our control, such as natural disasters, wars, strikes, or government actions.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of British Columbia, Canada, without regard to conflict of laws principles. For US users, federal laws apply where mandatory, and you waive class action rights to the extent permitted.</p>
            <p>Disputes shall be resolved through binding arbitration in British Columbia under the rules of the ADR Institute of Canada, except for small claims court claims. You agree to jurisdiction in BC courts for enforcement.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">15. Export Controls and International Use</h2>
            <p>You agree to comply with US and Canadian export laws, sanctions, and regulations. The Service may not be used in sanctioned countries or by prohibited parties.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">16. Severability and Waiver</h2>
            <p>If any provision is invalid, the rest remain enforceable. No waiver of a breach is a waiver of future breaches.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">17. Entire Agreement</h2>
            <p>These Terms, with our Privacy Policy, constitute the entire agreement between you and Us.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">18. Contact Us</h2>
            <p>For questions:</p>
            <p className="mt-2">1473212 B.C. LTD DBA Buzz Me Up</p>
            <p>Email: contact@buzzmeup.com</p>
            <p>Address: 5th Floor, 905 W Pender St, Vancouver, BC, V6C 1L6</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
