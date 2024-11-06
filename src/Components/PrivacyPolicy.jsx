import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
        </div>

        {/* Content */}
        <div className="h-96 overflow-y-auto p-4 border border-gray-200 rounded-md space-y-4">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              1. Introduction
            </h3>
            <p className="text-gray-700">
              Welcome to [Your Company]. We are committed to protecting your
              personal information and your right to privacy. If you have any
              questions or concerns about our policy, or our practices with
              regards to your personal information, please contact us at
              [contact email or phone].
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2. Information We Collect
            </h3>
            <p className="text-gray-700">
              We collect personal information that you voluntarily provide to us
              when you register on our platform, express an interest in
              obtaining information about us or our products and services, when
              you participate in activities on the platform or otherwise contact
              us.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              3. How We Use Your Information
            </h3>
            <p className="text-gray-700">
              We use personal information collected via our platform for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              4. Sharing Your Information
            </h3>
            <p className="text-gray-700">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows: [Include
              scenarios like business transfers, third-party service providers,
              or legal requirements].
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              5. Security of Your Information
            </h3>
            <p className="text-gray-700">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              6. Policy Changes
            </h3>
            <p className="text-gray-700">
              We may update this privacy policy from time to time in order to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              7. Contact Us
            </h3>
            <p className="text-gray-700">
              If you have questions or comments about this policy, you may
              contact us at: [Contact Information].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
