import Arweave from "arweave";
import fs from "node:fs";
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
	const key = JSON.parse(fs.readFileSync(`./wallets/${address}.json`, "utf-8"));

	const winstonBalance = await arweave.wallets.getBalance(
		await arweave.wallets.jwkToAddress(key),
	);
	const arBalance = arweave.ar.winstonToAr(winstonBalance);

	console.log(
		`📬 Wallet address: ${ADDRESS}, balance: ${winstonBalance}, human readable: ${arBalance} AR`,
	);
}

//

if (main) getBalance().catch(console.error);
