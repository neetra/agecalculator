function calculateAge(date)
{
    var age='invalid age'
    if(date !== undefined || date !== null || date !== '') {

        var currentDate = new Date();
        var todayDate = currentDate.getDate();
        var todayMonth = currentDate.getMonth();
        var todayYear = currentDate.getFullYear();

        var birthDate, birthMonth, birthYear;


        if(date instanceof Date) {

             birthDate = date.getDate();
             birthMonth = date.getMonth();
             birthYear = date.getFullYear(); 

        }
        else{
         
          var completeBirthDate = date.split(/[/.-]/)  ;      
           birthDate = parseInt( completeBirthDate[0]);
           birthMonth = parseInt(completeBirthDate[1]);
           birthYear= parseInt(completeBirthDate[2]);
              
           if(!ValidateDate(birthDate,birthMonth,birthYear)) {
                  return age;
              }
        }  
        
          //Calculate Actual Age
          if(birthYear <=  todayYear)
          {
            age = (todayYear - birthYear);
            if(birthMonth <= todayMonth)
            {
                if(birthMonth == todayMonth){
                    if(birthDate < todayDate && birthDate !== todayDate)
                    {                   
                                age--;                      
                    }
                }
               
            }
            else{
                age--;
            }
          }      
  
    }   

    return age;
}

function ValidateDate(birthDate,birthMonth, birthYear)
{
 if(!(isNaN(birthDate) || isNaN(birthMonth) || isNaN(birthYear)))
 {
     var maximumNumberOfDaysInMonth =getValidBirthDate(birthMonth, birthYear);
       if(birthDate !== 0 &&  birthDate <=  maximumNumberOfDaysInMonth)
       {
           return true;
       }
    
 }
 
 return false;
}

function getValidBirthDate(birthMonth, birthYear)
{
    var numDays = 0;
    switch (birthMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numDays = 30;
            break;
        case 2:
            if (((birthYear % 4 == 0) && 
                 !(birthYear % 100 == 0))
                 || (birthYear % 400 == 0))
                numDays = 29;
            else
                numDays = 28;
            break;

    }

    return numDays;
}

module.exports = calculateAge
