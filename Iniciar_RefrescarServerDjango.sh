venv/Scripts/activate
cd back\backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
venv/Scripts/deactivate