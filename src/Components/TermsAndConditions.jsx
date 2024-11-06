import React, { useState } from "react";

const TermsAndConditions = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  // Handler for accepting terms
  const handleAccept = () => {
    if (isAccepted) {
      alert("Thank you for accepting the Terms & Conditions.");
      // Here, you can add more functionality, such as navigation or API calls.
    } else {
      alert("Please accept the Terms & Conditions to proceed.");
    }
  };

  // Handler for declining terms
  const handleDecline = () => {
    alert("You have declined the Terms & Conditions.");
    // Add custom logic for decline action.
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 w-full max-w-2xl">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Terms & Conditions
        </h2>

        {/* Content */}
        <div className="h-64 overflow-y-auto p-4 border border-gray-200 rounded-md mb-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="text-gray-700 mt-4">
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa.
          </p>
          <p className="text-gray-700 mt-4">
            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla
            metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
            Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          {/* Add more terms as needed */}
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-4">
          <input
            id="accept-terms"
            type="checkbox"
            className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            onChange={() => setIsAccepted(!isAccepted)}
          />
          <label htmlFor="accept-terms" className="ml-2 text-gray-700">
            I agree to the Terms & Conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
