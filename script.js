// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი

 function arr(num1, num2,...nums){
    sum=num1+num2;
    let multiply=1;
    for(const num of nums) {
        multiply *= num;
    }
    const myarr=[sum, multiply];
    return myarr
 }
 console.log(arr (4, 5, 9, 7, 8, 9))  //(2) [9, 4536]

//  დავუშვათ გვინდა ობიექტიდან წავიკითხოთშემდეგი ველი: user.banks[2].address.city.დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთიველი არ არსებობს უნდა დაბრუნდეს undefined

const user = {
    banks: [
      {firstname: 'ანა'},
      {age: 27},
      {address:{city: 'ჭიათურა', street: 'მე-6  #1'}}
    ]
};
function myAddress(user){
    const {banks} = user;
    if (banks && banks.length > 2) {
        const {address } = banks[2];
        const {city,street = {}}  = address;
        return 'address:' + ' ' + 'city:'  +  city + ' ' + 'street:' +  street
    } 
};
console.log(myAddress(user)) //address: citi: ჭიათურა street: მე-6  #1

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ  სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას
// ● გამოიყენეთ (...) ოპერატორი

const original = {
    name: 'anna',
    personality: {
        age: 27
    },
    gamings: ['gaming1', 'gaming2']
}

function clone(obj) {
    return{ ...original,
       personality: {...obj.personality},
       gamings: [...obj.gamings]
    }
}

const copy = clone(original)

original.personality.age = 35

console.log(original.personality.age) //35
console.log(copy.personality.age)  //27


