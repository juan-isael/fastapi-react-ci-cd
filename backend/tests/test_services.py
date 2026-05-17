import pytest
from app.schemas.store_schema import Pair
from app.services.store_service import (
    add_pair_service,
    add_to_cart_service,
    create_word_service,
    d,
    arr
)


@pytest.fixture(autouse=True)
def reset_state():

    arr.clear()
    d.clean_dictionary()


def test_add_pair_service():

    pair = Pair(
        key="apple",
        value=2.5
    )

    result = add_pair_service(pair)

    assert result["message"] == "Pair added"
    assert result["dictionary"]["apple"] == 2.5


def test_add_to_cart_service_CleanCheckout():

    d.newentry("apple", 2.0)

    add_to_cart_service("apple")

    result = add_to_cart_service("clean_checkout")

    assert result["status"] == 200
    assert result["items"] == []
    assert result["total"] == ""


def test_add_to_cart_service_success():

    d.newentry("apple", 2.0)

    result = add_to_cart_service("apple")

    assert result["status"] == 200
    assert result["items"] == ["apple"]
    assert result["subtotal"] == 2.0


def test_add_to_cart_service_fail():

    result = add_to_cart_service("banana")

    assert result["status"] == 404
    assert "Can't find entry" in result["message"]


def test_create_word_service_success():

    result = create_word_service(["yoda", "best", "has"])

    assert result["new_word"] == "yes"


def test_create_word_service_fail():

    result = create_word_service(["yoda", "best", "ha"])

    assert result["new_word"] is None
    assert "Wrong input" in result["description"]
