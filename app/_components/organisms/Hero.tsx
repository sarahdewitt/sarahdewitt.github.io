import AnchorButton from "../atoms/AnchorButton";
import DefaultSection from "../atoms/DefaultSection";
import Title from "../atoms/Title";

export default function Hero() {
  return (
    <DefaultSection id="Hero">
        <Title />
        <span className="md:float-right invisible md:visible">
          <AnchorButton
            link={"/"}
            text={"Scroll to View More"}
            src={"/point-down.png"}
            alt={"Point Right"}
          />
        </span>
    </DefaultSection>
  );
}
