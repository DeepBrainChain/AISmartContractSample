compile:
	npx hardhat compile

deploy:
	npx hardhat run script/deploy_upgradable.ts --network dbcTestnet

verify:
	npx hardhat verify --network dbcTestnet 0x67E39dFCc0700A44fD5896fbD36c6F00D943B936

upgrade:
	npx hardhat run script/upgrade.ts --network dbcTestnet

test:
	npx hardhat test
