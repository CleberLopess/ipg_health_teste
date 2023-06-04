import { ChooseExperience } from "modules/ChooseExperience/ChooseExperience";
import { Header } from "modules/Header/Header";
import { HeroBanner } from "modules/HeroBanner/HeroBanner";
import { Guides } from "modules/Guides/Guides";

//mocks
import { mock_ChooseExperience } from "mocks/ChooseExperience";
import { mock_Header } from "mocks/Header";
import { mock_HeroBanner } from "mocks/HeroBanner";
import { mock_Guides } from "mocks/Guides";
import { Depoiments } from "modules/Depoiments/Depoiments";
import { mock_Footer } from "mocks/Footer";
import { Footer } from "modules/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header {...mock_Header} />
      <HeroBanner {...mock_HeroBanner} />
      <Guides {...mock_Guides} />
      <ChooseExperience {...mock_ChooseExperience} />
      <Depoiments />
      <Footer {...mock_Footer} />
    </div>
  );
}
