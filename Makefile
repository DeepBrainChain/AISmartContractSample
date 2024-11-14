compile:
	npx hardhat compile

deploy:
	npx hardhat run script/deploy_upgradable.ts --network dbcTestnet

verify:
	npx hardhat verify --network dbcTestnet 0xB994cD1B72F7AD1C164dD1DFee9eAca8502D0698

upgrade:
	npx hardhat run script/upgrade.ts --network dbcTestnet

test:
	npx hardhat test
