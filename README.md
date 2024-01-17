<!-- GETTING STARTED -->
## Getting Started

This project was written using the Deno runtime in order to utilize TypeScript out of the box.

cd into folder and run tests to see result.

### Prerequisites

Install the Deno runtime on your system using one of the commands below. Note
that there are a number of ways to install Deno - a comprehensive list of
installation options can be found
[here](https://docs.deno.com/runtime/manual/getting_started/installation).

Shell (Mac, Linux):

```sh
curl -fsSL https://deno.land/install.sh | sh
```

PowerShell (Windows):

```powershell
irm https://deno.land/install.ps1 | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno) (Mac):

```sh
brew install deno
```

[Chocolatey](https://chocolatey.org/packages/deno) (Windows):

```powershell
choco install deno
```

### Run Program

1. Clone the repo
   ```sh
   git clone https://github.com/street2geek/rovers
   ```
2. Run tests
   ```sh
   deno test --allow-read
   ```
3. Run app
   ```sh
   deno run -A main.ts
   ```