import React from "react";
import Container from "./Container";

const ContactHero = () => {
  return (
    <section className="min-h-screen w-full text-white bg-black">
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
                    src="/contact_img.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/contact_img2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/contact_icon.svg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
