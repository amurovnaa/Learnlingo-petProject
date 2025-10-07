import Button from "../../components/Button/Button";
import { useThemes } from "../../context/ThemesContext";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
const HomePage = () => {
  const { theme } = useThemes();

  return (
    <main>
      <Container className="xl:px-16">
        <section className="flex flex-col gap-[24px] mb-6 items-center lg:flex-row ">
          <div className="max-w-[720px] min-h-[530px] bg-[#f8f8f8] px-8 py-16 sm:pl-[64px] sm:pr-[108px] sm:pt-[98px] sm:pb-16 rounded-[30px]">
            <h1 className="font-medium text-[48px] leading-[1.17] tracking-[-0.02em] mb-[32px]">
              Unlock your potential with the best{" "}
              <span className="relative inline-block">
                <span
                  className={`absolute top-2.5 left-0 right-0 bottom-0 w-[195px] h-10 rounded-lg transition-colors duration-300 ${theme.highlightBg}`}
                ></span>
                <span className="relative italic font-normal">language</span>
              </span>
              <span className="ml-4">tutors</span>
            </h1>
            <p className="font-normal text-base leading-[1.37] tracking-[-0.02em] mb-16 max-w-[471px]">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link to="/teachers">
              <Button className="max-w-[267px] px-10 lg:max-h-[60px] sm:px-[88px] py-4">
                Get started
              </Button>
            </Link>
          </div>
          <div className="w-full lg:w-[568px]">
            <img src={theme.image} alt="Character" className="w-full" />
          </div>
        </section>
        <section
          className="relative px-[60px] py-10 rounded-[30px] mb-8 xl:px-[122px] overflow-hidden"
          style={{
            "--dash-color": theme.mainColor,
          }}
        >
          <div
            className="absolute inset-0 rounded-[30px] pointer-events-none"
            style={{
              border: "2px dashed var(--dash-color)",
              WebkitMask:
                "radial-gradient(transparent 98%, black 99%) content-box, radial-gradient(black 98%, transparent 99%)",
              maskComposite: "exclude",
            }}
          />
          <ul className="flex flex-col gap-10 items-center lg:flex-row lg2:gap-[100px]">
            <li className="flex flex-row gap-4">
              <span className="font-medium text-[28px] leading-[1.14] tracking-[-0.02em]">
                32,000 +
              </span>
              <span className="font-normal text-sm leading-[1.29] tracking-[-0.02em] text-[rgba(18,20,23,0.7)] max-w-[96px]">
                Experienced tutors
              </span>
            </li>
            <li className="flex flex-row gap-4">
              <span className="font-medium text-[28px] leading-[1.14] tracking-[-0.02em]">
                300,000 +
              </span>
              <span className="font-normal text-sm leading-[1.29] tracking-[-0.02em] text-[rgba(18,20,23,0.7)]  max-w-[96px]">
                5-star tutor reviews
              </span>
            </li>
            <li className="flex flex-row gap-4">
              <span className="font-medium text-[28px] leading-[1.14] tracking-[-0.02em]">
                120 +
              </span>
              <span className="font-normal text-sm leading-[1.29] tracking-[-0.02em] text-[rgba(18,20,23,0.7)]  max-w-[74px]">
                Subjects taught
              </span>
            </li>
            <li className="flex flex-row gap-4">
              <span className="font-medium text-[28px] leading-[1.14] tracking-[-0.02em]">
                200 +
              </span>
              <span className="font-normal text-sm leading-[1.29] tracking-[-0.02em] text-[rgba(18,20,23,0.7)]  max-w-[74px]">
                Tutor nationalities
              </span>
            </li>
          </ul>
        </section>
      </Container>
    </main>
  );
};

export default HomePage;
