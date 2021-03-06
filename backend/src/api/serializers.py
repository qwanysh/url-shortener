from django.db import IntegrityError
from django.urls import reverse
from rest_framework import serializers

from shortenings import utils
from shortenings.models import Shortening


class ShorteningSerializer(serializers.ModelSerializer):
    author_id = serializers.UUIDField(required=False)
    slug = serializers.SlugField(required=False, write_only=True)
    short_url = serializers.SerializerMethodField()
    target_url = serializers.URLField()

    def get_short_url(self, obj):
        base_address = utils.get_app_base_address(self.context['request'])
        endpoint = reverse('shortenings:redirect', kwargs={'slug': obj.slug})
        return f'{base_address}{endpoint}'

    def create(self, validated_data):
        if not validated_data.get('slug'):
            validated_data['slug'] = Shortening.generate_unique_slug()
        try:
            return Shortening.objects.create(**validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'slug': ['Slug already exists', 'test'],
            })

    class Meta:
        model = Shortening
        fields = ('id', 'author_id', 'slug', 'target_url', 'created_at',
                  'short_url')
