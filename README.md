# SmartMenu
Django + Angular WebApp


# Backend:

## Inicializar Python/Venv/Django (virtual environment):

* Tener instalado Python 3.7+
* Pararse en el directiorio "SmartMenu", la raiz.
* Abrir un CMD 
* Ejecutar el script InstalarVenv_Django_DRF.bat

**Al finalizar debe haberse creado una carpeta "venv", además de haberse inicializado Django y DjangoRestFramework**

## Iniciar Django-server // Refrescar Django-server:

* Pararse en el directiorio "SmartMenu", la raiz.
* Abrir un CMD 
* Ejecutar el script Iniciar_RefrescarServerDjango.bat
* Para detener el server, CTRL+C (hasta que se detenga)
* Fijarse que la consola del CMD se haya detenido en la carpeta back/backend
* Desde back/backend, teclear python manage.py createsuperuser
* user = admin, mail = admin@admin.com, pass = admin, confirmar contraseña, yes

**Luego probar localhost:8000/admin con:**

* user: admin
* pass: admin


# Frontend:

## Instalar Node.js
* https://nodejs.org/en/download/

## Instalar Angular
* npm install -g @angular/cli

## Instalar paquetes del proyecto
* cd SmartMenu/front
* npm install

## Levantar el server 
* ng serve

**(deberia quedar en localhost:4200)**
