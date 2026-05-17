from pydantic import BaseModel

class Pair(BaseModel):
    key: str
    value: float