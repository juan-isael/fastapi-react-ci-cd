from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.store_routes import router as store_router

app = FastAPI()

# CORS: allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://frontend"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(store_router)