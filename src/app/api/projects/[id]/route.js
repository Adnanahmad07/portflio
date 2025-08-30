import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
    const { id } = params;
    try {
        const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [id]);
        if (rows.length === 0) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        return NextResponse.json(rows[0]);
    } catch (err) {
        console.error("DB Error (single project):", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
