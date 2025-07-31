import { ARIO, mARIOToken } from "@ar.io/sdk";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const ADDRESS = "eNSUT_JT0yQgrC6TP4k2IlkO-krjIKzAUgxVPZ58fFI";

const arIO = ARIO.init();

export async function getArioBalance(address: string = ADDRESS) {
	const protocolBalance = await arIO.getBalance({ address });
	const balance = new mARIOToken(protocolBalance).toARIO();

	console.log(
		`📬 Wallet address: ${address}, balance: ${protocolBalance}, human readable: ${balance} ARIO`,
	);
}

//

if (main) getArioBalance().catch(console.error);
