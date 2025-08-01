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

## Official Documents & References

- Arweave JS https://github.com/ArweaveTeam/arweave-js
- ANS-104 Bundles https://github.com/DHA-Team/arbundles
- AO aoconnect https://cookbook_ao.arweave.net/guides/aoconnect/aoconnect.html  
- AR.IO SDK https://docs.ar.io/ar-io-sdk
- Wayfinder SDK https://docs.ar.io/wayfinder
- Turbo SDK https://docs.ardrive.io/docs/turbo/turbo-sdk/
- AR.IO GraphQL https://docs.ar.io/build/guides/gql (https://arweave.net/graphql)
- Wander Connect https://docs.wander.app/wander-connect/intro
- SmartWeave https://github.com/ArweaveTeam/SmartWeave

## Usage

### Scripts

You can modify the parameters directly in each script file to use them immediately, or integrate the logic into your more complex applications.

| Command                                                                                           | Protocol | Category    | Description                                                                                                                         |
|---------------------------------------------------------------------------------------------------|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `bun scripts/generate-wallet.ts` [🔗](scripts/generate-wallet.ts)                                 | Arweave  | Wallet      | Generates a new wallet into the `wallets` folder. Make sure to save the generated key safely.                                       |
| `bun scripts/get-network-info.ts` [🔗](scripts/get-network-info.ts)                               | Arweave  | Blockchain  | -                                                                                                                                   |
| `bun scripts/get-curent-block.ts` [🔗](scripts/get-current-block.ts)                              | Arweave  | Blockchain  | -                                                                                                                                   |
| `bun scripts/get-block-data.ts` [🔗](scripts/get-block-data.ts)                                   | Arweave  | Blockchain  | -                                                                                                                                   |
| `bun scripts/get-transaction-status.ts` [🔗](scripts/get-transaction-status.ts)                   | Arweave  | Blockchain  | -                                                                                                                                   |
| `bun scripts/get-transaction-data.ts` [🔗](scripts/get-transaction-data.ts)                       | Arweave  | Blockchain  | -                                                                                                                                   |
| `bun scripts/get-balance.ts` [🔗](scripts/get-balance.ts)                                         | Arweave  | Balance     | Set the `ADDRESS` variable to check the AR balance of any wallet.                                                                   |
| `bun scripts/get-balance-by-key.ts` [🔗](scripts/get-balance-by-key.ts)                           | Arweave  | Balance     | Add your wallet key JSON file to the `wallets` folder (named `<address>.json`), then set the `ADDRESS` variable to get the balance. |
| `bun scripts/send-amount.ts` [🔗](scripts/send-amount.ts)                                         | Arweave  | Transaction | Configure `SENDER_ADDRESS`, `RECEIVER_ADDRESS`, and `BALANCE` to send AR tokens using a wallet JWT.                                 |
| `bun scripts/send-amount-multi-receiver.ts` [🔗](scripts/send-amount-multi-receiver.ts)           | Arweave  | Transaction | -                                                                                                                                   |
| `bun scripts/withdraw-from-multi-wallet.ts` [🔗](scripts/withdraw-from-multi-wallet.ts)           | Arweave  | Transaction | -                                                                                                                                   |
| `bun scripts/upload-file.ts` [🔗](scripts/upload-file.ts)                                         | Arweave  | Upload      | -                                                                                                                                   |
| `bun scripts/get-ario-balance.ts` [🔗](scripts/get-ario-balance.ts)                               | AR.IO    | Balance     | Check the ARIO token balance of a specific address.                                                                                 |
| `bun scripts/send-ario-token.ts` [🔗](scripts/send-ario-token.ts)                                 | AR.IO    | Transaction | Send ARIO tokens. Change the relevant parameters as needed.                                                                         |
| `bun scripts/send-ario-token-multi-receiver.ts` [🔗](scripts/send-ario-token.ts)                  | AR.IO    | Transaction | -                                                                                                                                   |
| `bun scripts/withdraw-ario-from-muitl-wallet.ts` [🔗](scripts/withdraw-ario-from-muitl-wallet.ts) | AR.IO    | Transaction | -                                                                                                                                   |
| `bun scripts/mario-to-ario.ts` [🔗](scripts/mario-to-ario.ts)                                     | AR.IO    | Balance     | Convert mARIO (micro ARIO) to ARIO.                                                                                                 |
| `bun scripts/ario-to-mario.ts` [🔗](scripts/ario-to-mario.ts)                                     | AR.IO    | Balance     | Convert ARIO to mARIO (micro ARIO).                                                                                                 |
| `bun scripts/get-ario-gateways.ts` [🔗](scripts/get-ario-gateways.ts)                             | AR.IO    | Gateway     | -                                                                                                                                   |
| `bun scripts/send-ao-message.ts` [🔗](scripts/send-ao-message.ts)                                 | AO       | Message     | -                                                                                                                                   |
| `bun scripts/get-fiat-to-ar.ts` [🔗](scripts/get-fiat-to-ar.ts)                                   | Turbo    | Currency    | -                                                                                                                                   |
| ...                                                                                               |          |             |                                                                                                                                     |

`-` at description: Todo

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
