# Install typescript dependencies:
echo "[+] Installing typescript dependencies"
yarn add typescript @types/jest @types/react @types/react-native @types/react-redux @types/react-test-renderer

# Init tsconfig.json
echo "[+] Adding tsconfig.json"
echo '{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}' > tsconfig.json

# Create jest.config.js
echo "[+] Adding jest.config.json"
echo "module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};" > jest.config.js

echo "[√] Completed"