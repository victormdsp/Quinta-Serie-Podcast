module.exports = class Users{
    constructor(id, name, senha){
        this.id = id;
        this.name = name;
        this.senha = senha;
        id++;
    }


}