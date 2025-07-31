import Arweave from "arweave";
import fs from "node:fs";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const AMOUNT = 0;
const FROM_ADDRESS = "eNSUT_JT0yQgrC6TP4k2IlkO-krjIKzAUgxVPZ58fFI";
const TO_ADDRESS = "eNSUT_JT0yQgrC6TP4k2IlkO-krjIKzAUgxVPZ58fFI";

const arweave = Arweave.init({
	host: "arweave.net",
	port: 443,
	protocol: "https",
});

export async function sendAmount(
	fromAddress: string = FROM_ADDRESS,
	toAddress: string = TO_ADDRESS,
	arBalance: number = AMOUNT,
) {
	const key = JSON.parse(
		fs.readFileSync(`./wallets/${fromAddress}.json`, "utf-8"),
	);

	const address = await arweave.wallets.jwkToAddress(key);
	const winstonBalance = await arweave.wallets.getBalance(address);
	const currentArBalance = arweave.ar.arToWinston(winstonBalance);

	if (Number.parseFloat(currentArBalance) < 0.001) {
		throw `[${address}]: insufficient balance (${currentArBalance} AR)`;
	}

	const amountToSend = arBalance - 0.0003;
	const transaction = await arweave.createTransaction(
		{
			target: toAddress,
			quantity: arweave.ar.arToWinston(amountToSend.toFixed(12)),
		},
		key,
	);

	await arweave.transactions.sign(transaction, key);
	const response = await arweave.transactions.post(transaction);

	console.log(
		`[${fromAddress}] Sent ${amountToSend.toFixed(6)} AR to [${toAddress}] → Tx: https://viewblock.io/arweave/tx/${transaction.id}`,
	);
	console.log(response.statusText);
}

//

if (main) sendAmount().catch(console.error);
