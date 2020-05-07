# Install typescript dependencies:
echo "[+] Installing typescript dependencies"
yarn add typescript @types/jest @types/react @types/react-native @types/react-redux @types/react-test-renderer

# Init tsconfig.json
echo "[+] Adding tsconfig.json"
rm -rf jsconfig.json
cp -v scripts/add-typescript/files/tsconfig.json .

# Create jest.config.js
echo "[+] Adding jest.config.json"
cp -v scripts/add-typescript/files/jest.config.js .

echo "[√] Completed"