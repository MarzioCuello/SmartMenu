python -m venv && venv/Scripts/activate
pip install --upgrade pip
pipinstall -r requirements.txt
cd back/backend
python manage.py makemigrations
python manage.py migrate
venv/Scripts/deactivate