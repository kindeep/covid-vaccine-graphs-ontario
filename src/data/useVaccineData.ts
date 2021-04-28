import jsonp from "jsonp";
import useSWR from "swr";

const fetcher = (url: string) =>
  new Promise((resolve, reject) => {
    jsonp(
      "https://data.ontario.ca/api/3/action/datastore_search?resource_id=8a89caa9-511c-4568-af89-7f2174b4378c&limit=365",
      (error: any, data: any) => {
        resolve(data);
      }
    );
  });

export interface VaccineDataRecord {
  report_date: Date;
  previous_day_doses_administered: number;
  total_doses_administered: number;
  total_doses_in_fully_vaccinated_individuals: number;
  total_individuals_fully_vaccinated: number;
}

export interface ResVaccineDataRecord extends VaccineDataRecord {
  at_least_1: number;
  at_least_1_ratio: number;
}
export interface UnparsedVaccineDataRecord {
  report_date: string;
  previous_day_doses_administered: string;
  total_doses_administered: string;
  total_doses_in_fully_vaccinated_individuals: string;
  total_individuals_fully_vaccinated: string;
}

export const ontario_population = 14.57 * 1000000;

export function subtract(a1: number[], a2: number[]): number[] {
  const res: number[] = [];

  const mxlen = Math.max(a1.length, a2.length);

  for (let i = 0; i < mxlen; i++) {
    const n1 = a1.length > i ? a1[i] : 0;
    const n2 = a2.length > i ? a2[i] : 0;

    res.push((n1 ?? 0) - (n2 ?? 0));
  }

  return res;
}

function multiply(arr: number[], by: number): number[] {
  return arr.map((num) => num * by);
}

export function divide(arr: number[], by: number): number[] {
  return multiply(arr, 1 / by);
}

function parseDataNumAsInt(inp: string | number) {
  if (typeof inp === "number") return inp;
  return inp ? parseInt(inp.replace(/,/g, "")) : 0;
}

function parseRecord(record: UnparsedVaccineDataRecord): VaccineDataRecord {
  return {
    report_date: new Date(record.report_date),
    previous_day_doses_administered: parseDataNumAsInt(
      record.previous_day_doses_administered
    ),
    total_doses_administered: parseDataNumAsInt(record.total_doses_administered),
    total_doses_in_fully_vaccinated_individuals: parseDataNumAsInt(
      record.total_doses_in_fully_vaccinated_individuals
    ),
    total_individuals_fully_vaccinated: parseDataNumAsInt(
      record.total_individuals_fully_vaccinated
    ),
  };
}

export default function useVaccineData() {
  const { data, error }: any = useSWR("/api/user", fetcher);

  const failed = !!error;
  const loading = !data;

  const tempRecords: any[] = data?.result?.records ?? [];

  const records: VaccineDataRecord[] = tempRecords.map(parseRecord);

  const resRecords: ResVaccineDataRecord[] = records.map((record) => {
    const at_least_1 =
      record.total_doses_administered -
      record.total_individuals_fully_vaccinated;
    const at_least_1_ratio = at_least_1 / ontario_population;
    return {
      ...record,
      at_least_1,
      at_least_1_ratio,
    };
  });

  return {
    data: resRecords,
    failed,
    loading,
  };
}
