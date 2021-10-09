from django.db import models


class Shortening(models.Model):
    slug = models.SlugField(unique=True)
    target_url = models.URLField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.slug} ({self.target_url})'
