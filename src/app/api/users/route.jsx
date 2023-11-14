import { NextResponse } from "next/server";

export async function GET(request,{params}) {
    
    const response = await fetch("http://localhost:8080/api/login"); // linkar a nossa api no #
    const users = await response.json();
    
    return NextResponse.json(users);
}