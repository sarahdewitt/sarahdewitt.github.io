import AnchorButton from "../atoms/AnchorButton/AnchorButton";
import DefaultSection from "../atoms/DefaultSection";
import Title from "../atoms/Text/Title";

export default function Hero() {
  return (
    <DefaultSection id="Hero">
      <Title />
      {/* <span className="md:float-right invisible md:visible">
        <AnchorButton
          link={"/"}
          text={"Scroll to View More"}
          src={"/point-down.png"}
          alt={"Point Right"}
        />
      </span> */}
    </DefaultSection>
  );
}
