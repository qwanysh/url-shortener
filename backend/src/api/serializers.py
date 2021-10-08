from rest_framework import serializers

from shortenings.models import Shortening


class ShorteningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shortening
        fields = 'slug', 'target_url'
