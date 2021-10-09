from rest_framework import serializers

from shortenings.models import Shortening


class ShorteningSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)

    def create(self, validated_data):
        if not validated_data.get('slug'):
            validated_data['slug'] = Shortening.generate_unique_slug()
        return Shortening.objects.create(**validated_data)

    class Meta:
        model = Shortening
        fields = 'slug', 'target_url', 'created_at'
