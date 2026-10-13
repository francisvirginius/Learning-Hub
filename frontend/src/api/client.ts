// Client HTTP centralisé : toutes les requêtes vers le backend passent par ici.

const API_BASE = "/api/v1";

export class ApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE}${path}`);
  } catch {
    throw new ApiError(0, "Impossible de joindre le serveur.");
  }
  if (!response.ok) {
    throw new ApiError(response.status, `Le serveur a répondu avec l'erreur ${response.status}.`);
  }
  return (await response.json()) as T;
}
