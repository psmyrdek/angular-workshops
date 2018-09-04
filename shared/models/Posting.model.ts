import { Company } from "./Company.model";
import { JobAd } from "./JobAd.model";
import { PostingType } from "../enums/PostingType.enum";

export class Posting {
    id: number;
    name: string;
    refNumber: string;
    releasedDate: Date;
    location: string;
    company: Company;
    jobAd: JobAd;
    type: PostingType;
}