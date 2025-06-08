
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button size="lg" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Main Website
                </Button>
              </Link>
            </div>
            
            <h1 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-6">
                  <strong>Cookie Policy for RawMaterialPredictive.com</strong><br />
                  Last Updated: June 7, 2025
                </p>
                
                <p>
                  This Cookie Policy explains how RawMaterialPredictive.com uses cookies and similar technologies to recognize you when you visit our website at https://rawmaterialpredictive.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are cookies?</h2>
                <p>
                  A cookie is a small data file that is placed on your device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why do we use cookies?</h2>
                <p>
                  We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. For example, we use cookies to remember your login details and language preferences. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What types of cookies do we use?</h2>
                <p>
                  The specific types of first-party and third-party cookies served through our Website and the purposes they perform are described below:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4">
                  <li>
                    <strong>Strictly Necessary Cookies:</strong> These cookies are essential to provide you with services available through our Website and to enable you to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website to you, you cannot refuse them without impacting how our Website functions.
                  </li>
                  <li>
                    <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like remembering your login details) may become unavailable.
                  </li>
                  <li>
                    <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
                  </li>
                  <li>
                    <strong>Advertising (Targeting) Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases, selecting advertisements that are based on your interests.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How can you control cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
                </p>
                <p>
                  In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-blue-600 hover:text-blue-800 underline">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-blue-600 hover:text-blue-800 underline">http://www.youronlinechoices.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Where can you get further information?</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:jamie@rawmaterialpredictive.com" className="text-blue-600 hover:text-blue-800 underline">jamie@rawmaterialpredictive.com</a> or <a href="mailto:eshaan@rawmaterialpredictive.com" className="text-blue-600 hover:text-blue-800 underline">eshaan@rawmaterialpredictive.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
