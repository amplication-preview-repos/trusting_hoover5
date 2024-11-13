import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationsWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
