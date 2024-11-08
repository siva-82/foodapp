// Flute price_1P3tYeSFTsYvjEqCNgnuWkcJ 
// keyboard price_1P3taoSFTsYvjEqCJXWWmK32
// guitar price_1P3taCSFTsYvjEqCuZH0e1s4

const foodArray=[
     {
        id:'price_1PNqD2SHweItn0nwfhCasMHJ',
        title:'Apam balik',
        price:50,
        stars:1,
       foodImage:"https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg"
    },
    {
        id:'price_1PNqFSSHweItn0nwsikSNzt5',
        title:'Blackberry Crumble',
        price:50,
        stars:1,
        
       foodImage:'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg'
    },
    {
        id:'price_1PNqFxSHweItn0nwJ0oG66rS',
        title:'Apple Frangipan Tart',
        
        stars:1,
       foodImage:'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
        price:50
    },
    {
        id:"price_1PNqGNSHweItn0nwuYmUcMCB",
        title:"Bakewell tart",
       foodImage:'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
        price:1,
        discount:10,
        stars:3

    },
    {
        id:"price_1PNqHFSHweItn0nwJT5XeHz8",
        title: 'Banana Pancakes', 
       foodImage: 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
        discount:10,
        price:5,
        popular:true,
        stars:5
    },    {
        id:"price_1PNqHVSHweItn0nwjsvoGgQu",
        title: 'Battenberg Cake', 
        discount:10,
       foodImage: 'https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg',
        price:10,
        stars:1
    },{
        id:"price_1PNqHjSHweItn0nwGeQYhUCT",
        title: 'BeaverTails', 
        discount:10,
       foodImage: 'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
        price:1,
        stars:2
    },
    {
        id:"price_1PNqIJSHweItn0nwlkvzv8IX",
        title: 'Blackberry Full', 
       foodImage: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
        price:5,
        
        stars:1
    },    {
        id:"price_1PNqJPSHweItn0nw6322WWgf",
        title: 'Chelsea Buns', 
       foodImage: 'https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg',
        price:10,
        stars:1
    },{
        id:"price_1PNqK5SHweItn0nwZ9PM4Lhd",
        title: 'Honey Yogurt Cheesecake', 
       foodImage: 'https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg',
        price:1,
        popular:true,
        stars:4
    },
    {
        id:"price_1PNqKJSHweItn0nwuW3Y1xkV",
        title: 'Key Lime Pie',
        foodImage: 'https://www.themealdb.com/images/media/meals/qpqtuu1511386216.jpg',
        price:5,
        stars:2,
        popular:true,
    },    {
        id:"price_1PNqKqSHweItn0nwccQkfzxY",
        title: 'Pumpkin Pie',
        foodImage: 'https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg',
        price:10,
        stars:3
    },{
        id:"price_1PNqPySHweItn0nwsZ3YhbQy",
        title: 'Salted Caramel Cheescake', 
       foodImage: 'https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg', 
        price:1,
        stars:2
    },
    {
        id:"price_1PNqQJSHweItn0nwbhCh3iZt",
        title: 'Summer Pudding', 
       foodImage: 'https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg', 
        price:1,
        stars:1
    },    {
        id:"price_1PNqQbSHweItn0nwNAdyxcCS",
        title: 'Peanut Butter Cookies', 
        popular:true,
       foodImage: 'https://www.themealdb.com/images/media/meals/1544384070.jpg', 
        price:10,
        stars:5
    }

]

function getFoodData(id){
let foodData=foodArray.find(food => food.id === id)

if(foodData === undefined){
    console.log("Product data does not exist for ID:" +id)
}
return foodData;
}

export {getFoodData,foodArray}