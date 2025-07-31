import Arweave from "arweave";
import fs from "node:fs";
import { detectDirectRun } from "./type";
const main = detectDirectRun(import.meta.main);

//

const defaultArweave = Arweave.init({
	host: "arweave.net",
	port: 443,
	protocol: "https",
});

export async function generateWallet(arweave: Arweave = defaultArweave) {
	const key = await arweave.wallets.generate();
	const address = await arweave.wallets.jwkToAddress(key);

	if (main) {
		fs.writeFileSync(
			`./wallets/${address}.json"`,
			JSON.stringify(key, null, 2),
		);
	}

	console.log("📬 Wallet address:", address);
	console.log(`✅ Wallet generated and saved to ${address}.json`);

	if (!main) {
		return key;
	}
}

//

if (main) generateWallet().catch(console.error);
