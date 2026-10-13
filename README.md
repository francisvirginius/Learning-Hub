# SpeakFlow

Application web pour pratiquer l'anglais à l'oral : écouter une question, répondre au micro,
obtenir une transcription, des corrections expliquées en français et suivre sa progression.

> État actuel : **Sprint 1 — socle technique** (backend FastAPI + frontend React connectés).

## Stack

- **Backend** : Python 3.12+, FastAPI, Pydantic, pytest, Ruff
- **Frontend** : React 18, TypeScript (strict), Vite

## Prérequis

- Python 3.12 ou plus récent
- Node.js 20 ou plus récent

## Installation

### Backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1        # macOS/Linux : source .venv/bin/activate
pip install -e ".[dev]"
copy .env.example .env              # macOS/Linux : cp .env.example .env
```

### Frontend

```powershell
cd frontend
npm install
```

## Lancement (deux terminaux)

```powershell
# Terminal 1 — API sur http://localhost:8000
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn app.main:app --reload
```

```powershell
# Terminal 2 — interface sur http://localhost:5173
cd frontend
npm run dev
```

Ouvrir http://localhost:5173 : la carte « État du backend » doit afficher ✅ Connecté.

- Documentation interactive de l'API : http://localhost:8000/docs
- En développement, Vite redirige `/api/*` vers le backend (voir `frontend/vite.config.ts`).

## Qualité

```powershell
cd backend
pytest              # tests
ruff check .        # lint
ruff format .       # formatage
```

```powershell
cd frontend
npm run typecheck   # vérification TypeScript
npm run build       # build de production
```

## Structure

```
backend/
  app/
    main.py                     # création de l'application FastAPI
    core/config.py              # configuration (variables SPEAKFLOW_*)
    api/router.py               # enregistrement des routes
    api/v1/endpoints/health.py  # GET /api/v1/health
    schemas/                    # contrats d'API (Pydantic)
  tests/
frontend/
  src/
    api/                        # client HTTP centralisé + appels par ressource
    App.tsx
```

## API

| Méthode | Route            | Description                       |
| ------- | ---------------- | --------------------------------- |
| GET     | `/api/v1/health` | Vérifie que le backend fonctionne |
