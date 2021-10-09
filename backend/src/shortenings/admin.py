from django.contrib import admin

from shortenings import models


@admin.register(models.Shortening)
class ShorteningAdmin(admin.ModelAdmin):
    pass
