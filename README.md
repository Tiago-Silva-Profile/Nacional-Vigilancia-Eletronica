# NacionalVigilanciaEletronica

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## github pages
ng build --base-href "/Nacional-Vigilancia-Eletronica/"
ng build --output-path docs --base-href Nacional-Vigilancia-Eletronica
ng build --output-path docs --base-href Nacional-Vigilancia-Eletronica --source-map


ng build --output-path docs --base-href / --source-map
npx angular-cli-ghpages --dir=docs


##Docker
##build: 
docker build --no-cache -t national-vigilancia-eletronica .
##Run
docker run -d -p 8080:80 national-vigilancia-eletronica

## Adicionar o arquivo .htaccess dentro do docs para poder gerar corretamente na hostiger

<IfModule mod_rewrite.c>
  RewriteEngine On

  # Defina o diretório base (mude conforme necessário)
  RewriteBase /

  # Permita acesso ao index.html
  RewriteRule ^index\.html$ - [L]

  # Redirecione qualquer requisição que não seja um arquivo ou diretório existente para index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

## 
