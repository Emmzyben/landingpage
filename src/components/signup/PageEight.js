import React, { useState } from "react";
import Image from 'next/image';

function PageEight() {
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
      <div style={{ display: currentStep === 8 ? "block" : "none" }}>
        <div>
          <div style={{ textAlign: "center", padding: "20px", height: "auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                lineHeight: "70px",
                marginBottom: "20px",
              }}
            >
              <Image src="/Logo.jpg" width={200}  height={100} alt='imagery'/>
            </div>
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              Setting up account{" "}
            </h1>
            <br />
            <p>
              Stay tuned as we prepare your experience. The journey begins
              shortly.
            </p>
            <Image src="/loading.jpg" width={300} height={100} alt='imagery'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageEight;
