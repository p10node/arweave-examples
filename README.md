# Arweave Examples

This repository contains example scripts related to the **Arweave ecosystem**, including tools and use cases from **AO**, **AR.IO**, and more. It's meant to provide you with practical and ready-to-use code snippets.

I’ll be adding more examples daily to make this collection as complete as possible.  

*(Eventually, I may turn this into a utility library)*

## System Requirements

- [`bun`](https://bun.com/docs/installation)
- [`pnpm`](https://pnpm.io/installation)

## Install Dependencies

Clone this repository:

```bash
git clone git@github.com:p10node/arweave-examples.git
```

Then install the dependencies:

```bash
pnpm install
```

## Usage

### Scripts

You can modify the parameters directly in each script file to use them immediately, or integrate the logic into your more complex applications.

| Command                             | Chain   | Category    | Description                                                                                                                         |
|-------------------------------------|---------|-------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `bun scripts/generate-wallet.ts`    | Arweave | Wallet      | Generates a new wallet into the `wallets` folder. Make sure to save the generated key safely.                                       |
| `bun scripts/get-balance.ts`        | Arweave | Balance     | Set the `ADDRESS` variable to check the AR balance of any wallet.                                                                   |
| `bun scripts/get-balance-by-key.ts` | Arweave | Balance     | Add your wallet key JSON file to the `wallets` folder (named `<address>.json`), then set the `ADDRESS` variable to get the balance. |
| `bun scripts/send-amount.ts`        | Arweave | Transaction | Configure `SENDER_ADDRESS`, `RECEIVER_ADDRESS`, and `BALANCE` to send AR tokens using a wallet JWT.                                 |
| `bun scripts/get-ario-balance.ts`   | AR.IO   | Balance     | Check the ARIO token balance of a specific address.                                                                                 |
| `bun scripts/send-ario-token.ts`    | AR.IO   | Transaction | Send ARIO tokens. Change the relevant parameters as needed.                                                                         |
| `bun scripts/mario-to-ario.ts`      | AR.IO   | Balance     | Convert mARIO (micro ARIO) to ARIO.                                                                                                 |
| `bun scripts/ario-to-mario.ts`      | AR.IO   | Balance     | Convert ARIO to mARIO (micro ARIO).                                                                                                 |
| ...                                 |         |             |                                                                                                                                     |

### Views

_To be added soon._

### Contracts

_To be added soon._

## Todo List

- [ ] Add as many scripts as possible to cover common needs, feel free to contribute!
- [ ] Add view-related examples.
- [ ] Add smart contract-related examples.

## License

MIT
