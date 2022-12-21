import * as yup from "yup";
import { schemaCoffeDTO } from "../interfaces/coffes/CoffeDTO";
import { connection } from "./connection";

export const getCoffes = async () => {
  const { data: coffes } = await connection.get("coffes");

  return yup.array(schemaCoffeDTO).validateSync(coffes);
};
