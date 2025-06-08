
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto container-padding py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button size="lg" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Main Website
              </Button>
            </Link>
          </div>
          
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-8 text-gray-900">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Effective Date: June 6th 2025</p>
              <p>
                Welcome to RawMaterialPredictive.com. These Terms of Service ("Terms") govern your access to and use of our website and the predictive analytics services for raw materials we provide (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Description of Service</h2>
              <p>
                RawMaterialPredictive.com provides a business-to-business (B2B) Software-as-a-Service (SaaS) platform that offers predictive analytics for various raw materials. Our services may include, but are not limited to, forecasts on material pricing, availability, quality, and other related market trends based on proprietary algorithms and data analysis. The specific features and functionalities of the Services are as described on our Website and may be updated from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
              <p>To access certain features of our Services, you may be required to create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate, current, and complete information during the registration process.</li>
                <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
                <li>Promptly notify us if you discover or otherwise suspect any security breaches related to the Services.</li>
                <li>Be responsible for all activities that occur under your account, whether or not you have authorized them.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p>
                You agree to use the Services in compliance with all applicable local, state, national, and international laws and regulations. You are solely responsible for all data, information, and other content ("User Content") that you upload, post, or otherwise transmit via the Services. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the Services for any illegal or unauthorized purpose.</li>
                <li>Interfere with or disrupt the integrity or performance of the Services or the data contained therein.</li>
                <li>Attempt to gain unauthorized access to the Services or its related systems or networks.</li>
                <li>Use the Services to store or transmit infringing, libelous, or otherwise unlawful or tortious material.</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>
                All rights, title, and interest in and to the Services and its components, including all related intellectual property rights, will remain with and belong exclusively to RawMaterialPredictive.com. You are granted a limited, non-exclusive, non-transferable license to access and use the Services for your internal business purposes, subject to these Terms. You shall not copy, modify, or create derivative works based on the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
              <p>
                "Confidential Information" means all information disclosed by one party to the other, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. We will not disclose your Confidential Information to any third party without your prior written consent, except as required by law. We will take reasonable measures to protect the secrecy of and avoid disclosure and unauthorized use of your Confidential Information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Privacy</h2>
              <p>
                Our Privacy Policy, which is incorporated by reference into these Terms, describes how we collect, use, and disclose your data. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. RAW MATERIALPREDICTIVE.COM DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. THE PREDICTIONS AND ANALYTICS PROVIDED BY THE SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE THE SOLE BASIS FOR ANY BUSINESS DECISIONS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL RAW MATERIALPREDICTIVE.COM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (III) ANY CONTENT OBTAINED FROM THE SERVICES; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless RawMaterialPredictive.com and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of [Your State], United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at jamie@rawmaterialpredictive.com or eshaan@rawmaterialpredictive.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
