from backend import app


def test_get_movies():
    client = app.test_client()
    response = client.get("/movies")
    assert response.status_code == 200
