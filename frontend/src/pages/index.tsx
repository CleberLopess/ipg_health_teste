import { Button } from "components/Button/Button";
import { CardsDepoiments } from "components/CardsDepoiments/CardsDepoiments";
import { CardsNotices } from "components/CardsNotices/CardsNotices";
import { mock_Button } from "mocks/Button";
import { mock_CardsDepoiments } from "mocks/CardsDepoiments";
import { mock_CardsNotices } from "mocks/CardsNotices";

export default function Home() {
  return (
    <div>
      <CardsNotices {...mock_CardsNotices} />
      <Button {...mock_Button} />
      <CardsDepoiments {...mock_CardsDepoiments} />
    </div>
  );
}
