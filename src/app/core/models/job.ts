import {JobStatus} from "./job-status";

export interface Job {
  id: number;
  summary: string;
  description: string;
  status: JobStatus;
  property_id: number;
}
