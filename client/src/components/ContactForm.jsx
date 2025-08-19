import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full h-full ">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-base font-semibold text-gray-200 pb-4"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-6  text-gray-200  block w-full bg-inherit focus:outline-none border-b border-b-gray-300 caret-white"
        />
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-base font-semibold text-gray-200 py-5"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          className="mt-6 block text-gray-200  w-full bg-inherit focus:outline-none border-b border-b-gray-300 caret-white"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-base font-semibold text-gray-200 py-5"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mt-6 text-gray-200 block w-full bg-inherit focus:outline-none border-b border-b-gray-300 caret-white"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-base font-semibold text-gray-200 py-5"
        >
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          className="mt-1 block w-full text-gray-200  focus:outline-none  caret-white bg-inherit border-b border-b-gray-300"
        ></textarea>
      </div>
      {/* Privacy Checkbox */}
      <div className="w-full pt-4 flex items-center gap-2 pb-6">
        <input type="checkbox" name="privacy" className="blue-500 w-4 h-4" />
        <label
          htmlFor="privacy"
          className="text-gray-200 text-base font-medium"
        >
          By clicking, you are confirming that you have read, understood and
          agree to Itekako Privacy policy
        </label>
      </div>

      {/* Submit Button */}
      <div className="w-full  pt-6">
        <button
          type="submit"
          className="px-8  py-3 text-lg border border-gray-200 text-white hover:bg-green-500 hover:text-black rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
