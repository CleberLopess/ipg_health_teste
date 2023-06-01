import { ChooseExperience } from "components/modules/ChooseExperience/ChooseExperience";
import { Header } from "components/modules/Header/Header";
import { HeroBanner } from "components/modules/HeroBanner/HeroBanner";
import { Notices } from "components/modules/Notices/Notices";
import { mock_ChooseExperience } from "mocks/ChooseExperience";
import { mock_Header } from "mocks/Header";
import { mock_HeroBanner } from "mocks/HeroBanner";
import { mock_Notices } from "mocks/Notices";

export default function Home() {
  return (
    <div>
      <Header {...mock_Header} />
      <HeroBanner {...mock_HeroBanner} />
      <Notices {...mock_Notices} />
      <ChooseExperience {...mock_ChooseExperience} />
    </div>
  );
}
