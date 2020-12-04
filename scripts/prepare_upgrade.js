async function main() {
  const proxyAddress = '0x58f667913A862B9e8BC675De2552026220D9cd52';

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at:", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
