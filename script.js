var client = {
    age: 26,
    permis: true,
    accident: true,
    datePermis: 3,
    tarif: "",
    nombreAccident: ,
    nbAnne: 2
};

function Agence(membre) {
    var tarifs = {
        1: "bleu",
        2: "vert",
        3: "orange",
        4: "rouge"
    };
    var refus = "vous n'avez pas accès à un tarif";
    // var conditions = {
    //     1: {
    //         age: 25,
    //         permis: true,
    //         datePermis: 2,
    //         accident: true,
    //         nombreAccident: 0
    //     },
    //     2: {
    //         1: {
    //             age: 25,
    //             permis: true,
    //             datePermis: 2,
    //             accident:true
    //         },
    //         2:{
    //             age: 25,
    //             permis: true,
    //             datePermis: 2,
    //             accident:false
    //         }
    //     }
    // }

    if (membre.age <= 25) {
        if (membre.permis) {
            if (membre.datePermis <= 2) {
                if (!membre.accident) {
                    membre.tarif = tarifs[4];
                    return "vous avez accès au tarif rouge";
                } else {
                    return refus;
                }
            } else if (membre.datePermis > 2) {
                if (!membre.accident) {
                    membre.tarif = tarifs[3];
                    return "vous avez accès au tarif orange";
                } else if (membre.accident && membre.nombreAccident == 1) {
                    membre.tarif = tarifs[4];
                    return "vous avez accès au tarif rouge";

                } else {
                    return refus;
                }
            }
        }

    } else if (membre.age > 25) {
        if (membre.datePermis > 2) {
            if (!membre.accident && membre.nombreAccident == 0) {
                membre.tarif = tarifs[2];
                return "vous avez accès au tarif Vert";
            } else if (membre.accident && membre.nombreAccident == 1) {
                membre.tarif = tarifs[3];
                return "vous avez accès au tarif Orange";

            } else if (membre.accident && membre.nombreAccident == 2) {
                membre.tarif = tarifs[4];
                return "vous avez accès au tarif Rouge";
            } else if (membre.accident && membre.nombreAccident > 2) {
                return refus;
            }
        } else if (membre.datePermis <= 2) {
            if (!membre.accident && membre.nombreAccident == 0) {
                membre.tarif = tarifs[3];
                return "vous avez accès au tarif Orange";
            } else if (membre.accident && membre.nombreAccident == 1) {
                membre.tarif = tarifs[4];
                return "vous avez accès au tarif Rouge";

            } else {
                return refus;
            }
        }
    }
}

console.log(Agence(client));

console.log(client);