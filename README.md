# [Tauri](https://v2.tauri.app/) + [SolidJS](https://docs.solidjs.com/) + [TypeScript](https://www.typescriptlang.org/) + [TailwindCSS](https://v3.tailwindcss.com/docs/) + [Shadcn](https://shadcn-solid.com/) Starter Template

A starter template for easy and fast cross platform app development using Tauri + Solid. Comes preconfigured with Vite, TypeScript, Tailwind CSS, Shadcn-Solid components support and HMR (Hot Module Replacement).


## Resources
* [Tauri 2.0](https://v2.tauri.app/) - Framework for building tiny, fast binaries for all major desktop and mobile platforms
* [Tailwind 3](https://v3.tailwindcss.com/docs/) - A utility-first CSS framework for rapid UI development.
* [Solid](https://docs.solidjs.com/) - Modern JavaScript framework designed to build responsive and high-performing user interfaces
* [Vite](https://vite.dev/) - Blazing fast frontend build tool powering the next generation of web applications. 
* [Shadcn Solid](https://shadcn-solid.com/) - Beautifully designed components that you can copy and paste into your apps.
* [Tabler Icons](https://tabler.io/docs/icons/libraries/solidjs) - Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful.

## Requirements
* [Tauri Prerequisistes](https://tauri.app/start/prerequisites/) - In order to use tauri you might need to install some dependencies.


## Getting Started

### Clone to Local
```bash
npx degit ACRae/tauri-solid-tailwind-shadcn tauri-app 
cd tauri-app
npm install
```
> [!TIP]
> You can use your package manager of choice like pnpm, yarn, etc.


## Usage

### Development
```bash
npm run tauri dev
```
The initial execution of this may take a few minutes, as the Rust package manager downloads and compiles all necessary packages. However, once these packages are cached, future builds will be significantly quicker.

Any changes you make to the page in the webview will automatically refresh, similar to how a browser reloads. Additionally, modifications to the Rust files will trigger an automatic rebuild, causing your app to restart seamlessly.


### Build
```bash
npm run tauri build
```
The frontend is built into the `dist` folder, which is then embedded into a single binary along with your Rust code.
The resulting binary can be found in `src-tauri/target/release/[app name]`, while the installers will be located in `src-tauri/target/release/bundle/`.


## Acknowledgments
* [tauri-solid-ts-tailwind-vite](https://github.com/AR10Dev/tauri-solid-ts-tailwind-vite) - A big thank you to AR10Dev for sharing excellent code that served as the foundation for this project.


## License
```
MIT License 
Copyright (c) 2025 António Carvalho
```