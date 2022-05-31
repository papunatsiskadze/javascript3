var cinema = {
    theatre:"კინოთეატრი: შმავეა",
    languages: ["ენები: ქართული" , "ინგლისური" , "რუსული"],
    premiere:{
    name:"ფილმი: კუკარაჩა 3D",
    imdb:"შეფასება 9.8"
    },
    films :[
    {name:"ფილმი: დოქტორი სტრეინჯი", imdb:"შეფასება 8.5"},
    {name:"ფილმი: ფორსაჟი 23", imdb:1.05},
    {name:"ფილმი: ბეტმენი", imdb:7.7}
    ]
};

document.getElementById("description1").innerHTML =(cinema.theatre + "</br>" + cinema.languages + "</br>" + cinema.premiere.name + "</br>" +cinema.premiere.imdb);
document.getElementById("description2").innerHTML =(cinema.theatre + "</br>" + cinema.languages + "</br>" + cinema.films[0].name + "</br>" + cinema.films[0].imdb);
document.getElementById("description3").innerHTML =(cinema.theatre + "</br>" + cinema.languages + "</br>" + cinema.films[1].name + "</br>" +cinema.films[1].imdb);
document.getElementById("description4").innerHTML =(cinema.theatre + "</br>" + cinema.languages + "</br>" + cinema.films[2].name + "</br>" + cinema.films[2].imdb);

