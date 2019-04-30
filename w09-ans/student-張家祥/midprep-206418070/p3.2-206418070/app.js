let num  = prompt('請輸入一個正整數')



getGrade(num)
function getGrade(num){
    let grade
    let grades = []
    let sum = 0
    if(num){
        for(let i = 1; i <= num; i++){
            grade = Math.floor(Math.random()*100)
            grades.push(grade)
        }
        console.log(grades)
        let maxgrade = grades.reduce(function(a,b){
            return Math.max(a, b)
        })
        let mingrade = grades.reduce(function(a,b){
            return Math.min(a, b)
        })
        let sumgrade = grades.reduce(function(a , b){
            return a+b
        })
        let average = sumgrade / (grades.length)
        console.log(sumgrade)
        console.log(average)

        console.log(`
                     N = ${num} 
                     [${grades}]
                     max: ${maxgrade}
                     min: ${mingrade}
                     sum: ${sumgrade}
                     average: ${average}   
                    `)
        // let average = sumgrade / (grades.length)
        // console.log(average)
    }
}