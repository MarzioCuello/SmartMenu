source venv/bin/activate
cd back/backend
python3 manage.py makemigrations SmartMenuServer
python3 manage.py makemigrations 
python3 manage.py migrate SmartMenuServer
python3 manage.py migrate 
python3 manage.py runserver
deactivate