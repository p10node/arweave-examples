import Arweave from "arweave";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const ADDRESS = "eNSUT_JT0yQgrC6TP4k2IlkO-krjIKzAUgxVPZ58fFI";

const arweave = Arweave.init({
	host: "arweave.net",
	port: 443,
	protocol: "https",
});

export async function getBalance(address: string = ADDRESS) {
	const winstonBalance = await arweave.wallets.getBalance(address);
	const arBalance = arweave.ar.winstonToAr(winstonBalance);

	console.log(
		`📬 Wallet address: ${ADDRESS}, balance: ${winstonBalance}, human readable: ${arBalance} AR`,
	);
}

//

if (main) getBalance().catch(console.error);
