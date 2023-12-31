import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';


function PageSeven() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  //! ================================================================================

  const options = [
    { label: "LinkedIn", value: "linkedin" },
    { label: "Facebook", value: "facebook" },
    { label: "Instagram", value: "instagram" },
    { label: "Affiliate", value: "affiliate" },
    { label: "Twitter(X)", value: "twitter" },
    { label: "Referrals", value: "referrals" },
  ];

  return (
    <>
      <div style={{ display: currentStep === 7 ? "block" : "none" }}>
        <div id="account">
          <div>
            <div>
              <Link href="/home">
                <Image
                  src="/Logo.jpg"
                  width={70}
                  height={100}
                  style={{ marginLeft: "20%", marginTop: "10px" }}
                  alt='imagery'
                />
              </Link>
              <Image
                src="/Frame7568.jpg"
                width={400}
                height={100}
                style={{ marginLeft: "20%", marginTop: "40px" }}
                alt='imagery'
              />
              <div className="flex flex-1 flex-col justify-center px-4 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                  <div>
                    <h1 className="title-font font-bold text-xl text-[#001233] mb-4 mt-10">
                      How did you hear about us?
                    </h1>
                  </div>

                  <div className="mt-10">
                    <div>
                      <form method="POST" className="space-y-6">
                        {/* <Select
                          options={options}
                          styles={{
                            option: (provided, state) => ({
                              ...provided,
                              backgroundColor: state.isFocused
                                ? "#FF595A"
                                : "white",
                              "&:hover": {
                                backgroundColor: "#FF595A",
                              },
                            }),
                          }}
                        /> */}
                      </form>
                    </div>

                    <div style={{ textAlign: "right", marginTop: "15%" }}>
                      <button
                        onClick={handleBack}
                        style={{
                          marginRight: "10px",
                          border: "1px solid #E0E0E0",
                        }}
                        className=" border-0 py-2 px-6 focus:outline-none 
                rounded text-[#001233] font-medium "
                      >
                        {" "}
                        Back
                      </button>

                      <button
                        onClick={handleNext}
                        style={{}}
                        className=" bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
                  hover:bg-[#fe5000] rounded text-[#001233]  font-bold "
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
             <Image src="/Frame750.jpg" width={700} height={700} alt='imagery'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageSeven;
