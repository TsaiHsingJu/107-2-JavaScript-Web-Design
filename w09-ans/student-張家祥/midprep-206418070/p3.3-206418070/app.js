let studentInfo = [
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

studentInfo.forEach(item => {
   item.grade = (item.midterm + item.final) / 2
   if(item.grade >= 90){
       item.letterGrade = 'A'
   }else if( item.grade >= 80){
       item.letterGrade = 'B'
   }else if( item.grade >= 70){
       item.letterGrade = 'C'
   }else if( item.grade >= 60){
       item.letterGrade = 'D'
   }else if( item.grade >= 50){
        item.letterGrade = 'E'
   }else{
       item.letterGrade = 'F'
   }
})

for(let i = 0; i < studentInfo.length; i++){
    console.log(`${studentInfo[i].id}  ${studentInfo[i].midterm} ${studentInfo[i].final} ${studentInfo[i].grade} ${studentInfo[i].letterGrade}`)
}


let sortStudentInfo = studentInfo.sort(function(a , b){
    return b.grade - a.grade
})

console.log('After sorting')

for(let i = 0; i < sortStudentInfo.length; i++){
    console.log(`${sortStudentInfo[i].id}  ${sortStudentInfo[i].midterm} ${sortStudentInfo[i].final} ${sortStudentInfo[i].grade} ${sortStudentInfo[i].letterGrade}`)
}








