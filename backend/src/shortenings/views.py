from django.http import Http404
from django.views.generic import RedirectView

from shortenings import utils
from shortenings.models import Shortening


class ShorteningRedirectView(RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        slug = kwargs.get('slug')

        if cached_target_url := utils.get_cached_target_url(slug):
            return cached_target_url

        try:
            shortening = Shortening.objects.get(slug=slug)
            utils.cache_shortening(shortening.slug, shortening.target_url)
            return shortening.target_url
        except Shortening.DoesNotExist:
            raise Http404()
