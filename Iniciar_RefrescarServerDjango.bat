cmd /k "cd /d venv\Scripts & activate & cd /d ..\.. & cd /d back\backend & python manage.py makemigrations & python manage.py migrate & python manage.py runserver &cd /d ..\.. cd /d venv\Scripts & deactivate "