import { Gender } from "../enums/Gender.enum";

export default interface IEmployee {
    id: string|number;
    name: string;
    email: string;
    gender: Gender;
    address: string;
}
