import { SortOrder } from "../../util/SortOrder";

export type LocationsOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
