namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }

  export class Java {
    teacher: Teacher;

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava === 0) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}