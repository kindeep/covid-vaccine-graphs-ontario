import jsonp from "jsonp";
import useSWR from "swr";

const fetcher = (url: string) =>
  new Promise((resolve, reject) => {
    jsonp(
      "https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",
      (error, data) => {
        resolve(data);
      }
    );
  });

export interface VaccineDataRecord {
  report_date: Date;
  previous_day_doses_administered?: number;
  total_doses_administered?: number;
  total_doses_in_fully_vaccinated_individuals?: number;
  total_individuals_fully_vaccinated?: number;
}

export default function useVaccineData() {
  const { data, error }: any = useSWR("/api/user", fetcher);

  const failed = !!error;
  const loading = !data;

  const records: VaccineDataRecord[] = data?.result?.records;

  return { data: records, failed, loading };
}
