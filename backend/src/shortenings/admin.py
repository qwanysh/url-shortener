from django.contrib import admin

from shortenings import models


@admin.register(models.Shortening)
class ShorteningAdmin(admin.ModelAdmin):
    list_display = (
        'author_id', 'slug', 'target_url', 'created_at', 'expires_at',
    )
