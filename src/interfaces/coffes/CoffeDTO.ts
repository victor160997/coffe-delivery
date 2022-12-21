import * as yup from "yup";
import { schemaTagDTO, TagDTO } from "../tags/TagDTO";

export interface CoffeDTO {
  id: number;
  name: string;
  description: string;
  tags: TagDTO[];
  priceInCents: number;
}

export const schemaCoffeDTO = yup.object({
  id: yup.number().integer().defined(),
  name: yup.string().defined(),
  description: yup.string().defined(),
  tags: yup.array(schemaTagDTO).defined(),
  priceInCents: yup.number().defined(),
});
