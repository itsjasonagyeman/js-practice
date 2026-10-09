function getGrade(score){
    if(score >= 80){
        return `Score ${score} gives grade A`
    }else if(score >= 70){
        return `Score ${score} gives grade B`
    }else if(score >= 60){
        return `Score ${score} gives grade C`
    }else if(score >= 50){
        return `Score ${score} gives grade D`
    }else{
        return `Score ${score} gives grade F`
    }
}

console.log(getGrade(80))
console.log(getGrade(79.5))
console.log(getGrade(49))
console.log(getGrade(62))
console.log(getGrade(18))
