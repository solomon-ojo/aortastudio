import React from "react";
import Container from "../../components/Container";
import ContactItem from "../../components/ContactItem";
import ContactSection from "../../components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-black pt-20 z-40 text-white">
      <Container>
        <div className="w-full flex flex-col">
          <div className="w-full min-h-[700px] lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-4">
            {/* Text Section */}
            <div className="flex-1 flex items-center h-full w-full">
              <div className="hidden lg:block text-white">
                <h1 className="text-6xl">Want to build a cool</h1>
                <h1 className="text-6xl py-1">product?</h1>
                <h1 className="text-6xl">Let us help!</h1>
              </div>
              <div className="text-xl md:text-2xl lg:hidden">
                <h1>Want to build a cool product?</h1>
                <h1>Let us help!</h1>
              </div>
            </div>

            {/* Image Grid Section */}
            <div className="flex-1 h-full w-full flex items-center">
              <div className="w-full min-h-[400px] grid grid-cols-2 gap-4">
                <div className="bg-green-700">
                  <img
                    src="/img1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/img3.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/img1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <ContactSection
              className={
                "w-full min-h-screen flex py-20 border-b border-gray-300 bg-black relative z-40"
              }
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
