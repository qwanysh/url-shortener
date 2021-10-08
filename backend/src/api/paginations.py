from rest_framework import pagination


class ShorteningPagination(pagination.PageNumberPagination):
    page_size = 5
