export class EmployeeDetails {
  public id: string;
  public name: string;
  public email: string;
  public contact: string;

  constructor(id: string, name: string, email: string, contact: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.contact = contact;
  }
}
