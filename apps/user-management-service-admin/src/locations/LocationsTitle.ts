import { Locations as TLocations } from "../api/locations/Locations";

export const LOCATIONS_TITLE_FIELD = "city";

export const LocationsTitle = (record: TLocations): string => {
  return record.city?.toString() || String(record.id);
};
