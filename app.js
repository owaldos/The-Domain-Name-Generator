var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

const domainNameGenerator =()=>{
    for (const i of pronoun) {
        for (const i2 of adj) {
            for (const i3 of noun) {
               console.log( i+i2+i3+".com")
            }
        }
    }
}
               
domainNameGenerator()
           
       