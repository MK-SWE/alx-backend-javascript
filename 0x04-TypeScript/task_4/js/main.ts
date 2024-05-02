import { Cpp, Java, React, Teacher } from './Subjects';

export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

cpp.teacher = cTeacher;
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.teacher = cTeacher;
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());