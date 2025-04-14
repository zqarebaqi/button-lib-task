# Interview HomeTask
This repository contains a component library and a Next.js app.

## Structure
- `btn-lib/`: A React + TypeScript library with a Button component, tests, and Storybook.
- `next-btn-app/`: A Next.js app using the Button component.

## Setup
1. Clone the repository:
   ```bash
https://github.com/zqarebaqi/button-lib-task.git  

2.Install and test the component library:

cd btn-lib
pnpm install
pnpm run build
pnpm run test
pnpm run storybook

3.Install and run the Next.js app:
cd ../next-btn-app
pnpm install
pnpm dev

4.Open http://localhost:3000 to see the app.

Note:
The Next.js app depends on btn-lib (linked via file:../btn-lib).
Storybook runs on http://localhost:6006.
Use pnpm for the Next.js app and the library.
