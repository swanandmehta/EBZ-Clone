import { Gender } from '../enums/gender';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
}
