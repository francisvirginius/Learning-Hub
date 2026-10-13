"""Point d'entrée unique des routes de l'API : chaque module d'endpoints s'enregistre ici."""

from fastapi import APIRouter

from app.api.v1.endpoints import health

api_router = APIRouter()
api_router.include_router(health.router)
