python3 -m venv venv && source venv/bin/activate
pip3 install --upgrade pip
pip3 install -r requirements.txt
cd back/backend
python3 manage.py makemigrations SmartMenuServer
python3 manage.py makemigrations 
python3 manage.py migrate SmartMenuServer
python3 manage.py migrate
deactivate