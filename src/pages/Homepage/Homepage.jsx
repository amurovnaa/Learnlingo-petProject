import Button from "../../components/Button/Button";
import { useThemes } from "../../context/ThemesContext";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
const HomePage = () => {
  const { theme } = useThemes();

  return (
    <main>
      <Container className="px-16">
        <section className="flex flex-col gap-[24px] mb-6 items-center xl:flex-row ">
          <div className="max-w-[720px] min-h-[530px] bg-[#f8f8f8] pl-[64px] pr-[108px] pt-[98px] pb-16 rounded-[30px]">
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
            <p className="font-normal text-base leading-[137%] tracking-[-0.02em] mb-16 max-w-[471px]">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link to="/teachers">
              <Button className="max-w-[267px] max-h-[60px] px-[88px] py-4">
                Get started
              </Button>
            </Link>
          </div>
          <div className="">
            <img src={theme.image} alt="Character" />
          </div>
        </section>
        <section
          className="px-[122px] py-10 rounded-[30px] border-[1.5px] border-dashed mb-8"
          style={{
            borderColor: theme.mainColor,
          }}
        >
          <ul className="flex flex-col gap-[100px] items-center xl:flex-row ">
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
        <ThemeSelector />
      </Container>
    </main>
  );
};

export default HomePage;
