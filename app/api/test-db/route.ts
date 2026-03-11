import { NextResponse } from "next/server";
import sequelize from "@/lib/sequelize";

export async function GET() {
  try { 
    await sequelize.authenticate();
    
    return NextResponse.json({
      success: true,
      message: "Connected to Database Successfully via Sequelize!",
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Database Connection Test Failed:", err);
    
    // Masked config for safe debugging
    const dbConfig = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      // Password is intentionally omitted
    };

    return NextResponse.json({
      success: false,
      message: "Database Connection Failed",
      error: err.message,
      config: dbConfig,
      details: "Check if the IP is whitelisted or if you are on the correct VPN."
    }, { status: 500 });
  }
}
