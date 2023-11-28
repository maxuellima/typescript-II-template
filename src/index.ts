// PRÁTICA GUIADA - Parte 1
// Crie um sistema de cadastro de usuários que contenha:

// 1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;

export type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string | number

}
// 2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;

//2.1 Criando enum
//PRÁTICA GUIADA - Parte 2
//1. Enum com valores ADMIN e NORMAL e atribua ã propriedade permission de AdminAccount e NormalAccount;
//2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
//3. Um array de usuários que permite guardar apenas usuários do tipo Acccount;

enum USER_ROLES {
    ADMIN = "admin",
    NORMAL = "normal"
}

export type AdminAccount = {
    account: string,
    permission: USER_ROLES
}

export type NormalAccount = {
    account: string,
    permission: USER_ROLES
}

//Intersection type, unindo o TPerson e o AdminAccount
type AdminUser = TPerson & AdminAccount

//Intersection type, unindo o TPerson e o NormalAccount

type NormalUser = TPerson & NormalAccount


// 3. Crie exemplos de usuários Admin e Normal;
const user1: AdminUser ={
    id: "u001",
    name: "Max",
    email: "maxuel@gmail.com",
    password: 123456,
    account: "admin",
    permission: USER_ROLES.ADMIN
}

const user2: NormalUser = {
    id: "u002",
    name: "Alyne",
    email: "Alyne@gmail.com",
    password: 654321,
    account: "normal",
    permission: USER_ROLES.NORMAL
}

const users: AdminUser[] | NormalUser[] = [
    user1,
    user2
]
// const users: Array<AdminUser| NormalUser> = [
//     user1,
//     user2
// ]

console.log(users)

