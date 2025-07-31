import { ARIOToken } from "@ar.io/sdk";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const FROM_ARIO = 1;

export async function arioToMario(fromArio: number = FROM_ARIO) {
	const mbalance = new ARIOToken(fromArio).toMARIO();

	console.log(`ARIO: ${fromArio}, ARIO: ${mbalance} mARIO`);

	if (!main) return mbalance;
}

//

if (main) arioToMario().catch(console.error);
