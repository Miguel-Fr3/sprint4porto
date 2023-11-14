import { NextResponse } from "next/server";
export async function GET(request, { params }) {
    try {
        const response = await fetch("http://localhost:8080/api/login");
        
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }
        
        const users = await response.json();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Erro na solicitação:", error);
        return NextResponse.error(error.message, 500); 
    }
}
