compile:
	npx hardhat compile

deploy:
	npx hardhat run script/deploy_upgrade.ts --network dbcTestnet

verify:
    npx hardhat  verify  --network dbcTestnet 0xE9E985E88232F12F2780955f0c0b99541Aa3cf37

upgrade:
	npx hardhat run script/upgrade.ts --network dbcTestnet
