import random
import string
from typing import Optional

from rest_framework.request import Request

from core.redis_client import redis_client
from shortenings import consts


def get_random_string(length: int) -> str:
    alphabet = string.ascii_lowercase + string.digits
    return ''.join(random.choices(alphabet, k=length))


def get_app_base_address(request: Request) -> str:
    return f'{request.scheme}://{request.get_host()}'


def cache_shortening(slug: str, target_url: str):
    redis_client.setex(slug, consts.SHORTENING_CACHE_TTL, target_url)


def get_cached_target_url(slug: str) -> Optional[str]:
    if target_url := redis_client.get(slug):
        return target_url.decode()
