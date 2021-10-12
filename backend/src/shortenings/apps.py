from django.apps import AppConfig


class ShorteningsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'shortenings'

    def ready(self):
        from shortenings import signals  # noqa: F401
