const animeName = ["goku","luffy","naruto"];

if(animeName[0] == "goku" && animeName[1] == "luffy" && animeName[2] == "naruto"){   
             animeName[0] = "Goku super-Saiyajin"
             animeName[1] = "Luffy Gear 5"
             animeName[2] = "Kyuubi"
}


for(let nomePersonagem in animeName){
    console.log(animeName[nomePersonagem])
}


