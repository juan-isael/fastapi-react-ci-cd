from fastapi import APIRouter, Query
from typing import List

from app.schemas.store_schema import Pair

from app.services.store_service import (
    add_pair_service,
    add_to_cart_service,
    create_word_service
)

router = APIRouter()

@router.post("/add")
def add_pair(pair: Pair):

    return add_pair_service(pair)

@router.get("/buy")
def add_to_cart(key: str):
    
    return add_to_cart_service(key)

@router.get("/create")
def create_word(arr: List[str] = Query(None)):

    return create_word_service(arr)
