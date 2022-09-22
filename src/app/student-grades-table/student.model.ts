import { HomeWork } from './home-work.model';

export class Student {
  public fullName: string;
  public homeWorks: HomeWork[];
  constructor(fullName: string) {
    this.fullName = fullName;
    this.homeWorks = [];
  }
}
