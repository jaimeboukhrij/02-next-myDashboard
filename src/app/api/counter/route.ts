import { NextResponse } from 'next/server'

export async function GET (reques: Request) {
  return NextResponse.json({
    method: 'GET',
    count: 100
  })
}
