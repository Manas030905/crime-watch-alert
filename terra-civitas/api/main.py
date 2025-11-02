"""
Entrypoint for FastAPI app.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator
from .routers import health, predict, streams, alerts, models, auth

app = FastAPI(title="Sentinel-Crime API")

# Ensure DB is initialized for auth
try:
	from ..auth.db import init_db
	init_db()
except Exception:
	# best-effort: initialization may be handled elsewhere
	pass

# Enable CORS for local frontend during development
app.add_middleware(
	CORSMiddleware,
	allow_origins=["http://localhost:8080"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

# Routers
app.include_router(health.router)
app.include_router(models.router)
app.include_router(predict.router)
app.include_router(streams.router)
app.include_router(alerts.router)
app.include_router(auth.router)

# Metrics
Instrumentator().instrument(app).expose(app)
