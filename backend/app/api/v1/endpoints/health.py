from fastapi import APIRouter

from app.core.config import settings
from app.schemas.health import HealthResponse

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    """Indique que le backend est démarré et répond."""
    return HealthResponse(status="ok", version=settings.version, environment=settings.environment)
