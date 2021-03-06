from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins, viewsets

from api import paginations, serializers
from shortenings.models import Shortening


class ShorteningViewSet(mixins.ListModelMixin, mixins.CreateModelMixin,
                        viewsets.GenericViewSet):
    queryset = Shortening.objects.order_by('-created_at')
    serializer_class = serializers.ShorteningSerializer
    pagination_class = paginations.ShorteningPagination
    filter_backends = DjangoFilterBackend,
    filterset_fields = 'author_id',
