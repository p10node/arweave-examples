import { ARIO, ARIOToken, ArweaveSigner, mARIOToken } from "@ar.io/sdk";
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

const arIO = ARIO.init();

export async function sendArioAmount(
	fromAddress: string = FROM_ADDRESS,
	toAddress: string = TO_ADDRESS,
	arioBalance: number = AMOUNT,
) {
	const key = JSON.parse(
		fs.readFileSync(`./wallets/${fromAddress}.json`, "utf-8"),
	);
	const address = await arweave.wallets.jwkToAddress(key);
	const winstonBalance = await arweave.wallets.getBalance(address);
	const arBalance = arweave.ar.arToWinston(winstonBalance);

	if (Number.parseFloat(arBalance) < 0.001) {
		throw `[${address}]: insufficient balance (${arBalance} AR)`;
	}

	const ario = ARIO.mainnet({ signer: new ArweaveSigner(key) });
	const protocolBalance = await arIO.getBalance({ address });

	console.log(
		`address: ${address}, arBalance: ${arBalance}, protocolBalance: ${protocolBalance}`,
	);

	const mBalance = new ARIOToken(arioBalance).toMARIO();

	if (mBalance.isLessThan(new mARIOToken(protocolBalance))) {
		throw `[${address}]: insufficient balance (${protocolBalance} ARIO)`;
	}

	const transaction = await ario.transfer(
		{
			target: toAddress,
			qty: mBalance,
		},
		{
			tags: [
				{
					name: "App-Name",
					value: "p10node/arweave-examples", // optional: change it
				},
			],
		},
	);

	console.log(
		`[${address}] Sent ${new ARIOToken(protocolBalance).toMARIO()} AR to wallet default → Tx: https://viewblock.io/arweave/tx/${transaction.id} ${transaction.result}`,
	);
}

//

if (main) sendArioAmount().catch(console.error);
