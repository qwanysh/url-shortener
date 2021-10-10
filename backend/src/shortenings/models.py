from django.db import models

from shortenings import utils


class Shortening(models.Model):
    author_id = models.UUIDField(null=True, blank=True)
    slug = models.SlugField(unique=True)
    target_url = models.URLField()
    created_at = models.DateTimeField(auto_now=True)

    @classmethod
    def generate_unique_slug(cls):
        slugs = set(cls.objects.values_list('slug', flat=True))
        while True:
            random_slug = utils.get_random_string(length=6)
            if random_slug not in slugs:
                return random_slug

    def __str__(self):
        return f'{self.slug} ({self.target_url})'
