import Button from "../../components/Button/Button.jsx";
import { useThemes } from "../../context/ThemesContext.jsx";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";
import Container from "../../components/Container/Container";
const HomePage = () => {
  const { theme } = useThemes();

  return (
    <Container>
      <section className="flex flex-col gap-[24px] items-center xl:flex-row ">
        <div className="max-w-[720px] min-h-[530px] bg-[#f8f8f8] pl-[64px] pr-[108px] pt-[98px] pb-16 rounded-[30px]">
          <h1 className="font-medium text-[48px] leading-[1.17] tracking-[-0.02em] mb-[32px]">
            Unlock your potential with the best{" "}
            <span className="relative inline-block">
              <span
                className={`absolute top-2.5 left-0 right-0 bottom-0 w-[195px] h-10 rounded-lg transition-colors duration-300 ${theme.highlightBg}`}
              ></span>
              <span className="relative italic font-normal">language</span>
            </span>
            <span className="ml-4">tutors</span> {/* adds spacing like a tab */}
          </h1>
          <p className="font-normal text-base leading-[137%] tracking-[-0.02em] mb-16 max-w-[471px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.{" "}
          </p>
          <Button className="max-w-[267px] max-h-[60px] px-[88px] py-4">
            Get started
          </Button>
        </div>
        <div className="">
          <img src={theme.image} alt="Character" />
        </div>
      </section>
      <ThemeSelector />
    </Container>
  );
};

export default HomePage;
