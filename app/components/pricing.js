const Pricing = () => {
  return (
    <div className="bg-[#3958F2] px-[6.25vw] py-[9.3vw] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-[5vw] font-semibold leading-[120%] tracking-[-0.28px] text-center">
          Pricing Plans
        </h1>
        <p className="text-[1.25vw] font-light leading-[160%] text-white tracking-[0.0125vw] w-[51vw]">
          Get personalized lessons on Zoom with mentors. Customized test prep,
          lectures, problem-solving, and study strategies based on your goals.
          After each session, mentors set action items, assign homework, and
          share lecture resources for review.
        </p>
      </div>
      <div className="flex flex-row mt-[5vw] gap-[1.25vw]">
        <div
          style={{
            background: "linear-gradient(90deg, #FEF5E5 0%, #C8A703 100%)",
          }}
          className="rounded-[1.875vw] h-[23vw] w-[43vw] flex flex-col justify-between  p-[2.5vw] text-[#332B00]"
        >
          <p className="text-[1.1vw] font-semibold">Gold</p>
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-[4.5vw]">
              <h1 className="text-[4.5vw] font-semibold leading-[105%]">$70</h1>
              <p className="text-[2.25vw] font-semibold tracking-[-0.255px] leading-[120%]">
                per hour
              </p>
            </div>
            <div
              style={{
                background: "rgba(51, 43, 0, 0.20)",
              }}
              className="bg-black h-[6vw] w-[1px] mr-[4.5vw]"
            />
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  1 Student
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  Gold Mentor
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  1 officer hour/week
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] rounded-full bg-[#332B00] p-[1vw] font-semibold text-white text-[1vw] flex items-center justify-center">
            Claim 1-Hour Free Tutoring
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(90deg, #F0F0F0 0%, #A0A0A0 100%)",
          }}
          className="rounded-[1.875vw] h-[23vw] w-[43vw] flex flex-col justify-between  p-[2.5vw] text-[#25272C]"
        >
          <p className="text-[1.1vw] font-semibold">Gold</p>
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-[4.5vw]">
              <h1 className="text-[4.5vw] font-semibold leading-[105%]">$90</h1>
              <p className="text-[2.25vw] font-semibold tracking-[-0.255px] leading-[120%]">
                per hour
              </p>
            </div>
            <div
              style={{
                background: "rgba(37, 39, 44, 0.20)",
              }}
              className="bg-black h-[6vw] w-[1px] mr-[4.5vw]"
            />
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  1 Student
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  Platinum Mentor
                </p>
              </div>
              <div className="flex flex-row items-center">
                <img
                  src="/icons/check-circle.svg"
                  className="w-[1.15vw] h-[1.15vw]"
                />
                <p className="text-[1.15vw] ml-[1.15vw] font-light">
                  1 officer hour/week
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] rounded-full bg-[#25272C] p-[1vw] font-semibold text-white text-[1vw] flex items-center justify-center">
            Claim 1-Hour Free Tutoring
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
