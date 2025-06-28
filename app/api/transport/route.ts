/** @format */

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const type = searchParams.get("condition");
		console.log(type);
		const transports = await prisma.gomelTransport.findMany({
			include: {
				startingPoint: {
					select: {
						name: true,
						shortName: true,
					},
				},
				finalPoint: {
					select: {
						name: true,
						shortName: true,
					},
				},
			},
			where: type === "Bus" || type === "TaxiBus" ? { type: type as "Bus" | "TaxiBus" } : {},
		});

		return NextResponse.json(transports);
	} catch (error) {
		return NextResponse.json({ error: "Error Request" }, { status: 500 });
	}
}
