# url-shortener

### Setup
```bash
docker-compose build
docker-compose run backend python manage.py migrate
docker-compose run backend python manage.py createsuperuser
```

### Run
```bash
docker-compose up
# Open browser on http://localhost:3000 (or another port specified in docker-compose.yml)
```

### Test
```bash
docker-compose run backend pytest
```
