import requestAxios from "service/axios";
import { AxiosResponse } from "axios";
import { CardsDepoimentsTypes } from "components/CardsDepoiments/CardsDepoiments.types";

export const getDepoiments = async () => {
  const { data }: AxiosResponse<CardsDepoimentsTypes[]> =
    await requestAxios.get("");

  return data;
};
