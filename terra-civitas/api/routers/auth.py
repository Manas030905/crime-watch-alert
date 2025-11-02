from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

from auth.db import SessionLocal, init_db, create_user, authenticate_user

router = APIRouter(prefix="/auth", tags=["auth"])


class AuthRequest(BaseModel):
    username: str
    password: str
    role: Optional[str] = "user"


@router.post("/register")
def register(req: AuthRequest):
    db = SessionLocal()
    try:
        init_db()
        user = create_user(db, req.username, req.password, role=req.role)
        return {"id": user.id, "username": user.username, "role": user.role}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    finally:
        db.close()


@router.post("/login")
def login(req: AuthRequest):
    db = SessionLocal()
    try:
        user = authenticate_user(db, req.username, req.password)
        if user is None:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        return {"id": user.id, "username": user.username, "role": user.role}
    finally:
        db.close()
