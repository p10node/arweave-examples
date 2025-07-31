import { mARIOToken } from "@ar.io/sdk";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const FROM_MARIO = 100000;

export async function marioToArio(fromMario: number = FROM_MARIO) {
	const balance = new mARIOToken(fromMario).toARIO();

	console.log(`mARIO: ${fromMario}, ARIO: ${balance} ARIO`);
}

//

if (main) marioToArio().catch(console.error);
