# Install typescript dependencies:
yarn add typescript @types/jest @types/react @types/react-native @types/react-test-renderer

# Init tsconfig.json
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
    "noImplicitAny": true
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}' > tsconfig.json

# Create jest.config.js
echo "module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};" > jest.config.js

# Rename *.js -> *.ts
cd app/

for file in *.js; do
    mv "$file" "$(basename "$file" .js).ts"
done

echo "adjusting *.ts -> *.tsx"
mv screens/IntroScreen/index.ts screens/IntroScreen/index.tsx

cd ..

mv App.js App.tsx
