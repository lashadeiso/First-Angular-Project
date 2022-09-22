export class HomeWork {
  public homeWorkName: string;
  public grade: number;
  public period: Date;
  constructor(name: string, period: string) {
    this.homeWorkName = name;
    this.grade = 0;
    this.period = new Date(period);
  }
}
