import sys
from pathlib import Path

# Ensure project root is on sys.path so packages like `auth` can be imported
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from auth.db import SessionLocal, init_db, create_user


def main():
    init_db()
    db = SessionLocal()
    try:
        try:
            user = create_user(db, "test_user", "test_pass", role="user")
            print({"status": "created", "id": user.id, "username": user.username})
        except ValueError as e:
            # user exists
            print({"status": "exists", "detail": str(e)})
    finally:
        db.close()


if __name__ == "__main__":
    main()
