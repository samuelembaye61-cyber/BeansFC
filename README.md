# BeansFC Backend

This repository contains the Django backend template for a football club site.
It provides an admin interface and JSON APIs for players, matches, news,
sponsors, club branding, and player-interest submissions.

## Requirements

- Python 3
- Dependencies listed in `requirements.txt`

## Run locally

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

Copy `.env.example` to `.env` and set a unique `DJANGO_SECRET_KEY` and any
environment-specific values. The `.env` file is ignored by Git.

Initialize the database and optionally load sample players and matches:

```bash
python backend/manage.py migrate
python backend/manage.py loaddata players matches
python backend/manage.py createsuperuser
python backend/manage.py runserver 127.0.0.1:8001
```

The API and admin are available at `http://127.0.0.1:8001/api/` and
`http://127.0.0.1:8001/admin/`.

## Club configuration

Set `CLUB_NAME`, `CLUB_SHORT_NAME`, `CLUB_TAGLINE`, and `CLUB_NAME_ALIASES` in
`.env` to provide defaults for a deployment. Club settings can also be updated
in Django admin. Run a separate deployment with its own environment, database,
and uploaded media for each club.

The frontend is intentionally not included in this repository.
