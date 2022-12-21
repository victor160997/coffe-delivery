import * as yup from "yup";

export interface TagDTO {
  name: string;
}

export const schemaTagDTO = yup.object({
  name: yup.string().defined(),
});
