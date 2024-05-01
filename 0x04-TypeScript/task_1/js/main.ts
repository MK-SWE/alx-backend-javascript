interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  yearsOfExperience?: number;
  [otherProp: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
