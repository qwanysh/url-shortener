import random
import string


def get_random_string(length: int) -> str:
    alphabet = string.ascii_lowercase + string.digits
    return ''.join(random.choices(alphabet, k=length))


def get_app_base_address(request):
    return f'{request.scheme}://{request.get_host()}'
