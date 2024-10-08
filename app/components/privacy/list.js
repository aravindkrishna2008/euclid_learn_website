import { motion } from "framer-motion";
import Image from "next/image";

const Grid = () => {
  return (
    <section className="relative bg-white text-gray-900 pt-[10vw] pb-[10vw]">
      <div className="flex justify-center items-center min-h-screen p-4">
        <article className="w-full max-w-2xl space-y-16">
          {/* Section: Collection of Personal Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">
              Collection of Personal Information
            </h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Euclid Learn may collect personally identifiable information, such as your full name and email address, to provide requested products or services. We may also collect billing and credit card information for transactions. Your information is used solely for these purposes unless you consent otherwise.
            </p>
          </section>

          {/* Section: Use of Personal Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Use of Personal Information</h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              We use collected information to deliver requested services and inform you about related products or services from Euclid Learn and affiliates.
            </p>
          </section>

          {/* Section: Sharing Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Sharing Information</h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Euclid Learn does not sell or lease customer information. We may share data with trusted partners to provide services, but they are prohibited from using your information for other purposes.
            </p>
          </section>

          {/* Section: Security of Personal Information */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Security of Personal Information</h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              We employ security measures to protect your personal information from unauthorized access or disclosure.
            </p>
          </section>

          {/* Section: Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Euclid Learn reserves the right to update this Privacy Policy periodically. Updates will be posted on our website.
            </p>
          </section>

          {/* Section: Contact Us */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-base leading-6 mb-4 text-gray-500">
              For questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Email: euclidlearn@gmail.com
            </p>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Phone: (408) 706-6234
            </p>
            <p className="text-base leading-6 mb-4 text-gray-500">
              Effective Date: January 1, 2023
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Grid;
