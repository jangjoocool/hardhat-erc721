import hre from 'hardhat';
import { readFileSync } from 'fs'

async function main() {
    const address = readFileSync(__dirname + '/../.txresult', 'utf8').toString();
    await hre.run("verify:verify", {
        address: address,
        constructorArguments: [
            "ELOBJECT",
            "https://ipfs.io/ipfs/",
        ],
        contract: "contracts/PolygonERC1155.sol:PolygonERC1155",
    })
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});