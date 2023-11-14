import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request, {params}) {
    
    const file  = await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login', 'utf8');

    const id = params.id;

    const usuarios =  await JSON.parse(file);
    
    if(id > 0 && id <= usuarios.usuarios.length){
        return  NextResponse.json(usuarios.usuarios.find((user)=> user.id == id));
    }else{
        return id == 0 ? NextResponse.json(usuarios.usuarios) : NextResponse.redirect("http://localhost:3000/error")
    }
}

//Criando a função do LOGIN
const handleLogin = async (cpf,senha)=>{
    const file  = await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login', 'utf8');
    const usuarios = await JSON.parse(file);

    try{
        for (let x = 0; x < usuarios.usuarios.length; x++) {
            const userFile = usuarios.usuarios[x];

            if(userFile.cpf == cpf && userFile.senha == senha){
                return userFile;
            }
        }
        return null;
    }catch(error){
        console.log(error);
 }
}

//Criando a função do CADASTRO
const handleCadastrar = async (cpf,senha)=>{
    const file  = await  fs.readFile(process.cwd() + 'http://localhost:8080/api/login', 'utf8');
    const usuarios = await JSON.parse(file);

    try{
        
        //Gerando o ID do usuário:
        const id =  (usuarios.usuarios[usuarios.usuarios.length-1].id + 1);

        //Criando o objeto do usuário:
        const user = {
            "id":id,
            "cpf":cpf,
            "senha":senha
        }

        //Adicionando o usuário no array:
        usuarios.usuarios.push(user);

        //Salvando o arquivo:
        await fs.writeFile(process.cwd() + 'http://localhost:8080/api/login', JSON.stringify(usuarios));

        return user;
    }catch(error){
        console.log(error);
 }
}

export async function POST(request, response){
    //Pegando os dados do request com o await e destructuring.
    const {info,cpf,senha} = await request.json();

    console.log(info,cpf,senha);

    if(info == "login"){
        return  NextResponse.json( await handleLogin(cpf,senha));
    } else if(info == "cadastro"){
        return  NextResponse.json( await handleCadastrar(cpf,senha));
    }
    return NextResponse.json({"status":false});
}
