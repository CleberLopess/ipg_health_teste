import { ChooseExperience } from "modules/ChooseExperience/ChooseExperience";
import { Header } from "modules/Header/Header";
import { HeroBanner } from "modules/HeroBanner/HeroBanner";
import { Notices } from "modules/Notices/Notices";
import { mock_ChooseExperience } from "mocks/ChooseExperience";
import { mock_Header } from "mocks/Header";
import { mock_HeroBanner } from "mocks/HeroBanner";
import { mock_Notices } from "mocks/Notices";
import { CardsDepoiments } from "components/CardsDepoiments/CardsDepoiments";
import { mock_CardsDepoiments } from "mocks/CardsDepoiments";

export default function Home() {
  return (
    <div>
      <Header {...mock_Header} />
      <HeroBanner {...mock_HeroBanner} />
      <Notices {...mock_Notices} />
      <ChooseExperience {...mock_ChooseExperience} />

      <CardsDepoiments {...mock_CardsDepoiments} />
      <CardsDepoiments {...mock_CardsDepoiments} />
      <CardsDepoiments {...mock_CardsDepoiments} />
    </div>
  );
}
