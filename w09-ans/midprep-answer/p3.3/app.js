let studInfo = [
  {  
      id:1,
      midterm: 80, 
      final: 90, 
      grade: 0, 
      letterGrade: null 
  },
  {
      id:2, 
      midterm: 40, 
      final: 60, 
      grade: 0, 
      letterGrade: null

  },
  {
      id:3, 
      midterm: 70, 
      final: 80, 
      grade: 0, 
      letterGrade: null

  },
  {
      id:4, 
      midterm: 60, 
      final: 65, 
      grade: 0, 
      letterGrade: null
  },
  {
      id:5, 
      midterm: 90, 
      final: 95, 
      grade: 0, 
      letterGrade: null
  }
]

studInfo.forEach(function(s){
   s.grade = (s.midterm + s.final)/2;
   if(s.grade >= 90) s.letterGrade = 'A';
   else if(s.grade >= 80) s.letterGrade = 'B';
   else if(s.grade >= 70) s.letterGrade = 'C';
   else if(s.grade >= 60) s.letterGrade = 'D';
   else s.letterGrade = 'F';
});

console.log("id midterm final grade  letterGrade\n");
studInfo.forEach(function(s){
   console.log(" %d    %d    %d    %f        %s\n", s.id, s.midterm, s.final, s.grade, s.letterGrade);
});

