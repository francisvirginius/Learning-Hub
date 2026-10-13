import { useCallback, useEffect, useState } from "react";
import { getHealth, type HealthResponse } from "./api/health";

type HealthState =
  | { kind: "loading" }
  | { kind: "ok"; data: HealthResponse }
  | { kind: "error"; message: string };

export default function App() {
  const [health, setHealth] = useState<HealthState>({ kind: "loading" });

  const checkHealth = useCallback(async () => {
    setHealth({ kind: "loading" });
    try {
      setHealth({ kind: "ok", data: await getHealth() });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erreur inconnue.";
      setHealth({ kind: "error", message });
    }
  }, []);

  useEffect(() => {
    void checkHealth();
  }, [checkHealth]);

  return (
    <main className="container">
      <h1>SpeakFlow</h1>
      <p className="subtitle">Practice your spoken English, one conversation at a time.</p>

      <section className="card">
        <h2>État du backend</h2>
        {health.kind === "loading" && <p>Vérification en cours…</p>}
        {health.kind === "ok" && (
          <p className="status ok">
            ✅ Connecté — API v{health.data.version} ({health.data.environment})
          </p>
        )}
        {health.kind === "error" && (
          <p className="status error">❌ {health.message} Le backend est-il démarré ?</p>
        )}
        <button onClick={() => void checkHealth()} disabled={health.kind === "loading"}>
          Revérifier
        </button>
      </section>
    </main>
  );
}
