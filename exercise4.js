
/* 
Exercise #4 (sugerencia filter() e includes()) 
let student1Courses = ['Math', 'English', 'Programming']; 
let student2Courses = ['Geography', 'Spanish', 'Programming']; 
Create a program that loops over the 2 arrays; if there are any common courses 
print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(courses => {//filter() hacer que recorra cada elemento del primer arreglo
  return student2Courses.includes(courses) /*includes() verifica si el elemento que esta en el segundo arreglo 
     se encuentra en el primero*/
    }
);

console.log(`Common courses are: ${commonCourses}`); 
