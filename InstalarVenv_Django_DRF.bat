cmd /k "python -m venv venv & cd /d venv\Scripts & activate & cd /d ..\.. & pip install --upgrade pip & pip install django & pip install djangorestframework & pip install django-cors-headers & cd /d back\backend & python manage.py makemigrations & python manage.py migrate & cd ..\.. cd /d venv\Scripts & deactivate "