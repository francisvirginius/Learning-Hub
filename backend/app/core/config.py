"""Configuration de l'application, lue depuis les variables d'environnement.

Toutes les variables sont préfixées par SPEAKFLOW_ (ex. SPEAKFLOW_ENVIRONMENT=production)
et peuvent aussi être définies dans un fichier .env à la racine du backend.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_prefix="SPEAKFLOW_", env_file=".env", extra="ignore")

    app_name: str = "SpeakFlow API"
    version: str = "0.1.0"
    environment: str = "development"


settings = Settings()
