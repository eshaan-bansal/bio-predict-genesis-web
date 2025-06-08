
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto container-padding section-padding max-w-4xl">
          <h1 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date: June 7, 2025</strong>
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to RawMaterial Predictive AI (<a href="https://rawmaterialpredictive.com" className="text-blue-600 hover:text-blue-800">https://rawmaterialpredictive.com</a>), operated by RawMaterialPredictive. We are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with our services, or use the RawMaterial Predict AI platform.
              </p>
              <p>
                We understand the critical importance of data privacy in the biotechnology and advanced therapy manufacturing sectors. This policy aims to be transparent about our data practices, particularly concerning the AI elements of our solution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">2. Information We Collect</h2>
              <p>
                We collect information to provide and improve our services to you. The types of information we collect depend on how you interact with our website and platform:
              </p>
              
              <h3 className="font-serif text-xl font-medium text-gray-900 mt-6 mb-3">A. Information You Provide Directly:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Contact Information:</strong> When you fill out forms on our website (e.g., "Request a Demo," "Contact Us"), subscribe to newsletters, or engage in pilot programs, we may collect your name, email address, phone number, company name, job title, and country.</li>
                <li><strong>Account Information:</strong> If you create an account for our platform, we collect login credentials (e.g., username, password hashes).</li>
                <li><strong>Correspondence:</strong> Records of any communications with us, including customer support inquiries.</li>
              </ul>

              <h3 className="font-serif text-xl font-medium text-gray-900 mt-6 mb-3">B. Information Collected Automatically (Website Usage Data):</h3>
              <p>When you visit our website, we may automatically collect certain information about your device and Browse activity:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Log Data:</strong> Your IP address, browser type, operating system, referring URLs, pages viewed, and timestamps.</li>
                <li><strong>Device Information:</strong> Type of device, unique device identifiers, mobile network information.</li>
                <li><strong>Usage Patterns:</strong> How you interact with our website, including navigation paths, features accessed, and time spent on pages.</li>
                <li><strong>Location Data:</strong> General geographical location inferred from your IP address.</li>
              </ul>

              <h3 className="font-serif text-xl font-medium text-gray-900 mt-6 mb-3">C. Information Processed by the RawMaterial Predict AI Platform (Customer Data):</h3>
              <p>The core RawMaterial Predict AI platform processes data provided by our customers (CDMOs and biotech/pharma companies) to deliver its predictive intelligence services. This data typically includes:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Raw Material Data:</strong> Information from Certificates of Analysis (CoAs), internal raw material testing results (from LIMS). This may include quantitative test results, specifications, lot numbers, supplier information, and other attributes of raw materials.</li>
                <li><strong>Process Data:</strong> Data from Manufacturing Execution Systems (MES), electronic batch records (EBRs), sensor data (Critical Process Parameters - CPPs), and Electronic Lab Notebooks (ELNs).</li>
                <li><strong>Outcome Data:</strong> Final product quality data (Critical Quality Attributes - CQAs) from LIMS or Quality Management Systems (QMS), and batch yield information.</li>
              </ul>
              <p>
                While this data relates to manufacturing processes, it may indirectly touch upon sensitive information if, for example, a batch is specifically tied to patient-specific therapies or highly sensitive product information. We process this data strictly on behalf of our customers and in accordance with our contractual agreements with them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              
              <h3 className="font-serif text-xl font-medium text-gray-900 mt-6 mb-3">A. For Website Visitors (Information You Provide Directly & Website Usage Data):</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>To provide and maintain our website and services.</li>
                <li>To respond to your inquiries and fulfill your requests.</li>
                <li>To send you marketing and promotional communications about RawMaterial Predict AI, if you have opted in. You can opt-out at any time.</li>
                <li>To analyze website usage and trends to improve our website's functionality and user experience.</li>
                <li>To ensure the security and integrity of our website.</li>
              </ul>

              <h3 className="font-serif text-xl font-medium text-gray-900 mt-6 mb-3">B. For RawMaterial Predict AI Platform Users (Customer Data):</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>To deliver the core predictive service:</strong> The AI platform uses your raw material, process, and outcome data to identify correlations, predict quality deviations, and flag high-risk material lots.</li>
                <li><strong>To enhance process understanding:</strong> Provide dashboards, analytics tools, and RCA support.</li>
                <li><strong>To improve the AI model (with your consent/anonymization):</strong> Data may be used for model training and improvement, strictly in an anonymized or aggregated form where personal data is absent, or with explicit consent from the customer for specific purposes.</li>
                <li>To provide customer support and technical assistance.</li>
                <li><strong>For internal operational purposes:</strong> Such as system monitoring, performance analysis, and security.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">4. How We Share Your Information</h2>
              <p>We do not sell your personal data. We may share your information in the following circumstances:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>With Your Consent:</strong> We may share your information if you give us explicit permission to do so.</li>
                <li><strong>Service Providers:</strong> We may engage third-party companies and individuals to perform services on our behalf (e.g., website hosting, analytics, email delivery, customer support). These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency request).</li>
                <li><strong>Protection of Rights:</strong> To protect and defend the rights or property of RawMaterial Predictive AI, including enforcing our agreements, policies, and terms of service.</li>
                <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or anonymized data that cannot be reasonably used to identify you. This type of data is used for industry analysis, research, marketing, and other business purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">5. How We Use AI (Artificial Intelligence)</h2>
              <p>RawMaterial Predict AI is an AI-powered solution at its core.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Predictive Analytics:</strong> Our platform employs machine learning algorithms (e.g., multivariate data analysis, regression modeling, classification algorithms) to analyze integrated raw material and process data to predict manufacturing outcomes.</li>
                <li><strong>Data Extraction:</strong> We utilize Optical Character Recognition (OCR) technology, potentially augmented by fine-tuned Large Language Models (LLMs), to digitize and structure data from Certificates of Analysis (CoAs). This process primarily involves extracting technical specifications and quantitative data, not personal information from individuals.</li>
                <li><strong>No Automated Individual Decision-Making:</strong> Our AI provides predictive insights and risk assessments for manufacturing batches and materials. It does not make automated decisions about individuals that produce legal effects concerning them or similarly significantly affect them. All decisions remain within the control of our customers' human operators and quality personnel.</li>
                <li><strong>Data Minimization & Anonymization:</strong> We strive to minimize the collection of personal data by our AI and to process data in an anonymized or pseudonymized form where possible, especially for model training and improvement. Our AI models are primarily trained on technical, process-related data, not personal information.</li>
                <li><strong>Transparency:</strong> We are committed to transparency in our AI practices. This policy outlines the general scope of our AI usage. For specific details on how your organization's data is processed by the AI platform, please refer to your service agreement with us.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">6. Data Security</h2>
              <p>We implement robust technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Encryption:</strong> Data is encrypted both in transit and at rest where appropriate.</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms are in place to ensure only authorized personnel can access data.</li>
                <li><strong>Regular Security Reviews:</strong> Our systems undergo regular security reviews and vulnerability assessments.</li>
                <li><strong>Data Governance:</strong> We maintain strong data governance protocols and ensure data integrity.</li>
                <li><strong>Compliance with Industry Standards:</strong> We strive to align with relevant industry security standards applicable to the biotech and healthcare sectors.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">7. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Website usage data is generally retained for a limited period for analytics and security purposes.</li>
                <li>Customer data processed by the RawMaterial Predict AI platform is retained according to our contractual agreements with our customers, adhering to their data retention policies and relevant regulatory requirements (e.g., GMP guidelines).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">8. Your Data Protection Rights (GDPR & Other Applicable Laws)</h2>
              <p>Depending on your location and applicable data protection laws, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Right to Access:</strong> The right to request copies of your personal data we hold.</li>
                <li><strong>Right to Rectification:</strong> The right to request that we correct any information you believe is inaccurate or incomplete.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> The right to request that we erase your personal data under certain conditions.</li>
                <li><strong>Right to Restrict Processing:</strong> The right to request that we restrict the processing of your personal data under certain conditions.</li>
                <li><strong>Right to Object to Processing:</strong> The right to object to our processing of your personal data under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent for processing, you have the right to withdraw that consent at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the contact details provided below. We will respond to your request in accordance with applicable data protection laws. For data processed by the RawMaterial Predict AI platform on behalf of our customers, you should direct your requests to the respective customer (your employer or the organization that contracted with us).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Purpose:</strong> Cookies are used for website functionality, analyzing website traffic, improving user experience, and remembering your preferences.</li>
                <li><strong>Types of Cookies:</strong> We may use session cookies (temporary, erased when you close your browser) and persistent cookies (remain on your device for a set period or until deleted).</li>
                <li><strong>Your Choices:</strong> You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">10. Third-Party Links</h2>
              <p>
                Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">11. Children's Privacy</h2>
              <p>
                Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-gray-900 mb-4">13. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at: <a href="mailto:Jamie@rawmaterialpredictive.com" className="text-blue-600 hover:text-blue-800">Jamie@rawmaterialpredictive.com</a> or <a href="mailto:Eshaan@rawmaterialpredictive.com" className="text-blue-600 hover:text-blue-800">Eshaan@rawmaterialpredictive.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
